import {observable, action, computed} from 'mobx';

class AppStore {
  @observable public num:number;
  @observable public $navTop:any;
  @observable public $goodsCate:any;
  @observable public $navCenter:any;
  constructor() {
    this.num = 0
    this.$navTop = []
    this.$goodsCate = []
    this.$navCenter = []
  }
  @computed get total() {
    return this.num * 10;
  }
  @action public setNavTop = (data:any):void => {
    // console.log(data)
    this.$navTop = data
  }
  @action public setNavCenter = (data:any):void => {
    // console.log(data)
    this.$navCenter = data
  }
  @action public setGoodsCate = (data:any):void => {
    this.$goodsCate = data
  }
  @computed get navTop() {
    console.log(this.$navTop)
    return this.$navTop;
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