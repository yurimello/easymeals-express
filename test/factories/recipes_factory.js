const Recipe = require('../../app/models/recipe');
var chai = require('chai');
var chaiJsFactories = require('chai-js-factories');
chai.use(chaiJsFactories);

chai.factory.define('recipe', function (attributes) {
  attributes = attributes || {};
  recipeAttrs = {
    name: attributes.hasOwnProperty('name') || 'Macarrão bolonhesa',
    category: 'massas',
    image: 'http://img.itdg.com.br/tdg/images/recipes/000/000/231/80944/80944_original.jpg',
    uri: 'http://www.tudogostoso.com.br/receita/231-macarrao-bolonhesa.html',
    recipe_info: {
      preptime: '45 min',
      recipe_yield: '6'
    },
    ingredients: [
      { name: 'Cebola', length: '1' },
      { name: 'Azeite de oliva', length: '1', unity_type: 'Colher de Sopa' },
      { name: 'Azeitonas', length: '5', unity_type: '' },
      { name: 'Molho de tomate', length: '2', unity_type: 'latas' },
      { name: 'Caldo de carne', length: '2', unity_type: 'cubos' },
      { name: 'Cenoura', length: '1', unity_type: '' },
      { name: 'Tomates picados', length: '2', unity_type: '' },
      { name: 'Macarrão', length: '500', unity_type: 'g' },
      { name: 'Carne Moída', length: '500', unity_type: 'g' },
    ],
    instructions: [
      {text: 'Pique a cebola, refogue por alguns minutos em uma panela com óleo quente até dourar a cebola, mexendo para não queimar', order: 1},
      {text: 'Misture a carne moída, deixe cozinhar por alguns minutos', order: 2},
      {text: 'Adicione o caldo, o molho, os tomates picados, a cenoura cortada ao meio e mexa bem, deixe cozinhar por aproximadamente 40minutos em fogo baixo com a panela semi tampada', order: 3},
      {text: 'Descarte a cenoura depois que o molho estiver pronto', order: 4},
      {text: 'Prepare o macarrão, misture o molho ao macarrão e sirva', order: 5},
      {text: 'Acompanhamento Sugerido: Queijo Ralado', order: 6},
    ]
  };

  return new Recipe(recipeAttrs);
});

module.exports = chai.factory
