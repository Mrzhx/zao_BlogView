import React, { useEffect, useState } from 'react';
import './ArticleDetail.css';
import { GetQueryString } from '../../../../utils/tools';
import { newFetch } from '../../../../utils/http';
import { Layout, Typography } from 'antd';
const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

interface Props {
  history: any,
  location: any
}

const getDocInfo = async (search: string) => {
  try {
    const res = await newFetch.get({
      url: "user/docinfo", query: {
        id: GetQueryString('id'),
        slug: GetQueryString('slug')
      }, headers: {}
    });
    if (res.code === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
}


export const ArticleDetail: React.FC<Props> = props => {
  const [docinfo, setInfo] = useState({
    title: "",
    description: "",
    body_lake: "",
    body_html: "",
    creator: {
      name: "",
      description: ""
    }
  });
  useEffect(() => {
    console.log(props)
    getDocInfo(props.location.search).then(res => {
      setInfo(res.data);
    })
  }, [])

  return (
    <Content className="doc-con">
      <div className="topBanner">
        <div className="banner-con">
          <div className="article-img"></div>
        </div>
      </div>
      <Typography className="doc-text">
        <Title>{docinfo.title}</Title>
        <Paragraph>{docinfo.description}</Paragraph>
        <pre>
          <div dangerouslySetInnerHTML={{ __html: docinfo.body_lake }}></div>
        </pre>
        <Paragraph>
          <Text strong>{docinfo.creator.name}@</Text>
          {docinfo.creator.description}
        </Paragraph>
        <pre>
          <div dangerouslySetInnerHTML={{ __html: docinfo.body_html }}></div>
        </pre>
      </Typography>
    </Content>
  )
}
