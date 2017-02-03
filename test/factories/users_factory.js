const User = require('../../app/models/user');
var Factory = require('js-factories');

Factory.define('user', function (attributes) {
  attributes = attributes || {};

  return new User({
    email: attributes.hasOwnProperty('email') ? attributes.email : 'test@user.com',
    password: attributes.hasOwnProperty('password') ? attributes.password : 'testpassword',
    recipes: []
  });
});

module.exports = Factory
