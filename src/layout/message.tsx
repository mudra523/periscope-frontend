import React from "react";
import { Row, Col, Image, Typography } from "antd";
import "./index.css";

const { Text } = Typography;
interface Props {}

const Profile = () => (
  <Row justify="center" align="middle" style={{ marginBottom: "1em" }}>
    <Col flex={2}>
      <div style={{display:"flex", alignItems:"center"}}>
        <Image
          width={40}
          className="profile_img"
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        {/* <Avatar /> */}
      </div>
    </Col>
    <Col flex={4} className="profile_text">
      <Text className="text_black text_bold">Mandy Willson</Text>
      <Text className="text_gray text_regular_bold">Available to chat</Text>
    </Col>
  </Row>
);

const Index = (props: Props) => {
  return (
    <>
      <Row justify="space-between">
        <Col flex={2}>
          <div>
            <Text className="text_alert text_bold">0</Text>&nbsp;&nbsp;
            <Text className="text_gray text_bold">Message</Text>
            {/* <Avatar /> */}
          </div>
        </Col>
        <Col flex={4} className="text_alert text_bold text_right">4</Col>
      </Row>
      <div style={{ padding: "1em" }}>
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </div>
    </>
  );
};

export default Index;
