import React from 'react'
import { TopHeader } from './header/TopHeader';
import { HomeContent } from './content/HomeContent';
import { HomeFooter } from './HomeFooter/HomeFooter';

import { Layout } from 'antd';

type Props = {};


export class HomeIndex extends React.Component<Props, {}> {
  render() {
    return (
      <Layout>
        <TopHeader nav="mynav"></TopHeader>
        <HomeContent nav="我的内容"></HomeContent>
        <HomeFooter></HomeFooter>
      </Layout>
    ) 
  }
}
