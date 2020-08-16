import React from 'react'
import { HomeOutlined, BookOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Header } = Layout;
const navItem = [
  {
    name: "首页",
    url: "/",
    icon: <HomeOutlined />
  },
  {
    name: "文章",
    url: "/article",
    icon: <BookOutlined />
  },
  {
    name: "关于我们",
    url: "/detail",
    icon: <AppstoreOutlined />
  },
  {
    name: "联系我们",
    url: "/phone",
    icon: <AppstoreOutlined />
  },
  {
    name: "加入我们",
    url: "/join",
    icon: <AppstoreOutlined />
  }
]

interface Props {
  history: any
};

export const TopHeader: React.FC<Props> = (props) => {

  const ChangeUrl = (event: any) => {
    props.history.push(event.key);
  };

  return (
    <Header>
      <Menu mode="horizontal" theme="dark" onClick={ChangeUrl}>
        {
          navItem.map((item) =>
            <Menu.Item  key={item.url} icon={item.icon}>{item.name}</Menu.Item>
          )
        }
      </Menu>
    </Header>
  )
}
