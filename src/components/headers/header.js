import React, { Component, Fragment } from 'react';
import logo from './easyvoa.jpeg';
import './style.css';
import { Menu } from "antd";
// import axios from 'axios';  // npm install axios 
import {
  AppstoreOutlined,
  CalendarOutlined,
  MenuUnfoldOutlined,
  DesktopOutlined,
  ShareAltOutlined,
  DingdingOutlined
} from "@ant-design/icons";

import { Link } from 'react-router-dom';


class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          type: <DingdingOutlined />,
          title: "About Learning English"
        },
        {
          id: 2,
          type: <AppstoreOutlined />,
          title: "VOA Special English"
        },
        {
          id: 3,
          type: <CalendarOutlined />,
          title: "VOA Standard English"
        },
        {
          id: 4,
          type: <MenuUnfoldOutlined />,
          title: "VOA English Learning"
        },
        {
          id: 5,
          type: <ShareAltOutlined />,
          title: "VOA Audio Programs"
        },
        {
          id: 6,
          type: <DesktopOutlined />,
          title: "Studio Classroom"
        }
      ]
    };
  }

  getMenuItem() {
    return this.state.list.map(item => {
      return (
        <Menu.Item key={item.id}>
          <Link to={`/${item.id}`}>
            {item.type}
            {item.title}
          </Link>
        </Menu.Item>
      );
    });
  }
  // ajax数据要放在 componentDidMount这个生命周期函数里
//   componentDidMount() {
//     axios.get("http://www.dell-lee.com/react/api/header.json")
//         .then(res => {
//         //   console.log(res.data.data);
//             this.setState({
//                 list: res.data.data
//             })
//     });
//   }

  render() {
    return (
      <Fragment>
        <Link to='/'>
          <img src={logo} className="app-header-logo" alt=""/>
        </Link>
        <Menu mode="horizontal" className="app-header-menu">
          {/* <Menu.Item key="mail">
                    <MailOutlined />
                    VOA Special English
                </Menu.Item>
                <Menu.Item key="mail1">
                    <AppstoreOutlined />
                    VOA Special English
                </Menu.Item>
                <Menu.Item key="mail2">
                    <CalendarOutlined />
                    VOA Special English
                </Menu.Item>
                <Menu.Item key="mail3">
                    <MenuUnfoldOutlined />
                    VOA Special English
                </Menu.Item>
                <Menu.Item key="mail4">
                    <MenuFoldOutlined />
                    VOA Special English
                </Menu.Item>
                <Menu.Item key="mail5">
                    <DesktopOutlined />
                    VOA Special English
                </Menu.Item> */}
          {this.getMenuItem()}
        </Menu>
      </Fragment>
    );
  }
}

export default AppHeader;