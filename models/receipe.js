var mongoose = require('mongoose');
var paginate = require('mongoose-paginate');
var Schema = mongoose.Schema;



var receipeInfoSchema = Schema({
  preptime: String,
  receipe_yield: String
});

var ingredientSchema = Schema({
  lenght: Number,
  unity_type: String,
  name: String
})

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
    userCount: Number,
    receipe_info: receipeInfoSchema,
    ingredients: [ingredientSchema],
    instructions: [instructionSchema]
});

receipeSchema.plugin(paginate)


var Receipe = mongoose.model('Receipe', receipeSchema);

module.exports = Receipe;
