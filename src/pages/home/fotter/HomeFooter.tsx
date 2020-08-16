import React from 'react';
import './HomeFooter.css';
import { Layout } from 'antd';
const { Footer } = Layout;

type Props = {}

export const HomeFooter: React.FC<Props> = props => {
  return (
    <Footer className="home-bottom">
      欢迎来到感官世界～
    </Footer>
  )
}

