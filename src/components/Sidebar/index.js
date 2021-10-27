import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  RightOutlined,
} from "@ant-design/icons";
import MainGrid from "../MainGrid";
import CheckList from "../CheckList";
import SalesPromotion from "../SalesPromotion";
import Algorithm from "../Algorithm";
import MainLayout from "../MainLayout";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class Sidebar extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  toggleCollapse = () =>
    this.setState((prev) => ({ ...prev, collapsed: !prev.collapsed }));

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          // collapsible
          collapsed={collapsed}
          onCollapse={this.onCollapse}
          style={{ backgroundColor: "#2C1F53" }}
        >
          <div className="logo" onClick={this.toggleCollapse}>
            <img src="/sidebar_logo.png" alt="sidebar" className="logo-img" />
          </div>
          {collapsed ? null : (
            <Menu
              defaultSelectedKeys={["1"]}
              mode="inline"
              style={{
                backgroundColor: "#2C1F53",
                border: "none",
                color: "#fff",
              }}
            >
              <Menu.Item key="1">Product</Menu.Item>
              <Menu.Item key="2">Pricing</Menu.Item>
              <SubMenu key="sub1" title="User">
                <Menu.Item key="3">Wilson</Menu.Item>
                <Menu.Item key="4">Saumya</Menu.Item>
                <Menu.Item key="5">Lisa</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title="Company">
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9">Pre-paid card</Menu.Item>
            </Menu>
          )}
        </Sider>
      </Layout>
    );
  }
}
