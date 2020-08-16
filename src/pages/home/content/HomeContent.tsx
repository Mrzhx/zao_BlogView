
import React from 'react';
import './HomeContent.css';
import Banner from '../../../assets/images/bg7-1.png';
import { Layout, Row, Col, Card } from 'antd';
const { Content } = Layout;
type Props = {
  nav: string,
}

export const HomeContent: React.FC<Props> = props => {
  return (
    <Content>
      <div className="topBanner">
        <img src={Banner} alt=""/>
      </div>

      <Row gutter={[48, 32]} justify="space-around" style={{marginTop: '2rem'}}>
        <Col xs={{ span: 24 }} lg={{ span: 5}} > 
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 5,}} > 
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 5}} > 
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 5}} > 
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
    </Content>
  )
}

