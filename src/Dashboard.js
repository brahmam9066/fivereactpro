import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    TableOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

const Dashboard = (props) => {
    const { children } = props
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo"><h3>{collapsed ? 'VB' : 'Veera Board'}</h3></div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[window.location.pathname]}

                >

                    <Menu.Item key='/' icon={<UserOutlined />}  >
                        <Link to='/'>Home</Link>
                    </Menu.Item>
                    <Menu.Item key='/tables' icon={<TableOutlined />}  >
                        <Link to='/tables'>Tables</Link>
                    </Menu.Item>
                    <Menu.Item key='/forms' icon={<UserOutlined />}  >
                        <Link to='/forms'>Forms</Link>
                    </Menu.Item>
                    <Menu.Item key='/todolist' icon={<UserOutlined />}  >
                        <Link to='/todolist'>TodoList</Link>
                    </Menu.Item>
                    <Menu.Item key='/api' icon={<UserOutlined />}  >
                        <Link to='/api'>API</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                        textAlign: 'left'
                    }}
                >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Content
                    className="site-layout-background"
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};
export default Dashboard;