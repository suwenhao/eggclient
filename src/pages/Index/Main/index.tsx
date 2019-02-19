import * as React from 'react';
import {observer,inject} from 'mobx-react'
import axios from 'axios'

import Header from 'src/components/Header'
import BannerX from 'src/components/BannerX';
import BannerY from 'src/components/Index/BannerY';
import SubBanner from 'src/components/Index/SubBanner';
import Danpin from 'src/components/Index/Danpin';
import ItemOne from 'src/components/Index/CategoryItem/ItemOne';
import ItemTwo from 'src/components/Index/CategoryItem/ItemTwo';
import Footer from 'src/components/Footer';

@inject('store') @observer
class Main extends React.Component{
    public store:any;
    constructor(props:any) {
        super(props)
        this.store = props.store.appStore
    }
    public async componentDidMount() {
      // 获取顶部导航
      const {data} = await axios.get('/getnav',{
        params: {
          num: 1
        }
      })

      console.log(data);
      if(data.code===0){
        this.store.setNavTop(data.data);
      }
      // 获取中间导航
      const centerNav = await axios.get('/getnav',{
        params: {
          num: 2
        }
      })

      console.log(data);
      if(centerNav.data.code===0){
        this.store.setNavCenter(centerNav.data.data);
      }
      // 获取商品类型导航
      const goodsCateData = await axios.get('/getGoodsCate')
      if(goodsCateData.data.code === 0){
        this.store.setGoodsCate(goodsCateData.data.data);
      }
      console.log(goodsCateData.data.data)
    }
    public render() {
        return (
          <div className="main-page">
            <Header/>
            <BannerX/>
            <BannerY/>
            <SubBanner/>
            <Danpin/>
            <ItemOne/>
            <ItemTwo/>
            <Footer/>
          </div>  
        )
    }
}
export default Main