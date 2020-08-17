
import React from 'react';
import './HomeList.css';
import { Layout, Row, Col, Card } from 'antd';
const { Content } = Layout;
type Props = {
  nav: string,
}

export const HomeList: React.FC<Props> = props => {
  return (
    <Content>
      <div className="topBanner">
        <div className="banner-con">
          <div className="article-img"></div>
        </div>
      </div>

      <Row gutter={[0, 20]} justify="space-around" style={{maxWidth: "1050px", margin: '2rem auto'}}>
        <Col xs={{ span: 24 }} lg={{ span: 7}} > 
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 7,}} > 
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 7}} > 
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
    </Content>
  )
}

