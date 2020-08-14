import { observable } from 'mobx';
import remotedev from 'mobx-remotedev';

@remotedev
export default class App {
  @observable version = 1;
}
