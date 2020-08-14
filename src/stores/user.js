import { observable, computed, action, autorun } from 'mobx';
import remotedev from 'mobx-remotedev';

@remotedev({
  global: true
})
export default class User {
  @observable _name = 'Bogdan';
  @observable counter = 0;

  constructor() {
    autorun(() => {
      if(this.counter) {
        console.log('autorun');
      }
    })
  }

  @computed
  get name() {
    return `My name is ${this._name}`;
  }

  @action
  increaseCounter() {
    this.counter = this.counter + 1;
  }
}
