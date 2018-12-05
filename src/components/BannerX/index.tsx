import * as React from 'react'
import {observable} from 'mobx'
import {observer} from 'mobx-react';
import { CSSTransition } from 'react-transition-group';
import './BannerX.css'

@observer
class BannerX extends React.Component{
    public images:any = [
        require('./image/pinpai2.png'),
        require('./image/pinpai1.png'),
        require('./image/pinpai3.png'),
        require('./image/pinpai4.png'),
    ]
    @observable
    public hover:any = false
    constructor(props:any){
        super(props);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }
    public onMouseEnter(){
        this.hover = true
    }
    public onMouseLeave(){
        this.hover = false
    }
    public render() {
        return (
            <div>
                <div className="banner_x center">
                    <div className="banner-left">
                        <a href="/#/" target="_blank">
                            <div className="logo fl" style={{backgroundImage:'url('+require('src/assets/logo_top.png')+')'}}/>
                        </a>
                        <a href="#">
                            <div className="ad_top fl" style={{backgroundImage:'url('+require('./yyymix.gif')+')'}}/>
                        </a>
                        <div className="nav fl">
                            <ul className="clearfix" id="nav_list">
                                <li onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                                    <a href="#" target="_blank">小米手机</a>
                                </li>
                                <li>
                                    <a href="#">红米</a>
                                </li>
                                <li><a href="#">平板·笔记本</a></li>
                                <li><a href="#">电视</a></li>
                                <li><a href="#">盒子·影音</a></li>
                                <li><a href="#">路由器</a></li>
                                <li><a href="#">智能硬件</a></li>
                                <li><a href="#">服务</a></li>
                                <li><a href="#">社区</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="search fr">
                        <form action="" method="post">
                            <div className="text fl">
                                <input type="text" className="shuru"  placeholder="小米6&nbsp;小米MIX现货"/>
                            </div>
                            <div className="submit fl">
                                <input type="button" className="sousuo" value="搜索"/>
                            </div>
                            <div className="clear"/>
                        </form>
                        <div className="clear"/>
                    </div>
                </div>
                <CSSTransition 
                in={this.hover}
                timeout={500}
                classNames={{
                    enter: 'my-enter',
                    enterActive: 'my-active-enter',
                    exit: 'my-exit',
                    exitActive: 'my-active-exit',
                }}
                unmountOnExit = {true}
                >
                    <div className="bx-children" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                        <ol className="children-list clearfix">
                            <li>
                                <a href="#">
                                    <img src={this.images[0]} />
                                    <p>100元</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={this.images[1]} />
                                    <p>100元</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={this.images[3]}/>
                                    <p>100元</p>
                                </a>
                            </li>  
                        </ol>
                    </div>
                </CSSTransition>
            </div> 
        )
    }
}
export default BannerX