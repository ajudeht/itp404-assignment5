import Ember from 'ember';

export default Ember.Component.extend({
  actions : {
    doSomething() {
      if (this.subreddit !== undefined){
        Ember.getOwner(this).lookup('router:main').transitionTo('/r/'+this.subreddit);
      }      
    }
  }
});
