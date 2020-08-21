
import React from 'react';
import dayjs from 'dayjs';
import './HomeList.css';
import { newFetch } from '../../../utils/http';
import { Layout, Row, Col, Card } from 'antd';
const { Content,  } = Layout;
const { Meta } = Card;

interface IsProps { }
interface Istate { list: [] }


/**
 * CardItems
 */
interface Cards { child: any };

const CardItems: React.FC<Cards> = (cards) => {
  const { child } = cards;
  return (
    <Col xs={{ span: 24 }} lg={{ span: 7}}> 
      <Card title={child.title} bordered={false}>
        <Meta title={child.updated_at}  />
        <div style={{marginTop: '10px'}}>{child.description}</div>
      </Card>
    </Col>
  )
}

export class HomeList extends React.Component<IsProps, Istate> {
  constructor(props: IsProps) {
    super(props)
    this.state = {
      list: []
    }
  }
  /**
   * changeTime
   */
  public changeTime(str) {
    const nowDay: any = dayjs(str);
    return dayjs(nowDay.$d.getTime()).format('YYYY-MM-DD')
  }
  /**
   * getDocList
   */
  public async getDocList() {
    try {
      const res = await newFetch.get({ url: "user/doclist", query: "", headers: {} });
      if (res.code === 200) {
        const listArr = res.data.data;
        listArr.forEach(item => {
          item.updated_at = this.changeTime(item.updated_at.toString());
        })
        this.setState({
          list: listArr
        })
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getDocList();
  }

  render() {
    return (
      <Content>
        <div className="topBanner">
          <div className="banner-con">
            <div className="article-img"></div>
          </div>
        </div>
  
        <Row gutter={[0, 20]} justify="space-around" style={{maxWidth: "1050px", margin: '2rem auto'}}>
          {
            this.state.list.map((item: any) => {
              return <CardItems key={item.slug} child={item}></CardItems>
            })
          }
        </Row>
      </Content>
    )
  }
}

