import * as React from 'react'
import './Login.css'

class Login extends React.Component{
    public render() {
        return (
            <div className="login-page">
                <div className="top center">
                    <div className="logo center">
                        <a href="/#/" target="_blank"><img src={require('./mistore_logo.png')} alt="" /></a>
                    </div>
                </div>
                <form className="form center" style={{backgroundImage:'url('+require('./login_bg.jpg')+')'}}>
                    <div className="login">
                        <div className="login_center">
                            <div className="login_top">
                                <div className="left fl">会员登录</div>
                                <div className="right fr">您还不是我们的会员？<a href="/#/register" target="_self">立即注册</a></div>
                                <div className="clear"></div>
                                <div className="xian center"></div>
                            </div>
                            <div className="login_main center">
                                <div className="username">用户名:&nbsp;<input className="shurukuang" type="text" name="username" placeholder="请输入你的用户名"/></div>
                                <div className="username">
                                    密&nbsp;&nbsp;&nbsp;&nbsp;码:&nbsp;
                                    <input className="shurukuang" type="password" name="password" placeholder="请输入你的密码"/>
                                </div>
                                <div className="username">
                                    <div className="left fl">验证码:&nbsp;<input className="yanzhengma" type="text" name="username" placeholder="请输入验证码"/></div>
                                    <div className="right fl"><img src={require('./yanzhengma.jpg')} /></div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                            <div className="login_submit">
                                <input className="submit" type="submit" name="submit" value="立即登录" />
                            </div>
                        </div>
                    </div>
                </form>
                <footer>
                    <div className="copyright">简体 | 繁体 | English | 常见问题</div>
                    <div className="copyright">小米公司版权所有-京ICP备10046444-<img src={require('./ghs.png')} alt="" />京公网安备11010802020134号-京ICP证110507号</div>
                </footer>
            </div>
        )
    }
}
export default Login