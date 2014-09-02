/* jshint node: true */

module.exports = function(environment) {
  var isEnv = function (environments) {
    return environments.indexOf(environment) !== -1;
  };

  var ENV = {
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {

  }

  if (environment === 'production') {

  }

  /* now configs */
  ENV.now = {
    updateInterval: (function () {
      var everySecond = 1000;
      var hourly = 1000 * 60 * 60;
      return isEnv(['development', 'test']) ? everySecond : hourly;
    })(),
    allowOverride: isEnv(['development', 'test']),
    override: isEnv('development') ? '2014-08-27' : null // last Wednesday in August 2014
  };

  return ENV;
};
