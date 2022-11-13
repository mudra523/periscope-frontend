import React from "react";
import { Card, Typography, Tag, Image, Row, Col, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Text } = Typography;
type Props = {};

const RoomCard = (props: Props) => {
  return (
    <Card>
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          flexDirection: "column",
          padding: "2em",
        }}
      >
        <Text className="text_black text_bold" style={{ marginBottom: "1em" }}>
          How to get into fortune 500
        </Text>
        <div style={{ marginBottom: "1em" }}>
          <Tag className="bg_primary_mid text_primary_dark">#Interview</Tag>
          <Tag className="bg_primary_mid text_primary_dark">#DSA</Tag>
          <Tag className="bg_primary_mid text_primary_dark">#Fortune500</Tag>
        </div>
        <Text
          className="text_primary_dark text_regular_bold"
          style={{
            position: "absolute",
            bottom: "0em",
            marginTop: "1em",
          }}
        >
          Room by Ellen Wheeler
        </Text>
        <div
          style={{
            position: "absolute",
            display: "flex",
            right: "2em",
            bottom: "-2em",
          }}
        >
          <Image
            width={60}
            className="profile_img"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          {/* <Avatar /> */}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "2em",
          borderRadius: "0px 0px 8px 8px",
        }}
        className="bg_primary_mid"
      >
        <Text
          className="text_primary_dark text_medium_bold"
          style={{ marginBottom: "1em" }}
        >
          <UserOutlined />
          &nbsp;&nbsp;50 listeners
        </Text>
        <Row justify="center" align="middle">
          <Col flex={2}>
            <div>
              <Image
                width={35}
                className="profile_img"
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
               <Image
               style={{marginLeft:"-0.5em"}}
                width={35}
                className="profile_img"
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
              {/* <Avatar /> */}
            </div>
          </Col>
          <Col flex={5} className="profile_text">
            <Text className="text_primary_dark text_regular_bold">
              +5 other speeker
            </Text>
          </Col>
          <Col flex={3} className="profile_text">
            <Button size="small" className="bg_primary text_white">
              Join in
            </Button>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default RoomCard;