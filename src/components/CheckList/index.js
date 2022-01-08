import { Col, Row, Typography } from "antd";
import ICON from "../../icons";

const { Title } = Typography;

export default function CheckList() {
  return (
    <div className="checklist-section">
      <Title className="checklist-heading">
        Create your <span style={{ color: "#F9A802" }}>Custom API</span>
      </Title>
      <br/>
      <Row>
        <Col xs={10} sm={12} md={12} lg={5} xl={5}>
          <div style={{ display: "flex", margin: "10px 0" }}>
            <div>{ICON.check()}</div>
            <Title level={3} className="checklist-items">
              Coupon
            </Title>
          </div>
          <div style={{ display: "flex", margin: "10px 0" }}>
            <div>{ICON.check()}</div>
            <Title level={3} className="checklist-items">
              Analytics
            </Title>
          </div>
          <div style={{ display: "flex", margin: "10px 0" }}>
            <div>{ICON.check()}</div>
            <Title level={3} className="checklist-items">
              Referrals
            </Title>
          </div>
          <div style={{ display: "flex", margin: "10px 0" }}>
            <div>{ICON.check()}</div>
            <Title level={3} className="checklist-items">
              Loyalty
            </Title>
          </div>
        </Col>
        <Col xs={14} sm={12} md={12} lg={19} xl={19}>
          <div style={{ display: "flex", margin: "10px 0" }}>
            <div>{ICON.check()}</div>
            <Title level={3} className="checklist-items">
              Product bundling
            </Title>
          </div>
          <div style={{ display: "flex", margin: "10px 0" }}>
            <div>{ICON.check()}</div>
            <Title level={3} className="checklist-items">
              In-cart promotions
            </Title>
          </div>
          <div style={{ display: "flex", margin: "10px 0" }}>
            <div>{ICON.check()}</div>
            <Title level={3} className="checklist-items">
              Geofence promotions
            </Title>
          </div>
          <div style={{ display: "flex", margin: "10px 0" }}>
            <div>{ICON.check()}</div>
            <Title level={3} className="checklist-items">
              Digital wallets
            </Title>
          </div>
        </Col>
      </Row>
    </div>
  );
}
