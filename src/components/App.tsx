import * as React from 'react'
import {inject, observer} from 'mobx-react'
import {Layout} from 'antd'
import * as mobx from 'mobx'
import SiderComponent from '../components/common/Sider'
import LayoutComponent from '../components/common/Layout'
import './Layout.css'

@inject("store") @observer
class App extends React.Component{
    @mobx.observable
    public collapsed:boolean = false
    @mobx.observable
    private windowHeight:any = 300

    constructor(props:any){
        super(props)
        this.toggle = this.toggle.bind(this)
    }
    public toggle() {
        this.collapsed = !this.collapsed;
    }
    public resize() {
        const self:any = this
        document.addEventListener('resize',()=>{
            self.windowHeight = document.body.clientHeight;
        })
        self.windowHeight = document.body.clientHeight;
    }
    public componentDidMount() {
        this.resize()
    }
    public render() {
        return (
            <Layout id="index" style={{height: this.windowHeight + 'px'}}>
                <SiderComponent collapsed={this.collapsed}/>
                <LayoutComponent collapsed={this.collapsed} toggle={this.toggle}/>
            </Layout>
        );
    }
}
export default App