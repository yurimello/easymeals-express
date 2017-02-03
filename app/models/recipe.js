var mongoose = require('mongoose');
var paginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var suggestgrid = require('../lib/suggestgrid');

var recipeInfoSchema = Schema({
  preptime: String,
  recipe_yield: String
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

var recipeSchema = Schema({
    name: String,
    image: String,
    uri: String,
    category: String,
    recipeId: String,
    userIds: [String],
    recipe_info: recipeInfoSchema,
    ingredients: [ingredientSchema],
    instructions: [instructionSchema],
    bookmarkCount: Number,
    price: Number
});

recipeSchema.methods.ingredientsForSuggest = function(){

  return this.ingredients.map(function(ingredient){
    return ingredient.name;
  })

}

recipeSchema.methods.forSuggest = function(){
  return {
    id: this._id, name: this.name, category: this.category,
    ingredients: this.ingredientsForSuggest()
  }
}

recipeSchema.plugin(paginate)


recipeSchema.statics.saveSuggestItems = function(callback){
  this.find({}, function(err, recipes){
    items = recipes.map(function(recipe){
      return recipe.forSuggest();
    })

    var metadataController = suggestgrid.MetadataController;
    metadataController.postBulkItems(items, function(error, response) {
      callback(error, response);
    });
  })
}


recipeSchema.pre('update', function(next, done) {
  recipeId = this._conditions._id
  document = this._update

  Recipe.findById(recipeId, function(err, recipe){

    recipe.usersRecipe(document["$set"], function(err, recipe){
      if(err) throw err;
    })
    next();
  })
})

recipeSchema.methods.related = function(callback){
  var similarityController = suggestgrid.SimilarityController

  similarityController.getSimilarItems({item_id: this._id, filter: {equal: {category: this.category}}}, function(error, response) {
    if(error) throw error;

    var ids = response.items.map(function(item){
      return mongoose.Types.ObjectId(item.id);
    })

    Recipe.find({_id: {$in: ids}}, "_id name image", function(err, recipes){
      callback(err, recipes)
    })
  })
}

recipeSchema.methods.usersRecipe = function(document, callback){
  var User = require('./user')

  recipe = this;

  User.where({'recipes.recipeId': recipe._id}).populate('recipes').then(function(users){

    users.forEach(function(user){
      for(i=0; i < user.recipes.length; i++){
        if(recipe.recipeId == user.recipes[i].recipeId){
          nested = {}
          nested['recipes.' + i] = document
          user.update({'$set': nested}, function(){if(err) throw err});
          break;
        }
      }
    })

    callback(err, recipes);
  })
}

var Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
