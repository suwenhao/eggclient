import * as React from 'react'
import {observable} from 'mobx'
import { CSSTransition } from 'react-transition-group';
import './BannerX.css'
import {observer,inject} from 'mobx-react'

@inject('store') @observer
class BannerX extends React.Component{
    public store:any;
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
        this.store = props.store.appStore
    }
    public onMouseEnter(){
        this.hover = true
    }
    public onMouseLeave(){
        this.hover = false
    }
    public render() {
        const liList:any[] = [];
		this.store.$navCenter.forEach((v:any,i:any)=>{
			liList.push(
                <li data-id={v._id} key={i} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                    <a href="#" target="_blank">{v.title}</a>
                </li>
			);
		})
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
                                {liList}
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