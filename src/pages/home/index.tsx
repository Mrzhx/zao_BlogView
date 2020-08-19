import React from 'react'
import { TopHeader } from './header/TopHeader';
import { HomeList } from './content/HomeList';
import { ArticleDetail } from './content/article_detail/ArticleDetail';
import { HomeFooter } from './fotter/HomeFooter';
import { NavHor } from './header/NavCon/NavCon';
import { Router, Route, Switch } from "react-router-dom";
import { Layout } from 'antd';
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

interface Props {};
export class HomeIndex extends React.Component<Props, {}> {
  componentDidMount() {
    let width = document.body.clientWidth
    const el: any = document.getElementsByClassName('nav-list-hor');
    if (width >= 750) {
      el[0].style.display = "none"
    }
  }
  render() {
    return (
      <Router history={history}>
        <Layout>
          <TopHeader history={history}></TopHeader>
          <NavHor></NavHor>
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
