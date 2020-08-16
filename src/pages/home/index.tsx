import React from 'react'
import { TopHeader } from './header/TopHeader';
import { HomeList } from './content/HomeList';
import { ArticleDetail } from './content/article_detail/ArticleDetail';
import { HomeFooter } from './fotter/HomeFooter';

import { Router, Route, Switch } from "react-router-dom";
import { Layout } from 'antd';
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

interface Props {};
console.log(history)
export class HomeIndex extends React.Component<Props, {}> {
  render() {
    return (
      <Router history={history}>
        <Layout>
          <TopHeader history={history}></TopHeader>
          <Switch>
            <Route exact path="/" component={HomeList} />
            <Route path="/article" component={ArticleDetail} />
          </Switch>
          <HomeFooter></HomeFooter>
        </Layout>
      </Router>
    )
  }
}
