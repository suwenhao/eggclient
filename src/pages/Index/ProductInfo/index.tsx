import * as React from 'react'
import './ProductInfo.css'
import Header from 'src/components/Header'
import BannerX from 'src/components/BannerX';
import Footer from 'src/components/Footer';
import Swiper from 'swiper'

class ProductInfo extends React.Component{
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
                clickable :true
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
        return (
            <div className="product-info-page">
                <Header/>
                <BannerX/>
                <form>
                    <div className="xiangqing">
                        <div className="neirong w">
                            <div className="xiaomi6 fl">小米6</div>
                            <nav className="fr">
                                <li><a href="#">概述</a></li>
                                <li>|</li>
                                <li><a href="#">变焦双摄</a></li>
                                <li>|</li>
                                <li><a href="#">设计</a></li>
                                <li>|</li>
                                <li><a href="#">参数</a></li>
                                <li>|</li>
                                <li><a href="#">F码通道</a></li>
                                <li>|</li>
                                <li><a href="#">用户评价</a></li>
                                <div className="clear"></div>
                            </nav>
                            <div className="clear"></div>
                        </div>	
                    </div>
                    <div className="jieshao mt20 w">
                        <div className="left fl">
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <img src={require('./liebiao_xiaomi6.jpg')} />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src={require('./liebiao_xiaomi6.jpg')}/>
                                    </div>
                                    <div className="swiper-slide">
                                        <img src={require('./liebiao_xiaomi6.jpg')}/>
                                    </div>				
                                </div>
                                <div className="swiper-pagination"></div>
                                <div className="swiper-button-next"></div>
                                <div className="swiper-button-prev"></div>
                            </div>
                        </div>
                        <div className="right fr">
                            <div className="h3 ml20 mt20">小米6</div>
                            <div className="jianjie mr40 ml20 mt10">变焦双摄，4 轴防抖 / 骁龙835 旗舰处理器，6GB 大内存，最大可选128GB 闪存 / 5.15" 护眼屏 / 四曲面玻璃/陶瓷机身</div>
                            <div className="jiage ml20 mt10">2499.00元</div>
                            <div className="ft20 ml20 mt20">选择版本</div>
                            <div className="xzbb ml20 mt10">
                                <div className="banben fl">
                                    <a>
                                        <span>全网通版 6GB+64GB </span>
                                        <span>2499元</span>
                                    </a>
                                </div>
                                <div className="banben fr">
                                    <a>
                                        <span>全网通版 6GB+128GB</span>
                                        <span>2899元</span>
                                    </a>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="ft20 ml20 mt20">选择颜色</div>
                            <div className="xzbb ml20 mt10">
                                <div className="banben">
                                    <a>
                                        <span className="yuandian"></span>
                                        <span className="yanse">亮黑色</span>
                                    </a>
                                </div>
                            </div>
                            <div className="xqxq mt20 ml20">
                                <div className="top1 mt10">
                                    <div className="left1 fl">小米6 全网通版 6GB内存 64GB 亮黑色</div>
                                    <div className="right1 fr">2499.00元</div>
                                    <div className="clear"></div>
                                </div>
                                <div className="bot mt20 ft20 ftbc">总计：2499元</div>
                            </div>
                            <div className="xiadan ml20 mt20">					
                                <input className="jrgwc" type="button" name="jrgwc" value="加入购物车" />
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                </form>
                <Footer/>
            </div>
        )
    }
}
export default ProductInfo