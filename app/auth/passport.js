const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const User = require('./User'); // Import the User model

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'your_secret_key', // Replace with your secret key
};

// Define and register the JWT strategy
passport.use(
  new Strategy(jwtOptions, async (jwt_payload, done) => {
    try {
      const user = await User.findByPk(jwt_payload.id); // Use findByPk instead of findById
      if (user) {
        return done(null, user);
      }
      return done(null, false);   
    } catch (error) {
      return done(error, false);
    }
  })
);

module.exports = {jwtOptions}; // Export the configured passport instance
