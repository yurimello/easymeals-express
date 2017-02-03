var helper = require('../test_helper')

const Recipe = require('../../app/models/recipe');
const User = require('../../app/models/user');

let should = helper.chai.should();


describe('Recipes', () => {
  beforeEach((done) => { //Before each test we empty the database

      Recipe.remove({}, (err) => {
        User.remove({}, (err) => {
          done();
        })
      });
  });

  describe('POST /recipes', () => {
    let actionPath = '/recipes/';
    var recipe;

    describe('Create a recipe', function(done){

      beforeEach(function(done){
        recipe = helper.recipesFactory.create('recipe').toObject();
        done();
      })

      it("status must be 200(ok)", function(done){
        helper.postServer(actionPath, recipe)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        })
      })

      it("respond with new recipe", function(done){
        helper.postServer(actionPath, recipe)
        .end((err, res) => {
          res.body.should.have.property('name').eql(recipe.name);
          done();
        })
      })
    })

    describe('Cannot create a recipe', function(done){
      describe('without name', function(done){

        beforeEach(function(done){
          recipe = helper.recipesFactory.create('recipe', {name: ''}).toObject();
          done();
        })

        it("status must be 422(unprocessable entity)", function(done){
          helper.postServer(actionPath, recipe)
          .end((err, res) => {
            res.should.have.status(422);
            done();
          })
        });

        it("is required", function(done){
          helper.postServer(actionPath, recipe)
          .end((err, res) => {
            res.body.errors.name.should.have.property('kind').eql('required');
            done();
          })
        })
      });

      describe('without category', function(done){

        beforeEach(function(done){
          recipe = helper.recipesFactory.create('recipe', {category: ''}).toObject();
          done();
        })

        it("status must be 422(unprocessable entity)", function(done){
          helper.postServer(actionPath, recipe)
          .end((err, res) => {
            res.should.have.status(422);
            done();
          })
        });

        it("is required", function(done){
          helper.postServer(actionPath, recipe)
          .end((err, res) => {
            res.body.errors.category.should.have.property('kind').eql('required');
            done();
          })
        })
      });

      describe('without any ingredients', function(done){

        beforeEach(function(done){
          recipe = helper.recipesFactory.create('without_ingredients-recipe').toObject();
          done();
        })

        it("status must be 422(unprocessable entity)", function(done){
          helper.postServer(actionPath, recipe)
          .end((err, res) => {
            res.should.have.status(422);
            done();
          })
        });

        it("is required", function(done){
          helper.postServer(actionPath, recipe)
          .end((err, res) => {
            res.body.errors.ingredients.should.have.property('kind').eql('required');
            done();
          })
        })
      });
    })
  })

  describe('PUT /recipes', () => {

    describe('Update recipe', (done) => {
      var otherName = 'Outro nome'

      it('status must be 200(ok)', function(done){
        helper.recipesFactory.create('recipe').save(function(err, recipe){
          actionPath = '/recipes/' + recipe._id;

          helper.putServer(actionPath, {name: otherName})
          .end((err, res) => {
            res.should.have.status(200);
            done();
          })
        })
      })

      it('name will change', function(done){
        helper.recipesFactory.create('recipe').save(function(err, recipe){
          actionPath = '/recipes/' + recipe._id;

          helper.putServer(actionPath, {name: otherName})
          .end((err, res) => {
            res.body.should.have.property('name').eql(otherName);
            done();
          })
        })
      });

      describe('Update user recipe', function(done){
        it('name is now Outro nome', function(done){
          var user = helper.usersFactory.create('user')

          helper.recipesFactory.create('recipe').save(function(err, recipe){
            actionPath = '/recipes/' + recipe._id;

            user.recipes.push(recipe)
            user.save(function(err, user){
              helper.putServer(actionPath, {name: otherName})
              .end((err, res) => {
                User.findById(user._id, function(err, u){
                  u.recipes[0].should.have.property('name').eql(otherName);
                  done();
                })
              })
            })
          })
        })
      })
    })
  });

  describe('GET /recipes', () => {
    let actionPath = '/recipes/';

    describe('GET all the recipes', (done) => {

      it('status must be 200(ok)', (done) => {
        helper.getServer(actionPath, null)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        })
      });

      it('response must to be an object', (done) => {
        helper.getServer(actionPath)
        .end((err, res) => {
          res.body.should.be.a('object');
          done();
        })
      });

      it('response object have a recipe array', (done) => {
        var recipe = helper.recipesFactory.create('recipe');

        recipe.save(function(err, recipe){
          helper.getServer(actionPath)
          .end((err, res) => {
            recipes = res.body.recipes
            recipes.should.be.a('array');
            done();
          })
        })
      });

      it('response object have a recipe array with given recipe', (done) => {
        var recipe = helper.recipesFactory.create('recipe');

        recipe.save(function(err, recipe){
          helper.getServer(actionPath)
          .end((err, res) => {
            recipe = res.body.recipes[0]
            recipe.should.have.property('_id').eql(recipe._id.toString());
            done();
          })
        })
      });

      it('response object have pagination page', (done) => {
        var recipe = helper.recipesFactory.create('recipe');

        recipe.save(function(err, recipe){
          helper.getServer(actionPath)
          .end((err, res) => {
            pagination = res.body.pagination
            pagination.should.have.property('page').eql(1);
            done();
          })
        })
      });

      it('response object have pagination pages', (done) => {
        var recipe = helper.recipesFactory.create('recipe');

        recipe.save(function(err, recipe){
          helper.getServer(actionPath)
          .end((err, res) => {
            pagination = res.body.pagination
            pagination.should.have.property('pages').eql(1);
            done();
          })
        })
      });

    })
  })
});
