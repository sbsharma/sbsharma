import { Col, Row, Typography } from "antd";
const { Title } = Typography;

export default function SectionFive() {
  return (
    <div className="section-three">
      <Title className="section-three-heading">
        API Integrated platform for developers{" "}
      </Title>
      <div className="section-three-row">
        <Row justify="space-around" align="middle">
          <Col
            xs={20}
            sm={16}
            md={12}
            lg={10}
            xl={8}
            style={{ textAlign: "center", padding: "0px 12px" }}
          >
            <img src="/5a.png" alt="" className="section-three-img" />
            <Title style={{ color: "#fff" }}>Powerful APIs</Title>
            <Title level={4} style={{ color: "#fff" }}>
              Integrate banking into your applications with our bundle of
              flexible APIs used by thousands of large businesses.
            </Title>
          </Col>
          <Col
            xs={20}
            sm={16}
            md={12}
            lg={10}
            xl={8}
            style={{ textAlign: "center", padding: "0px 12px" }}
          >
            <img src="/5b.png" alt="" className="section-three-img" />
            <Title style={{ color: "#fff" }}>Clear Documentation</Title>
            <Title level={4} style={{ color: "#fff" }}>
              Integrate banking into your applications with our bundle of
              flexible APIs used by thousands of large businesses.
            </Title>
          </Col>
          <Col
            xs={20}
            sm={16}
            md={12}
            lg={10}
            xl={8}
            style={{ textAlign: "center", padding: "0px 12px" }}
          >
            <img src="/5c.png" alt="" className="section-three-img" />
            <Title style={{ color: "#fff" }}>Sandbox Mode</Title>
            <Title level={4} style={{ color: "#fff" }}>
              Integrate banking into your applications with our bundle of
              flexible APIs used by thousands of large businesses.
            </Title>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row justify="space-around" align="middle">
          <Col
            xs={20}
            sm={16}
            md={12}
            lg={10}
            xl={8}
            style={{ textAlign: "center", padding: "0px 12px" }}
          >
            <img src="/5d.png" alt="" className="section-three-img" />
            <Title style={{ color: "#fff" }}>Secure API</Title>
            <Title level={4} style={{ color: "#fff" }}>
              Integrate banking into your applications with our bundle of
              flexible APIs used by thousands of large businesses.
            </Title>
          </Col>
          <Col
            xs={20}
            sm={16}
            md={12}
            lg={10}
            xl={8}
            style={{ textAlign: "center", padding: "0px 12px" }}
          >
            <img src="/5e.png" alt="" className="section-three-img" />
            <Title style={{ color: "#fff" }}>Dedicated Support</Title>
            <Title level={4} style={{ color: "#fff" }}>
              Integrate banking into your applications with our bundle of
              flexible APIs used by thousands of large businesses.
            </Title>
          </Col>
          <Col
            xs={20}
            sm={16}
            md={12}
            lg={10}
            xl={8}
            style={{ textAlign: "center", padding: "0px 12px" }}
          >
            <button className="btn-one">View API Docs</button>
            <button className="btn-two" style={{ marginTop: "20px", padding: '8px 52px' }}>
              Contact Us
            </button>
          </Col>
        </Row>
      </div>
      <div
        style={{
          textAlign: "center",
          paddingBottom: "30px",
          paddingTop: "10px",
        }}
      ></div>
    </div>
  );
}
