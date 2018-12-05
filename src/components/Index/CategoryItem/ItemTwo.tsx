import * as React from 'react'
import './CategoryItem.css'

class ItemTwo extends React.Component{
    public render() {
        return (
            <div className="category_item w">
                <div className="title center">配件</div>
                <div className="main center">
                    <div className="content">
                        <div className="hot fl"><a href="#"><img src={require('./peijian1.jpg')} /></a>
                        </div>
                        <div className="hot fl">
                            <div className="xinpin"><span>新品</span></div>
                            <div className="tu"><a href="#"><img src={require('./peijian2.jpg')} /></a></div>
                            <div className="miaoshu"><a href="#">小米6 硅胶保护套</a></div>
                            <div className="jiage">49元</div>
                            <div className="pingjia">372人评价</div>
                            <div className="piao">
                                <a href="#">
                                    <span>发货速度很快！很配小米6！</span>
                                    <span>来至于mi狼牙的评价</span>
                                </a>
                            </div>
                        </div>
                        <div className="hot fl">
                            <div className="xinpin"><span className="nohot"></span></div>
                            <div className="tu"><a href="#"><img src={require('./peijian3.jpg')} /></a></div>
                            <div className="miaoshu"><a href="#">小米手机4c 小米4c 智能</a></div>
                            <div className="jiage">29元</div>
                            <div className="pingjia">372人评价</div>
                        </div>
                        <div className="hot fl">
                            <div className="xinpin"><span>享6折</span></div>
                            <div className="tu"><a href="#"><img src={require('./peijian4.jpg')} /></a></div>
                            <div className="miaoshu"><a href="#">红米NOTE 4X 红米note4X</a></div>
                            <div className="jiage">19元</div>
                            <div className="pingjia">372人评价</div>
                            <div className="piao">
                                <a href="#">
                                    <span>发货速度很快！很配小米6！</span>
                                    <span>来至于mi狼牙的评价</span>
                                </a>
                            </div>
                        </div>
                        <div className="hot fl">
                            <div className="xinpin"><span className="nohot"></span></div>
                            <div className="tu"><a href="#"><img src={require('./peijian5.jpg')} /></a></div>
                            <div className="miaoshu"><a href="#">小米支架式自拍杆</a></div>
                            <div className="jiage">89元</div>
                            <div className="pingjia">372人评价</div>
                            <div className="piao">
                                <a href="#">
                                    <span>发货速度很快！很配小米6！</span>
                                    <span>来至于mi狼牙的评价</span>
                                </a>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="content">
                        <div className="hot fl"><a href="#"><img src={require('./peijian6.png')} /></a>
                        </div>
                        <div className="hot fl">
                            <div className="xinpin"><span className="nohot"></span></div>
                            <div className="tu"><a href="#"><img src={require('./peijian7.jpg')} /></a></div>
                            <div className="miaoshu"><a href="#">小米指环支架</a></div>
                            <div className="jiage">19元</div>
                            <div className="pingjia">372人评价</div>
                            <div className="piao">
                                <a href="#">
                                    <span>发货速度很快！很配小米6！</span>
                                    <span>来至于mi狼牙的评价</span>
                                </a>
                            </div>
                        </div>
                        <div className="hot fl">
                            <div className="xinpin"><span className="nohot"></span></div>
                            <div className="tu"><a href="#"><img src={require('./peijian8.jpg')} /></a></div>
                            <div className="miaoshu"><a href="#">米家随身风扇</a></div>
                            <div className="jiage">19.9元</div>
                            <div className="pingjia">372人评价</div>
                        </div>
                        <div className="hot fl">
                            <div className="xinpin"><span className="nohot"></span></div>
                            <div className="tu"><a href="#"><img src={require('./peijian9.jpg')} /></a></div>
                            <div className="miaoshu"><a href="#">红米4X 高透软胶保护套</a></div>
                            <div className="jiage">59元</div>
                            <div className="pingjia">775人评价</div>
                        </div>
                        <div className="hotlast fr">
                            <div className="hongmi"><a href="#"><img src={require('./hongmin4.png')} alt="" /></a></div>
                            <div className="liulangengduo"><a href="#"><img  src={require('./liulangengduo.png')} alt="" /></a></div>					
                        </div>
                        <div className="clear"></div>
                    </div>				
                </div>
            </div>
        )
    }
}
export default ItemTwo