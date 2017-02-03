process.env.ENV = 'test';

var usersFactory = require('../factories/users_factory');
var receipesFactory = require('../factories/recipes_factory');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../app');
let should = chai.should();

const User = require('../../app/models/user');

chai.use(chaiHttp);

describe('Users', () => {
  beforeEach((done) => { //Before each test we empty the database

      User.remove({}, (err) => {
         done();
      });
  });

  function postServer(path, params){
    return chai.request(server).post(path).send(params)
  }

  function putServer(path, params){
    return chai.request(server).put(path).send(params)
  }

  function getServer(path, params){
    request = chai.request(server).get(path)
    if(params)
      request.send(params)
    return request
  }

  describe('PUT /users/:userId/bookmark/:receipeId', () => {

    describe('User bookmarks a receipe', (done) => {
      it('status must be 200(ok)', (done) => {
        let user = usersFactory.create('user');
        let receipe = receipesFactory.create('receipe');

        receipe.save(function(err, receipe){
          user.save(function(err, user){
            let actionPath = '/users/'+ user._id + '/bookmarks/' + receipe._id;

            putServer(actionPath)
            .end((err, res) => {
              res.should.have.status(200);
              done();
            })
          })
        });
      });

      it('return user with new receipe', (done) => {
        let user = usersFactory.create('user');
        let receipe = receipesFactory.create('receipe');

        receipe.save(function(err, receipe){
          user.save(function(err, user){
            let actionPath = '/users/'+ user._id + '/bookmarks/' + receipe._id;

            putServer(actionPath)
            .end((err, res) => {
              res.body.receipe.should.have.property('receipeId').eql(receipe._id.toString());
              done();
            })
          })
        });
      })
    });

    describe('Undefined user tries to bookmark a receipe', (done) => {
      it('status must be 404(not found)', (done) => {
        let receipe = receipesFactory.create('receipe');

        receipe.save(function(err, receipe){
          let actionPath = '/users/'+ undefined + '/bookmarks/' + receipe._id;

          putServer(actionPath)
          .end((err, res) => {
            res.should.have.status(404);
            done();
          })
        })
      });

      it('must return not found user error message', (done) => {
        let receipe = receipesFactory.create('receipe');

        receipe.save(function(err, receipe){
          let actionPath = '/users/'+ undefined + '/bookmarks/' + receipe._id;

          putServer(actionPath)
          .end((err, res) => {
            res.body.error.should.have.property('message').eql('Not found user');
            done();
          })
        })
      })
    });

    describe('User tries to bookmark an undefined receipe', (done) => {
      it('status must be 404(not found)', (done) => {
        let user = usersFactory.create('user');

        user.save(function(err, user){
          let actionPath = '/users/'+ user._id + '/bookmarks/' + undefined;

          putServer(actionPath)
          .end((err, res) => {
            res.should.have.status(404);
            done();
          })
        })
      });

      it('must return not found receipe error message', (done) => {
        let user = usersFactory.create('user');

        user.save(function(err, user){
          let actionPath = '/users/'+ user._id + '/bookmarks/' + undefined;

          putServer(actionPath)
          .end((err, res) => {
            res.body.error.should.have.property('message').eql('Not found receipe');
            done();
          })
        })
      })
    })
  })

  describe('POST /users', () => {
    let actionPath = '/users/';

    describe('Create an user', (done) => {
      let user = usersFactory.create('user').toObject();

      it('status must be 200(ok)', (done) => {
        postServer(actionPath, user)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        })
      });

      it('must return new user', (done) => {
        postServer(actionPath, user)
        .end((err, res) => {
          newUser = res.body
          newUser.should.have.property('email').eql(user.email);
          done();
        })
      });
    });

    describe('Cannot create an user', (done) => {
      let user = usersFactory.create('user', {email: ''}).toObject();

      it('status must be 422(Unprocessable Entity)', (done) => {
        postServer(actionPath, user)
        .end((err, res) => {
          res.should.have.status(422);
          done();
        })
      });

      it('email is required', (done) => {
        postServer(actionPath, user)
        .end((err, res) => {
          res.body.errors.email.should.have.property('kind').eql('required');
          done();
        })
      });
    })
  })

  describe('GET /users', () => {
    let actionPath = '/users/';

    describe('GET all the users', (done) => {
      it('status must be 200(ok)', (done) => {
        getServer(actionPath, null)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        })
      });

      it('response must to be an array', (done) => {
        getServer(actionPath, null)
        .end((err, res) => {
          res.body.should.be.a('array');
          done();
        })
      });

      it('response must to be an objects array', (done) => {
        var user = usersFactory.create('user');

        user.save(function(err, user){
          getServer(actionPath, null)
          .end((err, res) => {
            firstUser = res.body[0]
            firstUser.should.be.a('object');
            done();
          })
        })
      });

    })
  })
})
