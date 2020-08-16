import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

type Props = {}

export const Admin: React.FC<Props> = props => {
  return (
    <Footer className="home-bottom">
      管理员页面
    </Footer>
  )
}

