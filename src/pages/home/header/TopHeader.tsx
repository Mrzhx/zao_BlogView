import React from 'react'
import { HomeOutlined, BookOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Header } = Layout;
type Props = {
  nav: string,
}

export const TopHeader: React.FC<Props> = props => {
  return (
    <Header>
      <Menu mode="horizontal" theme="dark">
        <Menu.Item key="mail" icon={<HomeOutlined />}>
          首页
        </Menu.Item>
        <Menu.Item key="app" icon={<BookOutlined />}>
          文章
        </Menu.Item>
        <Menu.Item key="about" icon={<AppstoreOutlined />}>
          关于我们
        </Menu.Item>
        <Menu.Item key="connect" icon={<AppstoreOutlined />}>
          联系我们
        </Menu.Item>
        <Menu.Item key="join" icon={<AppstoreOutlined />}>
          加入我们
        </Menu.Item>
      </Menu>
    </Header>
  )
}

