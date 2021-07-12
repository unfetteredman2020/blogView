import React, { Component } from 'react'
import './style/index.css'
import { Tabs, Input, Button } from 'antd';
import { UserAddOutlined, LoginOutlined, UserOutlined, UnlockOutlined} from '@ant-design/icons';
const { TabPane } = Tabs;

export default class Login extends Component {
  state = {
    login: {
      username: '',
      password: ''
    },
    register: {
      username: '',
      password: ''
    }
  }
  iptChangeEvents = ({ target }) => {
    const { value, id } = target
    const { login, register } = this.state
    let obj = {}
   console.log(id);
    console.log(value);
    switch (id) {
      case "username":
        obj = {...login, [id]: value };
        this.setState({login: obj});
        break;
        case "password":
          obj = {...login, [id]: value };
          this.setState({login: obj});
          break;
        case "reUsername":
          obj = {...register, username: value };
          this.setState({register: obj});
          break;
        case "rePassword":
          obj = {...register, password: value };
          this.setState({register: obj});
          break;
        case "reRepassword":
          obj = {...register, [id]: value };
          this.setState({register: obj});
          break;
      default:
        break;
    }
    console.log(login, register);
  }
  loginEvent = ()=> {
    const { login } = this.state
    console.log(login);
    this.props.history.push('./../home/Home');
  }
  registerEvent = ()=> {
    const { register } = this.state
    console.log(register);
  }
  render() {
    return (
      <div className="login-box">
        <div className="login-radius">
          <form>
          <Tabs defaultActiveKey="1" size="small" className='tab'>
            <TabPane tab={ <span> <LoginOutlined />登陆 </span> } key="1" >
              <Input onChange={this.iptChangeEvents} id="username" placeholder="请输入用户名" prefix={<UserOutlined />}  allowClear maxLength={20}/>
              <br />
              <br />
              <Input  onChange={this.iptChangeEvents} id="password" placeholder="请输入密码" prefix={<UnlockOutlined />} allowClear type="password"/>
              <br />
              <br />
              <Button onClick={this.loginEvent} type="primary" block>登陆</Button>
            </TabPane>
            <TabPane tab={ <span><UserAddOutlined />注册</span> } key="2">
              <Input  onChange={this.iptChangeEvents} id="reUsername" placeholder="请输入用户名" prefix={<UserOutlined />} allowClear/>
              <br />
              <br />
              <Input onChange={this.iptChangeEvents} id="rePassword" placeholder="请输入密码" prefix={<UnlockOutlined />} allowClear type="password"/>
              <br />
              <br />
              <Input onChange={this.iptChangeEvents} id="reRepassword" placeholder="请确认密码" prefix={<UnlockOutlined />} allowClear type="password"/>
              <br />
              <br />
              <Button onClick={this.registerEvent} type="primary" block >注册</Button>
            </TabPane>
          </Tabs>
          </form>
        </div>
      </div>
    )
  }
}
