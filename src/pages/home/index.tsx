import React from 'react'
import { TopHeader } from './header/TopHeader';
import { HomeList } from './content/HomeList';
import { ArticleDetail } from './content/article_detail/ArticleDetail';
import { HomeFooter } from './fotter/HomeFooter';

import { Router, Route } from "react-router-dom";
import { Layout } from 'antd';
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

type Props = {};
console.log(history)
export class HomeIndex extends React.Component<Props, {}> {
  render() {
    return (
      <Router history={history}>
        <Layout>
          <TopHeader></TopHeader>
          <Route path="/list" component={HomeList} />
          <Route path="/detail" component={ArticleDetail} />
          <HomeFooter></HomeFooter>
        </Layout>
      </Router>
    )
  }
}
