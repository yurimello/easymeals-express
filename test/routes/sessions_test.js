var helper = require('../test_helper')

const User = require('../../app/models/user');
const Session = require('../../app/models/session');

let should = helper.chai.should();

describe('Sessions', () => {
  beforeEach((done) => {
    Session.remove({}, (err) => {
      User.remove({}, (err) => {
        done();
      });
    })
  });

  describe('POST /sessions', () => {
    let actionPath = '/sessions';

    describe('Create a session', (done) => {
      let user;
      let password;

      beforeEach((done) => {
        user = helper.usersFactory.create('user');
        password = user._password;
        done();
      })

      it('status must be 200(ok)', (done) => {
        user.save(function(err, user){
          helper.postServer(actionPath, {email: user.email, password: password})
          .end((err, res) => {
            res.should.have.status(200);
            done();
          })
        })
      });

      it('session will be created', (done) => {
        user.save(function(err, user){
          helper.postServer(actionPath, {email: user.email, password: password})
          .end((err, res) => {
            Session.find({}, function(err, sessions){
              sessions.length.should.eql(1)
              done();
            })
          })
        })
      });

      it('session will be created with userId', (done) => {
        user.save(function(err, user){
          helper.postServer(actionPath, {email: user.email, password: password})
          .end((err, res) => {
            res.body.session.should.have.property('userId').eql(user._id.toString());
            done();
          })
        })
      });
    });

    describe('Cannot create a session', function(done) {
      var user, password;
      describe('with wrong email', function(done){
        beforeEach((done) => {
          user = helper.usersFactory.create('user');
          password = user._password;
          done();
        });

        it('status must be 401(Unauthorized)', (done) => {
          user.save(function(err, user){
            helper.postServer(actionPath, {email: 'wrong mail', password: password})
            .end((err, res) => {
              res.should.have.status(401);
              done();
            })
          })
        });

        it('response have error message', (done) => {
          user.save(function(err, user){
            helper.postServer(actionPath, {email: 'wrong mail', password: password})
            .end((err, res) => {
              res.body.should.have.property('message').eql('login failure');
              done();
            })
          })
        });
      });

      describe('with wrong password', function(done){
        beforeEach((done) => {
          user = helper.usersFactory.create('user');
          password = 'wrongpassword'
          done();
        });

        it('status must be 401(Unauthorized)', (done) => {
          user.save(function(err, user){
            helper.postServer(actionPath, {email: user.email, password: password})
            .end((err, res) => {
              res.should.have.status(401);
              done();
            })
          })
        });

        it('response have error message', (done) => {
          user.save(function(err, user){
            helper.postServer(actionPath, {email: user.email, password: password})
            .end((err, res) => {
              res.body.should.have.property('message').eql('login failure');
              done();
            })
          })
        });
      })
    })
  });

  describe('DELETE /sessions/:sessionId', function(done) {
    var user
    beforeEach((done) => {
      user = helper.usersFactory.create('user');
      done();
    });

    describe('Delete a session', function(done){
      it('status must be 200(ok)', (done) => {
        user.save(function(err, user){
          new Session({userId: user._id}).save(function(err, session){
            var actionPath = '/sessions/' + session._id;
            helper.actionDelete(actionPath)
            .end((err, res) => {
              res.should.have.status(200);
              done();
            })
          })
        })
      });

      it('response have success message', (done) => {
        user.save(function(err, user){
          new Session({userId: user._id}).save(function(err, session){
            var actionPath = '/sessions/' + session._id;
            helper.actionDelete(actionPath)
            .end((err, res) => {
              res.body.should.have.property('message').eql('successful logout');
              done();
            })
          })
        })
      });
    })
  })
});
