import React, { Component } from "react";
import { List } from "antd";
import axios from 'axios';

// const data = [
//   "Racing car sprays burning fuel into crowd.",
//   "Japanese princess to wed commoner.",
//   "Australian walks 100km after outback crash.",
//   "Man charged over missing wedding girl.",
//   "Los Angeles battles huge wildfires."
// ];


class HomePageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('http://www.dell-lee.com/react/api/list.json')
      .then((res) => {
        // console.log(res.data.data)
        this.setState({
          data: res.data.data
        })
      })
  }
  render() {
    return (
      <List
        style={{background: "white"}}
        bordered
        dataSource={this.state.data}
        renderItem={item => <List.Item>{item.title}</List.Item>}
      />
    );
  }
}

export default HomePageList;
