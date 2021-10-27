import { Col, Row, Typography } from "antd";

const { Title } = Typography;

export default function ThirdGrid({ reverse, title, subTitle, titleImg }) {
  return (
    <div className="third-grid">
      <Row justify="space-around" align="middle">
        <Col lg={12} order={reverse ? 1 : 0}>
          <div
            className="titles"
            style={{
              marginLeft: reverse ? "50px" : "",
              marginRight: reverse ? "" : "50px",
            }}
          >
            <Title className="third-grid-title">{title}</Title>
            <Title level={3} className="third-grid-sub-title">
              {subTitle}
            </Title>
          </div>
        </Col>
        <Col lg={12}>
          <img src={titleImg} alt="" className="third-grid-img" />
        </Col>
      </Row>
    </div>
  );
}
