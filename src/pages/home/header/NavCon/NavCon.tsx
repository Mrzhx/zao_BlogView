import React from 'react'
import '../TopHeader'
import { Link } from 'react-router-dom'
const navItem = [
  {
    id: 0,
    name: "首页",
    url: "/",
  },
  {
    id: 1,
    name: "热点",
    url: "/article",
  },
  {
    id: 2,
    name: "痕迹",
    url: "/detail",
  }
]

/**
 * 横向
 */
interface NavCon {
  child: {
    name: string,
    url: string
  }
}
const NavItemAdj: React.FC<NavCon> = (value) => {
  return(
    <li className="nav-item">
      <Link to={value.child.url}>{value.child.name}</Link>
    </li>
  )
}
export const NavAdj: React.FC = () => {
  const itemArr = navItem.map((item) =>(
    <NavItemAdj key={item.id} child={item}></NavItemAdj>
  ))
  return <ul className="nav-list">{itemArr}</ul>
}

/**
 * 纵向
 */
const NavItemHor: React.FC<NavCon> = (value) => {
  return(
    <li className="nav-item-hor">
      <Link to={value.child.url}>{value.child.name}</Link>
    </li>
  )
}
export const NavHor: React.FC = () => {
  const itemArr = navItem.map((item) =>(
    <NavItemHor key={item.id} child={item}></NavItemHor>
  ))
  return <ul className="nav-list-hor">{itemArr}</ul>
}
