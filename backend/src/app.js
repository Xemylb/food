const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('config');
const routes = require('./routes');
const cors = require('cors');
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

app.use(cors());
app.use(bodyParser.json());

app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
    clientID: '305719385490-lb5pjqrq4j770foft2019b3e4ml74oj5.apps.googleusercontent.com',
    clientSecret: 'hbNF-zxP5y5xXqlRpXqufv8B',
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log('done',accessToken, refreshToken, profile);
    done(null, profile);
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});
  
passport.deserializeUser(function(user, done) {
  done(null, user);
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));


app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });


app.use('/api', routes);

app.listen(config.server.port, ()=> {
    console.log('App started on port ' + config.server.port);
});
