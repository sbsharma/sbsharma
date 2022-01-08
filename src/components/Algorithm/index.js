import { Col, Row } from "antd";
import { Typography } from "antd";
import AlgoColumn from "../AlgoColumn";

const { Title } = Typography;

export default function Algorithm({ reverse = false }) {
  return (
    <div className="algorithm-section"> 
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} order={reverse ? 1 : 0}>
          <div style={{ margin: reverse ? "100px 0 0 0px" : "100px 70px 0 0" }}>
            <Title level={3} style={{ color: "#F9A802" }} className="algo-step">
              Step 1 :
            </Title>
            <Title level={2} style={{ color: "#fff" }} className="algo-step-name">
              Build & manage your sale promotion campaign
            </Title>
            <Title level={4} style={{ color: "#fff" }} className="algo-step-para">
              Promotion strategy campaigns need not always be just the marketing
              campaigns you run. It can be a campaign to identify the aspects of
              change and development
            </Title>
          </div>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} >
          <img
            src="/step1.png"
            alt="algo"
            className="algo-img"
          />
        </Col>
      </Row>
      <br /> 
      <br />
      <br />
      <br />
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} order={reverse ? 0 : 1}>
          <div
            style={{ margin: reverse ? "100px 0 0 0px" : "100px 0px 0 70px" }}
          >
            <Title level={3} style={{ color: "#F9A802" }}>
              Step 2 :
            </Title>
            <Title level={2} style={{ color: "#fff" }}>
              Personization of offers at scale
            </Title>
            <Title level={4} style={{ color: "#fff" }}>
              Personalization of offers can deliver impact and growth quickly
              while creating better experiences for your customers
            </Title>
          </div>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} >
          <img
            src="/step2.png"
            alt="algo"
            className="algo-img"
          />
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} >
          <div style={{ margin: "100px 70px 0 0" }}>
            <Title level={3} style={{ color: "#F9A802" }}>
              Step 3 :
            </Title>
            <Title level={2} style={{ color: "#fff" }}>
              Distribute via multiple channels
            </Title>
            <Title level={4} style={{ color: "#fff" }}>
              Multi-channel marketing mixes many distributions and promotional
              channels into a single, unified strategy to attract customers
            </Title>
          </div>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} >
          <img
            src="/step3.png"
            alt="algo"
            className="algo-img"
          />
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} order={reverse ? 0 : 1}>
          <div
            style={{ margin: reverse ? "100px 0 0 0px" : "100px 0px 0 70px" }}
          >
            <Title level={3} style={{ color: "#F9A802" }}>
              Step 4 :
            </Title>
            <Title level={2} style={{ color: "#fff" }}>
              Deliver promotions at right time
            </Title>
            <Title level={4} style={{ color: "#fff" }}>
              Proper timing of the promotions is vital to producing a positive
              return on your marketing investment
            </Title>
          </div>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} >
          <img
            src="/step4.png"
            alt="algo"
            className="algo-img"
          />
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} >
          <div style={{ margin: "100px 70px 0 0" }}>
            <Title level={3} style={{ color: "#F9A802" }}>
              Step 5 :
            </Title>
            <Title level={2} style={{ color: "#fff" }}>
              Monitor sale Promotion Campaign
            </Title>
            <Title level={4} style={{ color: "#fff" }}>
              Monitoring sale promotions allow you to determine if your campaign
              is indeed working and how the marketing techniques you used are
              performing
            </Title>
          </div>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} >
          <img
            src="/step5.png"
            alt="algo"
            className="algo-img"
          />
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} order={reverse ? 0 : 1}>
          <div
            style={{ margin: reverse ? "100px 0 0 0px" : "100px 0px 0 70px" }}
          >
            <Title level={3} style={{ color: "#F9A802" }}>
              Step 6 :
            </Title>
            <Title level={2} style={{ color: "#fff" }}>
              Track & analyze
            </Title>
            <Title level={4} style={{ color: "#fff" }}>
              Tracking and analyzing sale promotions can help you to optimize
              your performance by preventing further losses
            </Title>
          </div>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} >
          <img
            src="/step6.png"
            alt="algo"
            className="algo-img"
          />
        </Col>
      </Row>
    </div>
  );
}
