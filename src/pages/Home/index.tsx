import React from "react";
import { Row, Col, Card } from "antd";
import Layout from "../../layout/index";
import RoomCard from "../../components/roomCard/roomCard";

type Props = {};

const Home = (props: Props) => {
  return (
    <Layout>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <RoomCard />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <RoomCard />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <RoomCard />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <RoomCard />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <RoomCard />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <RoomCard />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <RoomCard />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <RoomCard />
        </Col>
      </Row>
    </Layout>
  );
};

export default Home;
