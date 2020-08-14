import React from 'react'
import { Layout } from 'antd';
const { Header } = Layout;

type Props = {
  nav: string,
}

export const TopHeader: React.FC<Props> = props => {
  return (
    <Header>
      {props.nav}
    </Header>
  )
}

