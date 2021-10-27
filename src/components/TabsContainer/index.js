import { Card, Tabs } from "antd";
import { Typography } from "antd";
import { Input } from "antd";
import TabCards from "../TabCards";

const { Search } = Input;
const { TabPane } = Tabs;
const { Title } = Typography;
const { Meta } = Card;

const onSearch = (value) => console.log(value);

export default function TabsContainer() {
  return (
    <>
      <div className="tabs-container">
        <Tabs
          defaultActiveKey="1"
          type="card"
          style={{
            height: "1000px",
            fontWeight: "light",
            fontFamily: "Open Sans, sans-serif",
            fontSize: "14px",
            borderRadius: "20px 20px 0 0",
          }}
        >
          <TabPane disabled></TabPane>
          <TabPane
            tab="All"
            key="1"
            style={{ height: "900px", padding: "80px" }}
          > 
            <TabCards />
          </TabPane>
          <TabPane
            tab="CRM"
            key="2"
            style={{ height: "2400px", padding: "80px" }}
          >
            <TabCards />
          </TabPane>
          <TabPane tab="Messaging" key="3"
            style={{ height: "2400px", padding: "80px" }}><TabCards />
          </TabPane>
          <TabPane tab="E-Commerce" key="4"
            style={{ height: "2400px", padding: "80px" }}><TabCards />
          </TabPane>
          <TabPane tab="Marketing Automation" key="5"
            style={{ height: "2400px", padding: "80px" }}><TabCards />
          </TabPane>
          <TabPane tab="Analytics" key="6"
            style={{ height: "2400px", padding: "80px" }}><TabCards />
          </TabPane>
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
        </Tabs>
      </div>
    </>
  );
}
