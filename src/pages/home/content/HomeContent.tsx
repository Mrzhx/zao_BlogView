
import React from 'react'
import { Layout } from 'antd';
const { Content } = Layout;

type Props = {
  nav: string,
}

export const HomeContent: React.FC<Props> = props => {
  return (
    <Content>
      {props.nav}
    </Content>
  )
}

