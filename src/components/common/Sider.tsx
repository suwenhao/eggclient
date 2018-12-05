import * as React from 'react'
import { Layout, Menu, Icon } from 'antd';

const { Sider }:any = Layout;

interface IProps {
    collapsed: boolean;
}

export default class SiderComponent extends React.Component<IProps,any>{
    public render() {
        return (
            <Sider
                trigger={null}
                collapsible={true}
                collapsed={this.props.collapsed}
                >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                    <Icon type="user" />
                    <span>nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                    <Icon type="video-camera" />
                    <span>nav 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                    <Icon type="upload" />
                    <span>nav 3</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}