import * as React from 'react'
import './Cart.css'
import { InputNumber, Icon, Table  } from 'antd'
import {observable} from 'mobx'
import {observer} from 'mobx-react'
import Footer from 'src/components/Footer';

@observer
class Cart extends React.Component{
    @observable
    public num:number = 3
    constructor(props:any){
        super(props)
        this.NumChange=this.NumChange.bind(this)
    }
    public NumChange(e:number) {
       this.num = e
    }
    public render() {
        const columns = [{
            title: '商品图片',
            dataIndex: 'img',
            render: (text:any) => <img width="80" height="80" src={text}/>,
          },{
            title: '商品名称',
            dataIndex: 'name',
          }, {
            title: '单价',
            dataIndex: 'price',
          }, {
            title: '数量',
            dataIndex: 'num',
            render: (text:any) => (<InputNumber min={1} max={10} defaultValue={text} onChange={this.NumChange}/>)
          },{
            title: '小计',
            dataIndex: 'total',
          },{
            title: '操作',
            dataIndex: 'id',
            render: (text:any) => <Icon type="close" />,
          },];
          const data= [{
            key: '1',
            id:123,
            img:require('./liebiao_hongmin4.jpg'),
            name: '小米6全网通6GB内存+64GB 亮黑色',
            price: 32,
            num:1,
            total: 32,
          }];
          const rowSelection = {
            onChange: (selectedRowKeys:any, selectedRows:any) => {
              console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: (record:any) => ({
              disabled: record.name === 'Disabled User', // Column configuration not to be checked
              name: record.name,
            }),
          };          
        return (
            <div className="cart-page">
                <div className="banner_x center">
                    <a href="/#/" target="_blank"><div className="logo fl" style={{backgroundImage:'url('+require('src/assets/logo_top.png')+')'}}></div></a>
                    <div className="wdgwc fl ml40">我的购物车</div>
                    <div className="wxts fl ml20">温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</div>
                    <div className="dlzc fr">
                        <ul>
                            <li><a href="/#/login" target="_blank">登录</a></li>
                            <li>|</li>
                            <li><a href="/#/register" target="_blank">注册</a></li>	
                        </ul>
                        
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="xiantiao"></div>
                <div className="gwcxqbj">
                    <div className="gwcxd center">
                        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                    </div>
                    <div className="jiesuandan mt20 center">
                        <div className="tishi fl ml20">
                            <ul>
                                <li><a href="./liebiao.html">继续购物</a></li>
                                <li>|</li>
                                <li>共<span>2</span>件商品，已选择<span>1</span>件</li>
                                <div className="clear"></div>
                            </ul>
                        </div>
                        <div className="jiesuan fr">
                            <div className="jiesuanjiage fl">合计（不含运费）：<span>2499.00元</span></div>
                            <div className="jsanniu fr"><input className="jsan" type="submit" name="jiesuan"  value="去结算"/></div>
                            <div className="clear"></div>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Cart