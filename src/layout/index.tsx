import React from "react";
import { Layout } from "antd";
import LeftNavBar from "./leftNavBar";
import styles from "./index.module.css";

const { Content, Sider } = Layout;

interface Props {
  children: React.ReactNode;
  title?: string | null | undefined;
}

const Index = (props: Props) => {
  const { children } = props;
  return (
    <Layout>
      <Sider width={350} className={styles.sideBarNavigation} breakpoint="sm" collapsedWidth={0}>
        <LeftNavBar/>
      </Sider>
      <Content>{children}</Content>
    </Layout>
  );
};

export default Index;
