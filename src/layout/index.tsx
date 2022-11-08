import React from "react";
import { Layout } from "antd";
import Footer from "./footer";
import Header from "./header";
const { Content } = Layout;

interface Props {
  children: React.ReactNode;
  title?: string | null | undefined;
}

const Index = (props: Props) => {
  const { children } = props;
  return (
    <Layout
      style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}
    >
      <div>
        <Header />
      </div>
      <div style={{ flex: "1" }}>
        <Content>{children}</Content>
      </div>
      <div>
        <Footer />
      </div>
    </Layout>
  );
};

export default Index;
