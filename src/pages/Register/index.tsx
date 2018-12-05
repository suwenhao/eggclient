import * as React from 'react'
import {observable} from 'mobx'
import {observer} from 'mobx-react'
import './Register.css'

@observer
class Register extends React.Component{
    @observable
    public select:boolean = true
    constructor(props:any){
        super(props)
        this.iconChange = this.iconChange.bind(this)
    }
    public iconChange() {
        this.select = !this.select
    }
    public render() {
        const iconStyle = this.select?require('./select.png'):require('./no_select.png')
        return (
            <div className="reg-page">
                <div className="wrapper">
                    <div className="wrap">
                        <div className="layout">
                            <div className="n-frame device-frame reg_frame">
                                <div className="external_logo_area">
                                    <a className="milogo" href="#" style={{backgroundImage:'url('+require('./milogo.png')+')'}}></a>
                                </div>
                                <div className="title-item t_c">
                                    <h4>注册小米帐号</h4>
                                </div>
                                <div>
                                    <div className="regbox">
                                        <div className="phone_step1">
                                            <h4 className="tit_normal">用户名</h4>
                                            <div className="listwrap">
                                                <input className="shurukuang" type="text" name="username" placeholder="请输入你的用户名" />
                                            </div>
                                            <h4 className="tit_normal">密码</h4>
                                            <div className="listwrap">
                                                <input className="shurukuang" type="password" name="password" placeholder="请输入你的用户名" />
                                            </div>
                                            <h4 className="tit_normal">确认密码</h4>
                                            <div className="listwrap">
                                                <input className="shurukuang" type="password" name="repassword" placeholder="请输入你的用户名" />
                                            </div>
                                            <h4 className="tit_normal">手机号</h4>
                                            <div className="listwrap">
                                                <input className="shurukuang" type="text" name="phone" placeholder="请输入你的用户名" />
                                            </div>
                                            <input className="btn332 btn_reg_1 submit-step" data-to="phone-step2" type="submit" value="立即注册"></input>
                                        </div>
                                    </div>
                                    <div className="privacy_box">
                                        <div className="msg">
                                            <label className="n_checked now select-privacy">
                                                <a className="icon_select" style={{backgroundImage:'url('+iconStyle+')'}} onClick={this.iconChange}></a>
                                                注册帐号即表示您同意并愿意遵守小米
                                                <a href="https://static.account.xiaomi.com/html/agreement/account/cn.html" className="inspect_link agreement_link" title="用户协议" target="_blank">用户协议</a>
                                                和
                                                <a href="https://www.mi.com/about/privacy/" className="inspect_link privacy_link" title=" 隐私政策 " target="_blank"> 隐私政策 </a>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="copyright">简体 | 繁体 | English | 常见问题</div>
                    <div className="copyright">小米公司版权所有-京ICP备10046444-<img src={require('./ghs.png')} alt="" />京公网安备11010802020134号-京ICP证110507号</div>
                </footer>
            </div>
        )
    }
}
export default Register