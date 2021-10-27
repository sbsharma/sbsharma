import { Col, Row, Typography } from "antd";
import FloatingButton from "../FloatingButton";
const { Title } = Typography;

export default function PricingLayout() {
  return (
    <>
    {/* <FloatingButton /> */}
    <div className="pricing-layout">
      <Title className="pricing-layout-heading">
        <span style={{ color: "#F9A802" }}>Plans</span> that scale with your
        usage
      </Title>
      <br/>
      <br/>
      <br/>
      <div className="pricing-box">
        <Row justify="space-around" align="middle">
          <Col xs={2} sm={4} md={6} lg={14} xl={6}>
            <Title className="box-heading">Enterprise</Title>
            <Title level={5}>
              A custom plan for mission-
              <br />
              critical projects
            </Title>
            <br />
            <div className="box-details">
            <Title level={2} style={{ fontWeight: "normal" }}>
              Custom Pricing
            </Title></div>
            <button
              className="box-btn"
              style={{ background: "#3B34AB", color: "#fff" }}
            >
              Contact sales
            </button>
            <br/>
            <br/>
            <div className="box-list">
              <li>Custom API limits</li>
              <li>Enhanced Security & SLA</li>
              <li>Enterprise account administration</li>
            </div>
          </Col>
          <Col xs={2} sm={4} md={6} lg={14} xl={6}>
            {" "}
            <Title>Professional</Title>
            <Title level={5}>
              For an established business <br />
              ready to scale
            </Title>
            <br />
            <div className="box-details">
            <Title level={4} className="box-price">
              000/mo
            </Title></div>
            <button className="box-btn">30 Days free trail</button>
            <br/>
            <br/>
            <div className="box-list">
              <li>10,000 redemptions</li>
              <li>100,000 message</li>
              <li>5,000 API calls/hour</li>
            </div>
          </Col>
          <Col xs={2} sm={4} md={6} lg={14} xl={6}>
            {" "}
            <Title>Growth</Title>
            <Title level={5}>
              Small and forward-thinking
              <br /> marketing teams
            </Title>
            <br />
            <div className="box-details">
            <Title level={4} className="box-price">
              000/mo
            </Title></div>
            <button className="box-btn">30 Days free trail</button>
            <br/>
            <br/>
            <div className="box-list">
              <li>10,000 redemptions</li>
              <li>100,000 message</li>
              <li>5,000 API calls/hour</li>
            </div>
          </Col>
          <Col xs={2} sm={4} md={6} lg={14} xl={6}>
            {" "}
            <Title>Startup</Title>
            <Title level={5}>
              For beginning companies <br />
              who do not need higher limits yet
            </Title>
            <br />
            <div className="box-details">
            <Title level={4} className="box-price">
              000/mo
            </Title></div>
            <button className="box-btn">30 Days free trail</button>
            <br/>
            <br/>
            <div className="box-list">
              <li>10,000 redemptions</li>
              <li>100,000 message</li>
              <li>5,000 API calls/hour</li>
            </div>
          </Col>
        </Row>
      </div>
    </div>
    </>
  );
}
