import * as React from 'react'
import './Danpin.css'

class Danpin extends React.Component{
    public render() {
        return (
            <div className="danpin center">
			
                <div className="title center">小米明星单品</div>
                <div className="main center">
                    <div className="mingxing fl">
                        <div className="sub_mingxing"><a href=""><img src={require('./pinpai1.png')} alt=""/></a></div>
                        <div className="pinpai"><a href="">小米MIX</a></div>
                        <div className="youhui">5月9日-21日享花呗12期分期免息</div>
                        <div className="jiage">3499元起</div>
                    </div>
                    <div className="mingxing fl">
                        <div className="sub_mingxing"><a href=""><img src={require('./pinpai2.png')} alt=""/></a></div>
                        <div className="pinpai"><a href="">小米5s</a></div>
                        <div className="youhui">5月9日-10日，下单立减200元</div>
                        <div className="jiage">1999元</div>
                    </div>
                    <div className="mingxing fl">
                        <div className="sub_mingxing"><a href=""><img src={require('./pinpai3.png')} alt=""/></a></div>
                        <div className="pinpai"><a href="">小米手机5 64GB</a></div>
                        <div className="youhui">5月9日-10日，下单立减100元</div>
                        <div className="jiage">1799元</div>
                    </div>
                    <div className="mingxing fl"> 	
                        <div className="sub_mingxing"><a href=""><img src={require('./pinpai4.png')} alt=""/></a></div>
                        <div className="pinpai"><a href="">小米电视3s 55英寸</a></div>
                        <div className="youhui">5月9日，下单立减200元</div>
                        <div className="jiage">3999元</div>
                    </div>
                    <div className="mingxing fl">
                        <div className="sub_mingxing"><a href=""><img src={require('./pinpai5.png')} alt=""/></a></div>
                        <div className="pinpai"><a href="">小米笔记本</a></div>
                        <div className="youhui">更轻更薄，像杂志一样随身携带</div>
                        <div className="jiage">3599元起</div>
                    </div>
                    <div className="clear"/>
                </div>
            </div>
        )
    }
}
export default Danpin