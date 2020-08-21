import React, { useEffect, useState } from 'react';
import './ArticleDetail.css';
import { newFetch } from '../../../../utils/http';
import { Layout, Typography } from 'antd';
const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

type Props = {
  item: any
}

const getDocInfo = async() => {
  try {
    const res = await newFetch.get({ url: "user/docinfo", query: "", headers: {} });
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
    getDocInfo().then(res => {
      setInfo(res.data);
    })
  }, [])
  
  console.log(docinfo)
  return (
    <Content className="doc-con">
      <Typography className="doc-text">
        <Title>{docinfo.title}</Title>
        <Paragraph>{docinfo.description}</Paragraph>
        <pre>
          <div dangerouslySetInnerHTML={{__html: docinfo.body_lake}}></div>
        </pre>
        <Paragraph>
          <Text strong>{docinfo.creator.name}@</Text>
          {docinfo.creator.description}
        </Paragraph>
        <pre>
          <div dangerouslySetInnerHTML={{__html: docinfo.body_html}}></div>
        </pre>
      </Typography>
    </Content>
  )
}
