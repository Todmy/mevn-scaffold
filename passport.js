const passport = require('passport')
const { Strategy: LocalStrategy } = require('passport-local')
const { User } = require('./modules').models

passport.use(new LocalStrategy(async (username, password, cb) => {
  User.findOne({ username, password }, (err, user) => {
    if (err) {
      cb(err)
    }

    if (!user || !isPasswordMatches(password, user.password)) { 
      return cb(null, false) 
    }
    
    return cb(null, user)
  })
}))

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  User.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

function isPasswordMatches(passowrdFromReq, passwordFromDb) {
  return passowrdFromReq === passwordFromDb
}

module.exports = passport