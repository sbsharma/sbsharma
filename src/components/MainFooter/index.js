import { Col, Row } from "antd";
import ICON from "../../icons";
import { Typography } from "antd";
import { Layout } from "antd";
const { Title } = Typography;

const { Header, Content, Footer, Sider } = Layout;

export default function MainFooter() {
  return (
    <div style={{paddingTop: '30px', paddingBottom: '30px'}}>
    <Footer style={{ textAlign: "center"}}>
      <Row>
        <Col xs={4}>{ICON.websiteLogo()}</Col>
        <Col xs={4} style={{ textAlign: "left", padding: "0 30px" }}>
          <div className="footer-links">
            <Title level={5}>Features</Title>

            <li>
              <a>Coupon software</a>
            </li>
            <li>
              <a>Cart-level promotion software</a>
            </li>
            <li>
              <a>Gift cards software</a>
            </li>
            <li>
              <a>Product bundling</a>
            </li>
            <li>
              <a>Loyalty program software</a>
            </li>
            <li>
              <a>Referral program software</a>
            </li>
            <li>
              <a>Giveaways software</a>
            </li>
            <li>
              <a>Digital wallets</a>
            </li>
            <li>
              <a>Geofence promotions</a>
            </li>
          </div>
        </Col>
        <Col xs={4} style={{ textAlign: "left", padding: "0 30px" }}>
          <div className="footer-links">
            <Title level={5}>Meribachat for...</Title>

            <li>
              <a>Enterprise</a>
            </li>
            <li>
              <a>Marketers</a>
            </li>
            <li>
              <a>Product managers</a>
            </li>
            <li>
              <a>Developers</a>
            </li>
          </div>
        </Col>
        <Col xs={4} style={{ textAlign: "left", padding: "0 30px" }}>
          <div className="footer-links">
            <Title level={5}>For Marketers</Title>

            <li>
              <a>Integrations</a>
            </li>
            <li>
              <a>Success portal</a>
            </li>
            <li>
              <a>Inspiration library</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Roadmap</a>
            </li>
            <li>
              <a>Help Center</a>
            </li>
            <li>
              <a>Promotions Hub</a>
            </li>
          </div>
        </Col>
        <Col xs={4} style={{ textAlign: "left", padding: "0 30px" }}>
          <div className="footer-links">
            <Title level={5}>For Developers</Title>

            <li>
              <a>Documentation</a>
            </li>
            <li>
              <a>API status</a>
            </li>
          </div>
        </Col>
        <Col xs={4} style={{ textAlign: "left", padding: "0 30px" }}>
          <div className="footer-links">
            <Title level={5}>Company</Title>

            <li>
              <a>About</a>
            </li>
            <li>
              <a>Our partners</a>
            </li>
            <li>
              <a>Career</a>
            </li>
            <li>
              <a>Contact us</a>
            </li>
            <li>
              <a>Legal</a>
            </li>
          </div>
        </Col>
      </Row>
    </Footer>
    </div>
  );
}
