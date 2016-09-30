import Ember from 'ember';

let federations = [{
  name: 'vvb',
  logo: 'http://www.vclede.be/wp-content/uploads/2014/01/vvb-red.gif'
} , {
  name: 'avf',
  logo: 'http://www.volley-avf.be/images/logo.jpg'
}, {
  name: 'kvbvb',
  logo: 'http://www.volleybrabant.be/static/images/volleybrabant/logo_volleybrabant.jpg'
}];

export default Ember.Route.extend({
  model() {
    return federations;
  }
});
