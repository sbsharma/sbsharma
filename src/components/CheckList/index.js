import { Col, Row, Typography } from "antd";
import ICON from "../../icons";

const { Title } = Typography;

export default function CheckList() {
  return (
    <div className="checklist-section">
      <Title style={{ color: "#fff" }}>
        Create your <span style={{ color: "#F9A802" }}>Custom API</span>
      </Title>
      <br/>
      <Row>
        <Col lg={5}>
          <div style={{ display: "flex", margin: "10px 0" }}>
            <div>{ICON.check()}</div>
            <Title level={3} style={{ color: "#fff" }}>
              Coupon
            </Title>
          </div>
          <div style={{ display: "flex", margin: "10px 0" }}>
            <div>{ICON.check()}</div>
            <Title level={3} style={{ color: "#fff" }}>
              Analytics
            </Title>
          </div>
          <div style={{ display: "flex", margin: "10px 0" }}>
            <div>{ICON.check()}</div>
            <Title level={3} style={{ color: "#fff" }}>
              Referrals
            </Title>
          </div>
          <div style={{ display: "flex", margin: "10px 0" }}>
            <div>{ICON.check()}</div>
            <Title level={3} style={{ color: "#fff" }}>
              Loyalty
            </Title>
          </div>
        </Col>
        <Col lg={19}>
          <div style={{ display: "flex", margin: "10px 0" }}>
            <div>{ICON.check()}</div>
            <Title level={3} style={{ color: "#fff" }}>
              Product bundling
            </Title>
          </div>
          <div style={{ display: "flex", margin: "10px 0" }}>
            <div>{ICON.check()}</div>
            <Title level={3} style={{ color: "#fff" }}>
              In-cart promotions
            </Title>
          </div>
          <div style={{ display: "flex", margin: "10px 0" }}>
            <div>{ICON.check()}</div>
            <Title level={3} style={{ color: "#fff" }}>
              Geofence promotions
            </Title>
          </div>
          <div style={{ display: "flex", margin: "10px 0" }}>
            <div>{ICON.check()}</div>
            <Title level={3} style={{ color: "#fff" }}>
              Digital wallets
            </Title>
          </div>
        </Col>
      </Row>
    </div>
  );
}
