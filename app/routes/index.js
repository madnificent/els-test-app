import Route from '@ember/routing/route';

export default Route.extend({
  activate(){
    return this.transitionTo('foo');
  }
});
