import React from "react";
import { Layout } from "antd";
import LeftNavBar from "./leftNavBar";
import "./index.css";

const { Content, Sider } = Layout;

interface Props {
  children: React.ReactNode;
  title?: string | null | undefined;
}

const Index = (props: Props) => {
  const { children } = props;
  return (
    <Layout className="main_layout">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{ padding: "0.5em" }}  
      >
        <LeftNavBar />
      </Sider>
      <Content style={{ padding: "1em" }} >{children}</Content>
    </Layout>
  );
};

export default Index;
