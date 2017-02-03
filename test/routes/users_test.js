var helper = require('../test_helper')

const User = require('../../app/models/user');

let should = helper.chai.should();

describe('Users', () => {
  beforeEach((done) => { //Before each test we empty the database

      User.remove({}, (err) => {
         done();
      });
  });


  describe('PUT /users/:userId/bookmark/:recipeId', () => {

    describe('User bookmarks a recipe', (done) => {
      it('status must be 200(ok)', (done) => {
        let user = helper.usersFactory.create('user');
        let recipe = helper.recipesFactory.create('recipe');

        recipe.save(function(err, recipe){
          user.save(function(err, user){
            let actionPath = '/users/'+ user._id + '/bookmarks/' + recipe._id;

            helper.putServer(actionPath)
            .end((err, res) => {
              res.should.have.status(200);
              done();
            })
          })
        });
      });

      it('return user with new recipe', (done) => {
        let user = helper.usersFactory.create('user');
        let recipe = helper.recipesFactory.create('recipe');

        recipe.save(function(err, recipe){
          user.save(function(err, user){
            let actionPath = '/users/'+ user._id + '/bookmarks/' + recipe._id;

            helper.putServer(actionPath)
            .end((err, res) => {
              res.body.recipe.should.have.property('recipeId').eql(recipe._id.toString());
              done();
            })
          })
        });
      })
    });

    describe('Undefined user tries to bookmark a recipe', (done) => {
      it('status must be 404(not found)', (done) => {
        let recipe = helper.recipesFactory.create('recipe');

        recipe.save(function(err, recipe){
          let actionPath = '/users/'+ undefined + '/bookmarks/' + recipe._id;

          helper.putServer(actionPath)
          .end((err, res) => {
            res.should.have.status(404);
            done();
          })
        })
      });

      it('must return not found user error message', (done) => {
        let recipe = helper.recipesFactory.create('recipe');

        recipe.save(function(err, recipe){
          let actionPath = '/users/'+ undefined + '/bookmarks/' + recipe._id;

          helper.putServer(actionPath)
          .end((err, res) => {
            res.body.error.should.have.property('message').eql('Not found user');
            done();
          })
        })
      })
    });

    describe('User tries to bookmark an undefined recipe', (done) => {
      it('status must be 404(not found)', (done) => {
        let user = helper.usersFactory.create('user');

        user.save(function(err, user){
          let actionPath = '/users/'+ user._id + '/bookmarks/' + undefined;

          helper.putServer(actionPath)
          .end((err, res) => {
            res.should.have.status(404);
            done();
          })
        })
      });

      it('must return not found recipe error message', (done) => {
        let user = helper.usersFactory.create('user');

        user.save(function(err, user){
          let actionPath = '/users/'+ user._id + '/bookmarks/' + undefined;

          helper.putServer(actionPath)
          .end((err, res) => {
            res.body.error.should.have.property('message').eql('Not found recipe');
            done();
          })
        })
      })
    })
  })

  describe('POST /users', () => {
    let actionPath = '/users/';

    describe('Create an user', (done) => {
      let user = helper.usersFactory.create('user').toObject();

      it('status must be 200(ok)', (done) => {
        helper.postServer(actionPath, user)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        })
      });

      it('must return new user', (done) => {
        helper.postServer(actionPath, user)
        .end((err, res) => {
          newUser = res.body
          newUser.should.have.property('email').eql(user.email);
          done();
        })
      });
    });

    describe('Cannot create an user', (done) => {
      let user = helper.usersFactory.create('user', {email: ''}).toObject();

      it('status must be 422(Unprocessable Entity)', (done) => {
        helper.postServer(actionPath, user)
        .end((err, res) => {
          res.should.have.status(422);
          done();
        })
      });

      it('email is required', (done) => {
        helper.postServer(actionPath, user)
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
        helper.getServer(actionPath, null)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        })
      });

      it('response must to be an array', (done) => {
        helper.getServer(actionPath, null)
        .end((err, res) => {
          res.body.should.be.a('array');
          done();
        })
      });

      it('response must to be an objects array', (done) => {
        var user = helper.usersFactory.create('user');

        user.save(function(err, user){
          helper.getServer(actionPath, null)
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
