// rcc
import React, { Component } from 'react';
import { Card } from "antd";
import axios from 'axios';
import './style.css'

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        }
    }
    render() {
        return (
          <Card title={this.state.title}>
            {/* <p>{this.state.content}</p> */}
            <div dangerouslySetInnerHTML={{__html: this.state.content}}
              className="detail"></div>
          </Card>
        );
    }

    componentDidMount() {
      const id = this.props.match.params.id
      axios.get('http://www.dell-lee.com/react/api/detail.json?id=' + id)
        .then((res) => {
          // console.log(res)
          // this.setState({
          //   title: res.data.data.title,
          //   content: res.data.data.content
          // })
          const data = res.data.data;
          this.setState(data)
        })
    }
}

export default Detail;
