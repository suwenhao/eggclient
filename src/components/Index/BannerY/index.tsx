import * as React from 'react'
import './BannerY.css'
import Swiper from 'swiper'
import {observer,inject} from 'mobx-react'

@inject('store') @observer
class BannerY extends React.Component{
    public store:any;
    constructor(props:any) {
        super(props)
        this.store = props.store.appStore
    }
    public componentDidMount() {
        const swiper = new Swiper('.swiper-container', {
            effect : 'fade',
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        })
        console.log(swiper)
    }
    public render() {
        const liList:any[] = [];
        this.store.$goodsCate.forEach((v:any,i:any)=>{
            const liChild:any[] = []
            v.children.forEach((item:any,index:any)=>{
                liChild.push(
                    <div key={index}>
                        <div className="xuangou_left fl">
                            <a href="#">
                                <div className="img fl"><img width={35} height={35} src={item.cate_img} alt={item.title} /></div>
                                <span className="fl">{item.title}</span>
                                <div className="clear"/>
                            </a>
                        </div>
                        <div className="xuangou_right fr"><a href="#" target="_blank">选购</a></div>
                        <div className="clear"/>
                    </div>
                )
            })
            
            liList.push(
                <li key={i}>
                    <a>{v.title}</a>
                    <div className="pop">
                        <div className="left fl">
                            {liChild}
                        </div>
                    </div>
                </li>
            )
        })
        return (
            <div className="banner_y center">
                <div className="nav">				
                    <ul>
                        {liList}
                    </ul>
                </div>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src={require('./focus1.jpg')} alt="focus1" />
                        </div>
                        <div className="swiper-slide">
                            <img src={require('./focus2.jpg')} alt="focus2" />
                        </div>
                        <div className="swiper-slide">
                            <img src={require('./focus3.jpg')} alt="focus3" />
                        </div>				
                    </div>
                    <div className="swiper-pagination"/>
                    <div className="swiper-button-next"/>
                    <div className="swiper-button-prev"/>
                </div>
            </div>
        )
    }
}
export default BannerY