import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import { Layout } from "antd";

import './style.css';
import AppHeader from './components/headers/index'

import { BrowserRouter, Route, Switch } from 'react-router-dom'; // npm install react-router-dom --save
import { List } from 'antd/lib/form/Form';
import HomePageList from './containers/Lists/list';
import Detail from './containers/Details/detail'

const { Header, Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout style={{ minWidth: 1450 }}>
        <Header className="header">
          <AppHeader />
        </Header>
        <Content className="content">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={HomePageList} />
              <Route exact path="/detail" component={Detail} />
            </Switch>
          </BrowserRouter>
        </Content>
        <Footer className="footer">Footer</Footer>
      </Layout>
    );
  }
}



ReactDOM.render(
    <App />,
  document.getElementById('root')
);

