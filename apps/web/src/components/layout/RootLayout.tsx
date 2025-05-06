import { Layout, Menu } from "antd";
import {
  Header as AntdHeader,
  Content as AntdContent,
  Footer as AntdFooter,
} from "antd/es/layout/layout";
import { Outlet, Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Header = styled(AntdHeader)({
  color: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 24px",
});

const Content = styled(AntdContent)({
  maxWidth: 800,
  margin: "0 auto",
});

const Footer = styled(AntdFooter)({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  padding: "16px 24px",
});

const RootLayout = () => {
  const location = useLocation();

  return (
    <Layout>
      <Header>
        <span>가짜 뉴스 생성기</span>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          disabledOverflow
        >
          <Menu.Item key="/">
            <Link to="/">홈</Link>
          </Menu.Item>
          <Menu.Item key="/news">
            <Link to="/news/0">뉴스 생성</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer>
        <div>
          © {new Date().getFullYear()} Fake News Generator. All rights reserved.
        </div>
        <div style={{ fontSize: "12px", color: "#666" }}>
          본 서비스는 가짜 뉴스 생성을 위한 시뮬레이션 도구입니다. 서비스
          이용으로 인해 발생하는 모든 책임은 이용자에게 있습니다.
        </div>
      </Footer>
    </Layout>
  );
};

export default RootLayout;
