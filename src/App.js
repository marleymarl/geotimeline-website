import React from 'react';
import { Layout } from 'antd';
//
import { SiteHeader, SiteFooter } from './components/structure';
import HomePage from './HomePage';
//
// import 'antd/dist/antd.less';
import './App.less';
//
const { Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <SiteHeader navLayout='horizontal' />
      <Content>
        <HomePage />
      </Content>
      <SiteFooter />
    </Layout>
  );
}

export default App;
