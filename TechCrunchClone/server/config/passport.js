const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');

passport.use(new LocalStrategy({
    usernameField: 'email'
  },
  async (email, password, done) => {
    const user = await User.findOne({ email: email });
    if (!user) {
      return done(null, false, { message: 'Incorrect email.' });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});