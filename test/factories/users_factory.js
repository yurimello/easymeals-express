const User = require('../../app/models/user');
var chai = require('chai');
var chaiJsFactories = require('chai-js-factories');
chai.use(chaiJsFactories);

chai.factory.define('user', function (attributes) {
  attributes = attributes || {};

  return new User({
    email: attributes.hasOwnProperty('email') ? attributes.email : 'test@user.com',
    password: attributes.hasOwnProperty('password') ? attributes.password : 'testpassword',
    receipes: [attributes.receipe]
  });
});

module.exports = chai.factory
