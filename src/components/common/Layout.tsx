import * as React from 'react'
import { Layout, Icon , Button} from 'antd';
// import * as mobx from 'mobx'
import {inject, observer} from 'mobx-react'
const { Header, Content }:any = Layout;

interface IProps {
    collapsed: boolean;
    toggle: any;
}
@inject("store") @observer
export default class LayoutComponent extends React.Component<IProps,any>{
    public store:any;
    constructor(props:any) {
        super(props)
        this.store = props.store.appStore
    }
    // @mobx.computed
    // public get $num() { return this.store.num }
    public componentDidMount() {
        console.log(this.store.total)
    }
    public render() {
        // const store = this.store;
        return (
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <Icon
                        className="trigger"
                        type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.props.toggle}
                    />
                </Header>
                <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                    {this.store.num}
                    <button onClick={()=>{
                        this.store.plus(10)
                    }}>+1</button>
                    <button onClick={()=>{
                        this.store.minus()
                    }}>-1</button>
                    <Button>你好</Button>
                </Content>
            </Layout>
        )
    }
}