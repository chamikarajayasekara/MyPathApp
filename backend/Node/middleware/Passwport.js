const JwtStratergy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../model/user")
const Config = require("../database/database")

module.exports = function (passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKeyProvider = Config.secret;
    passport.use(
        new JwtStratergy(opts, (jwt_payload, done) => {
            console.log(jwt_payload);
            User.getUserById(jwt_payload._id, (err, user) => {
                if (err) {
                    return done(err, false);
                }
                if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            });
        })
    )
}
