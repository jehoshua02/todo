var Router = Ember.Router.extend({
  rootURL: ENV.rootURL,
  location: 'auto'
});

Router.map(function() {
    this.resource('todos', {path: '/'});
});

export default Router;
