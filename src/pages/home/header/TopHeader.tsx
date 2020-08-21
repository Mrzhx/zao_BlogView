import React from 'react'
import { NavAdj } from "./NavCon/NavCon"
import { UnorderedListOutlined } from '@ant-design/icons'
import './TopHeader.css'


/**
 * 控制顶部菜单 show/hidden
 */
interface IsProps { }
interface Istate { status: Boolean }

class UserHeader extends React.Component<IsProps, Istate> {
  constructor(props: IsProps) {
    super(props)
    this.state = {
      status: true
    } 
  }
  componentDidMount() {
    
  }
  private changeStatus() {
    const width = document.body.clientWidth;
    if (width > 750) return;
    const el: any = document.getElementsByClassName('nav-list-hor');
    let str = el[0].style.display;
    if (str === 'none' || str === "") {
      el[0].style.display = 'block'
    } else {
      el[0].style.display = 'none';
    }
  }
  render() {
    return (
      <div className="layout-header">
        <div className="nav-con">
          <h4>前端早早聊大会</h4>
          {
            this.state.status ? <NavAdj></NavAdj>:''
          }
          <UnorderedListOutlined onClick={() => this.changeStatus()}/>
        </div>
      </div>
    )
  }
}


interface Props { history: any };
export const TopHeader: React.FC<Props> = (props) => {
  return (
    <UserHeader></UserHeader>
  )
}
