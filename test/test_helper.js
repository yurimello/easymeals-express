process.env.ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');

chai.use(chaiHttp);

let usersFactory = require('./factories/users_factory');
let recipesFactory = require('./factories/recipes_factory');

module.exports = {
  chai: chai,
  chaiHttp: chaiHttp,
  server: server,

  usersFactory: usersFactory,
  recipesFactory: recipesFactory,

  actionDelete: function(path) {
    return this.chai.request(this.server).delete(path)
  },

  postServer: function(path, params){
    return this.chai.request(this.server).post(path).send(params)
  },

  putServer: function(path, params){
    return this.chai.request(this.server).put(path).send(params)
  },

  getServer: function(path, params){
    request = this.chai.request(this.server).get(path)
    if(params)
      request.send(params)
    return request
  }
}
