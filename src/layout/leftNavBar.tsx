import React from "react";
import { Menu, Row, Col, Image, Button, Typography } from "antd";
import Message from "./message";
import "./index.css";

const { Text } = Typography;

type Props = {};

const LeftNavBar = (props: Props) => {
  return (
    <>
      <Row justify="center" style={{ marginBottom:"2em", marginTop:"1em" }}>
        <Col flex={2}>
          <div>
            <Image
              width={45}
              className="profile_img"
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            {/* <Avatar /> */}
          </div>
        </Col>
        <Col flex={4} className="profile_text">
          <Text className="text_black text_bold">Mandy Willson</Text>
          <Text className="text_gray text_regular_bold">@mandywillson</Text>
        </Col>
      </Row>
      <Row style={{ marginBottom:"1em" }}>
        <Button type="primary" className="text_black" style={{ width:"100%" }}>
          Start a room
        </Button>
      </Row>
      <Menu
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={["All Rooms", "Populer", "Following", "settings"].map((icon, index) => ({
          key: String(icon),
          // icon: React.createElement(icon),
          label: icon,
        }))}
        style={{ marginBottom:"1em" }}
      />
      <Message/>
    </>
  );
};

export default LeftNavBar;
