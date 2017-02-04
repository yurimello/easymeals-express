var bcrypt = require('bcrypt');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./user');

var sessionSchema = Schema({
    userId: {type: Schema.Types.ObjectId, required: true}
});

sessionSchema.statics.authenticate = function(email, password, callback){
  User.findOne({email: email}, function(err, user){

    if(user){
      encryptedPassword = bcrypt.hashSync(password, user.passwordSalt);
      if(encryptedPassword == user.encryptedPassword){
        session = new Session({userId: user._id});
        session.save(function(err, session){
          callback({
            session: session,
            user: {email: user.email, name: user.name},
            success: true, message: 'successful login'
          });
        })
      }
      else {
        callback({success: false, message: 'login failure'});
      }
    } else {
      callback({success: false, message: 'login failure'});
    }
  })
}

var Session = mongoose.model('Session', sessionSchema);
module.exports = Session;
