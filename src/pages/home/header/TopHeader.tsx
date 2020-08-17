import React from 'react'
import { UnorderedListOutlined } from '@ant-design/icons';
import './TopHeader.css';

// const navItem = [
//   {
//     name: "首页",
//     url: "/",
//   },
//   {
//     name: "文章",
//     url: "/article",
//   },
//   {
//     name: "关于我们",
//     url: "/detail",
//   },
//   {
//     name: "联系我们",
//     url: "/phone",
//   },
//   {
//     name: "加入我们",
//     url: "/join",
//   }
// ]

interface Props {
  history: any
};


const UserHeader: React.FC = () => {
  return (
    <div className="layout-header">
      <div className="nav-con">
        <h4>前端早早聊大会</h4>
        <UnorderedListOutlined />
      </div>
    </div>
  )
}

export const TopHeader: React.FC<Props> = (props) => {
  // const ChangeUrl = (event: any) => {
  //   props.history.push(event.key);
  // };

  return (
    <UserHeader></UserHeader>
  )
}
