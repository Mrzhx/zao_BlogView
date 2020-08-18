import React from 'react'
import { UnorderedListOutlined } from '@ant-design/icons';
import './TopHeader.css';

const navItem = [
  {
    id: 0,
    name: "首页",
    url: "/",
  },
  {
    id: 1,
    name: "文章",
    url: "/article",
  },
  {
    id: 2,
    name: "关于我们",
    url: "/detail",
  },
  {
    id: 3,
    name: "联系我们",
    url: "/phone",
  },
  {
    id: 4,
    name: "加入我们",
    url: "/join",
  }
]

interface Props {
  history: any
};

interface NavCon {
  nav_status?: Boolean,
  child?: {
    name: string,
    url: string
  }
}

const NavItem: React.FC<NavCon> = (value) => {
  console.log(value)
  return(
    <li>lll</li>
  )
}


const Navlist: React.FC = () => {
  const itemArr = navItem.map((item) => {
    <NavItem key={item.id} child={item}></NavItem>
  })
  return <ul>{itemArr}</ul>
}

const UserHeader: React.FC = () => {
  return (
    <div className="layout-header">
      <div className="nav-con">
        <h4>前端早早聊大会</h4>
        <Navlist></Navlist>
        <UnorderedListOutlined />
      </div>
    </div>
  )
}

export const TopHeader: React.FC<Props> = (props) => {
  // const ChangeUrl = (event: any) => {
  //   props.history.push(event.key);
  // };
  console.log(props)
  return (
    <UserHeader></UserHeader>
  )
}
