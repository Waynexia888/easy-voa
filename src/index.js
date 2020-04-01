import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import { Layout } from "antd";

import './style.css';
import AppHeader from './components/headers/header'

import { BrowserRouter, Route, Switch } from 'react-router-dom'; // npm install react-router-dom --save
import { List } from 'antd/lib/form/Form';
import HomePageList from './containers/Lists/list';
import Detail from './containers/Details/detail'

const { Header, Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout style={{ minWidth: 1450, height: "100%" }}>
          <Header className="header">
            <AppHeader />
          </Header>
          <Content className="content">
            <Switch>
              <Route path="/:id?" component={HomePageList} />
              <Route exact path="/detail" component={Detail} />
            </Switch>
          </Content>
          <Footer className="footer">
            Copyright &copy; {new Date().getFullYear()} EasyVOA
          </Footer>
        </Layout>
      </BrowserRouter>
    );
  }
}



ReactDOM.render(
    <App />,
  document.getElementById('root')
);

