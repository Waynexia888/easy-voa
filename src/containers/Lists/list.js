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
    };
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps.match.params.id);
    let url = "http://www.dell-lee.com/react/api/list.json";
    const id = nextProps.match.params.id;
    if (id) {
      url = url + "?id=" + id;
    }
    axios.get(url).then(res => {
      this.setState({
        data: res.data.data
      });
    });
  }

  //componentDidMount()这个周期函数只执行一次， 
  // 如果想要再次执行，需要写componentWillReceiveProps（）这个周期函数
  componentDidMount() {
    let url = "http://www.dell-lee.com/react/api/list.json";
    const id = this.props.match.params.id;
    if (id) {
      url = url + "?id=" + id;
    }
    axios.get(url).then(res => {
      // console.log(res.data.data)
      this.setState({
        data: res.data.data
      });
    });
  }
  render() {
    // console.log(this.props.match.params.id)
    return (
      <List
        style={{ background: "white" }}
        bordered
        dataSource={this.state.data}
        renderItem={item => <List.Item>{item.title}</List.Item>}
      />
    );
  }
}

export default HomePageList;
