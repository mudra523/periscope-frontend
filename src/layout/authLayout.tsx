import React from 'react';
import { Col, Row } from 'antd';
import { Layout } from "antd";

interface Props {
  children: React.ReactNode;
  title?: string | null | undefined;
}

const AuthLayout = (props: Props) => {
  const { children } = props;
  return (
    <Layout>
    <Row>
      <Col span={12}>{children}</Col>
      <Col span={12}></Col>
    </Row>
  </Layout>
    
  )
}

export default AuthLayout