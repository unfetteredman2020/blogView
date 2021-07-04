import React, { Component } from 'react'
import './index.css'
import { Tabs } from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;

export default class Login extends Component {
  render() {
    return (
      <div className="login-box">
        <div className="login-radius">
          <Tabs defaultActiveKey="2" size="small" className='tab'>
            <TabPane
              tab={
                <span>
                  <AppleOutlined />
                  Tab 1
                </span>
              }
              key="1"
            >
              Tab 1
            </TabPane>
            <TabPane
              tab={
                <span>
                  <AndroidOutlined />
                  Tab 2
                </span>
              }
              key="2"
            >
              Tab 2
            </TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}
