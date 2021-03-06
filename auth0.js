const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const jwtAuthz = require('express-jwt-authz');

const tokenGuard = jwt({
  // Fetch the signing key based on the KID in the header and
  // the singing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksUri: `https://bksampleapp2.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: 'http://profiles.simpleapp.com',
  issuer: `https://bksampleapp2.auth0.com/`,
  algorithms: ['RS256']
});

module.exports = function (scopes) {
  const scopesGuard = jwtAuthz(scopes || []);
  return function mid(req, res, next) {
    tokenGuard(req, res, (err) => {
      err ? res.status(500).send(err) : scopesGuard(req, res, next);
    });
  }
};


