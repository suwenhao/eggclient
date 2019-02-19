import * as React from 'react'
import './Header.css'
import {observer,inject} from 'mobx-react'

@inject('store') @observer
class Header extends React.Component{
	public store:any;
    constructor(props:any) {
        super(props)
        this.store = props.store.appStore
    }
    public render() {
		const liList:any[] = [];
		this.store.$navTop.forEach((v:any)=>{
			liList.push(
				<li key={v._id}>
					{
						v.is_opennew === 1?
						<a href="http://www.mi.com/" target="_blank">{v.title}</a>
						:
						<a href="http://www.mi.com/">{v.title}</a>
					}
				</li>
			);
			liList.push(<li key={v._id+'123456'}>|</li>)
		})
        return (
            <header>
			<div className="top center">
				<div className="left fl">
					<ul>
						{liList}
{/* 						
						<li><a href="">MIUI</a></li>
						<li>|</li>
						<li><a href="">米聊</a></li>
						<li>|</li>
						<li><a href="">游戏</a></li>
						<li>|</li>
						<li><a href="">多看阅读</a></li>
						<li>|</li>
						<li><a href="">云服务</a></li>
						<li>|</li>
						<li><a href="">金融</a></li>
						<li>|</li>
						<li><a href="">小米商城移动版</a></li>
						<li>|</li>
						<li><a href="">问题反馈</a></li>
						<li>|</li>
						<li><a href="">Select Region</a></li> */}
						<div className="clear"/>
					</ul>
				</div>
				<div className="right fr">
					<div className="gouwuche fr"><a href="">购物车</a></div>
					<div className="fr">
						<ul>
							<li><a href="./login.html" target="_blank">登录</a></li>
							<li>|</li>
							<li><a href="./register.html" target="_blank" >注册</a></li>
							<li>|</li>
							<li><a href="">消息通知</a></li>
						</ul>
					</div>
					<div className="clear"/>
				</div>
				<div className="clear"/>
			</div>
		</header>
        )
    }
}

export default Header