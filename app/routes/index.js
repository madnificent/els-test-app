import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // this.store.findRecord('glass');
    // this.store.findRecord('bottle');

    return;
  },

  activate(){
    return this.transitionTo('foo');
  }
});
