import React, { Component } from 'react'
import './style/home.css'
import { Layout, Menu, Avatar, Tag } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MediumOutlined,
  GiftOutlined,
  StockOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

export default class Home extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { collapsed } = this.state
    return (
      <Layout className="layout-mystyle">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} className="my-aside">
          <div className="my-menu">
            <Avatar
              src="https://img0.baidu.com/it/u=3353211517,995971476&fm=26&fmt=auto&gp=0.jpg"
              style={{boxShadow: '0 0 55px #fff', width: collapsed ? '33px': '55px',height: collapsed ? '33px': '55px'}}
            />
            <div className="userTag">
              <Tag icon={<UserOutlined />} color="#f50"><text style={{display: collapsed ? 'none' : 'inline-block'}}>姓名：</text><span>逍遥汉</span></Tag>
              <Tag className="tags-item" icon={<MediumOutlined />} color="#f50"><text style={{display: collapsed ? 'none' : 'inline-block'}}>博客年龄：</text><span>22</span></Tag>
              <Tag className="tags-item" icon={<GiftOutlined />} color="#f50"><text style={{display: collapsed ? 'none' : 'inline-block'}}>生日：</text><span>1970-10-2</span></Tag>
              <Tag className="tags-item" icon={<StockOutlined />} color="#f50"><text style={{display: collapsed ? 'none' : 'inline-block'}}>格言：</text><span>good good study, day day up</span></Tag>
            </div>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              我的博客
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              写博客
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              个人设置
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background my-site">
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="my-content"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              border: "1px solid blue"
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}
