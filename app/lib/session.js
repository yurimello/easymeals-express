var User = require('../models/user');
var bcrypt = require('bcrypt');

module.exports = {
  isAuthenticated: function (req, res, next){
    User.findById(req.session.userId, function(err, user){
      if(err) throw err

      if(user) return next();

      res.redirect('/sessions');

    })
  },

  authenticate: function(email, password, callback){
    User.findOne({email: email}, function(err, user){
      if(err) throw err;

      encryptedPassword = bcrypt.hashSync(password, user.passwordSalt);
      if(encryptedPassword == user.encryptedPassword){
        callback({user: user, success: true});
      }
      else {
        callback({user: user, success: false});
      }
    })
  }
}
