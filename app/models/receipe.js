var mongoose = require('mongoose');
var paginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var suggestgrid = require('../lib/suggestgrid');

var receipeInfoSchema = Schema({
  preptime: String,
  receipe_yield: String
});

var ingredientSchema = Schema({
  lenght: String,
  unity_type: String,
  name: String,
  price: Number
})

ingredientSchema.virtual('text').get(function() {
  var str = ''

  if(this.lenght) str = str + this.lenght + ' '
  if(this.unity_type) str = str + this.unity_type + ' '
  if(this.name) str = str + this.name

  return str
});

var instructionSchema = Schema({
  text: String,
  order: Number
})

var receipeSchema = Schema({
    name: String,
    image: String,
    uri: String,
    category: String,
    receipeId: String,
    userIds: [String],
    receipe_info: receipeInfoSchema,
    ingredients: [ingredientSchema],
    instructions: [instructionSchema],
    bookmarkCount: Number,
    price: Number
});

receipeSchema.methods.ingredientsForSuggest = function(){

  return this.ingredients.map(function(ingredient){
    return ingredient.name;
  })

}

receipeSchema.methods.forSuggest = function(){
  return {
    id: this._id, name: this.name, category: this.category,
    ingredients: this.ingredientsForSuggest()
  }
}

receipeSchema.plugin(paginate)


receipeSchema.statics.saveSuggestItems = function(callback){
  this.find({}, function(err, receipes){
    items = receipes.map(function(receipe){
      return receipe.forSuggest();
    })

    var metadataController = suggestgrid.MetadataController;
    metadataController.postBulkItems(items, function(error, response) {
      callback(error, response);
    });
  })
}


receipeSchema.pre('update', function(next, done) {
  receipeId = this._conditions._id
  document = this._update

  Receipe.findById(receipeId, function(err, receipe){

    receipe.usersReceipe(document["$set"], function(err, receipe){
      if(err) throw err;
    })
    next();
  })
})

receipeSchema.methods.related = function(callback){
  var similarityController = suggestgrid.SimilarityController

  similarityController.getSimilarItems({item_id: this._id, filter: {equal: {category: this.category}}}, function(error, response) {
    if(error) throw error;

    var ids = response.items.map(function(item){
      return mongoose.Types.ObjectId(item.id);
    })

    Receipe.find({_id: {$in: ids}}, "_id name image", function(err, receipes){
      callback(err, receipes)
    })
  })
}

receipeSchema.methods.usersReceipe = function(document, callback){
  var User = require('./user')

  receipe = this;

  User.where({'receipes.receipeId': receipe._id}).populate('receipes').then(function(users){

    users.forEach(function(user){
      for(i=0; i < user.receipes.length; i++){
        if(receipe.receipeId == user.receipes[i].receipeId){
          nested = {}
          nested['receipes.' + i] = document
          user.update({'$set': nested}, function(){if(err) throw err});
          break;
        }
      }
    })

    callback(err, receipes);
  })
}

var Receipe = mongoose.model('Receipe', receipeSchema);

module.exports = Receipe;
