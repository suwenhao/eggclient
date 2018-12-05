import * as React from 'react'
import './BannerY.css'
import Swiper from 'swiper'

class BannerY extends React.Component{
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
        return (
            <div className="banner_y center">
                <div className="nav">				
                    <ul>
                        <li>
                            <a href="#">手机</a>
                            <a href="#">电话卡</a>
                            <div className="pop">
                                <div className="left fl">
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt="" /></div>
                                                <span className="fl">小米6</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="./xiangqing.html" target="_blank">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米手机5c</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米Note 2</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米MIX</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米5s</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米5s Plus</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>								
                                </div>
                                <div className="ctn fl">
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米手机5</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">红米Note 4X</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">红米Note-4</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">红米4x</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">红米4</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">红米4A</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                </div>
                                <div className="right fl">
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">对比手机</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        {/* <div className="xuangou_right fr"><a href="#">选购</a></div> */}
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米移动&nbsp;电话卡</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        {/* <div className="xuangou_right fr"><a href="#">选购</a></div> */}
                                        <div className="clear"/>
                                    </div>
                                </div>
                                <div className="clear"/>
                            </div>
                        </li>
                        <li>
                            <a href="#">笔记本</a>
                            <a href="#">平板</a>
                            <div className="pop">
                                <div className="left fl">
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米6</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米手机5c</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米Note 2</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米MIX</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米5s</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米5s Plus</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>								
                                </div>
                                <div className="ctn fl">
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米手机5</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">红米Note 4X</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">红米Note-4</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">红米4x</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">红米4</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">红米4A</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                </div>
                                
                                <div className="clear"/>
                            </div>
                        </li>
                        <li>
                            <a href="#">电视</a>
                            <a href="#">盒子</a>
                            <div className="pop">
                                <div className="left fl">
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米6</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米手机5c</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米Note 2</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米MIX</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米5s</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米5s Plus</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>								
                                </div>
                                <div className="ctn fl">
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米手机5</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">红米Note 4X</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">红米Note-4</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">红米4x</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">红米4</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">红米4A</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                </div>
                                <div className="right fl">
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">对比手机</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        {/* <div className="xuangou_right fr"><a href="#">选购</a></div> */}
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米移动&nbsp;电话卡</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        {/* <div className="xuangou_right fr"><a href="#">选购</a></div> */}
                                        <div className="clear"/>
                                    </div>
                                </div>
                                <div className="clear"/>
                            </div>
                        </li>
                        <li>
                            <a href="#">路由器</a>
                            <a href="#">智能硬件</a>
                            <div className="pop">
                                <div className="left fl">
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米6</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米手机5c</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米Note 2</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米MIX</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米5s</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米5s Plus</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>								
                                </div>
                                <div className="ctn fl">
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米手机5</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">红米Note 4X</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">红米Note-4</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">红米4x</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">红米4</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">红米4A</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                </div>
                                <div className="right fl">
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">对比手机</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        {/* <div className="xuangou_right fr"><a href="#">选购</a></div> */}
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米移动&nbsp;电话卡</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        {/* <div className="xuangou_right fr"><a href="#">选购</a></div>  */}
                                        <div className="clear"/>
                                    </div>
                                </div>
                                <div className="clear"/>
                            </div>
                        </li>
                        <li>
                            <a href="#">移动电源</a>
                            <a href="#">电池</a>
                            <a href="#">插线板</a>
                            <div className="pop">
                                <div className="left fl">
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米6</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米手机5c</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米Note 2</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米MIX</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米5s</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米5s Plus</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>								
                                </div>
                                <div className="ctn fl">
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米手机5</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">红米Note 4X</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">红米Note-4</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">红米4x</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">红米4</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">红米4A</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                </div>
                                <div className="right fl">
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">对比手机</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        {/* <div className="xuangou_right fr"><a href="#">选购</a></div> */}
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米移动&nbsp;电话卡</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        {/* <div className="xuangou_right fr"><a href="#">选购</a></div> */}
                                        <div className="clear"/>
                                    </div>
                                </div>
                                <div className="clear"/>
                            </div>
                        </li>
                        <li>
                            <a href="#">耳机</a>
                            <a href="#">音箱</a>
                            <div className="pop">
                                <div className="left fl">
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米6</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米手机5c</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米Note 2</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米MIX</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米5s</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米5s Plus</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                </div>
                                <div className="ctn fl">
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米手机5</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">红米Note 4X</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">红米Note-4</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">红米4x</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">红米4</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">红米4A</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                </div>
                                <div className="right fl">
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">对比手机</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        {/* <div className="xuangou_right fr"><a href="#">选购</a></div>  */}
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米移动&nbsp;电话卡</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        {/* <div className="xuangou_right fr"><a href="#">选购</a></div> */}
                                        <div className="clear"/>
                                    </div>
                                </div>
                                <div className="clear"/>
                            </div>
                        </li>
                        <li>
                            <a href="#">保护套</a>
                            <a href="#">贴膜</a>
                            <div className="pop">
                                <div className="left fl">
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米6</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米手机5c</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米Note 2</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米MIX</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米5s</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米5s Plus</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>								
                                </div>							
                                <div className="clear"/>
                            </div>
                        </li>
                        <li>
                            <a href="#">线材</a>
                            <a href="#">支架</a>
                            <a href="#">储存卡</a>
                            <div className="pop">
                                <div className="left fl">
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米6</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米手机5c</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米Note 2</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米MIX</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米5s</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米5s Plus</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>			
                                </div>
                                <div className="clear"/>
                            </div>
                        </li>
                        <li>
                            <a href="#">箱包</a>
                            <a href="#">服饰</a>
                            <a href="#">鞋</a>
                            <a href="#">眼镜</a>
                            <div className="pop">
                                <div className="left fl">
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米6</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米手机5c</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米Note 2</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米MIX</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米5s</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米5s Plus</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>								
                                </div>							
                                <div className="clear"/>
                            </div>
                        </li>
                        <li>
                            <a href="#">米兔</a>
                            <a href="#">生活周边</a>
                            <div className="pop">
                                <div className="left fl">
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米6</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米手机5c</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米Note 2</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米MIX</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米5s</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>
                                    <div>
                                        <div className="xuangou_left fl">
                                            <a href="#">
                                                <div className="img fl"><img src={require('./xm6_80.png')} alt=""/></div>
                                                <span className="fl">小米5s Plus</span>
                                                <div className="clear"/>
                                            </a>
                                        </div>
                                        <div className="xuangou_right fr"><a href="#">选购</a></div>
                                        <div className="clear"/>
                                    </div>								
                                </div>							
                                <div className="clear"/>
                            </div>
                        </li>
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