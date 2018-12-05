import {observable, action, computed} from 'mobx';

class AppStore {
  @observable public num:number;
  constructor() {
    this.num = 0
  }
  @computed get total() {
    return this.num * 10;
  }
  @action public plus = (n:number):void => {
    // console.log(this.num)
    this.num += n
  }
  @action public minus = ():void => {
    this.num = --this.num
  }
}

const appStore = new AppStore()

export {appStore}