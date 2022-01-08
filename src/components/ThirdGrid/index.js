import { Col, Row, Typography } from "antd";

const { Title } = Typography;

export default function ThirdGrid({ reverse, title, subTitle, titleImg }) {
  return (
    <div className="third-grid">
      <Row
        justify="space-around"
        align="middle"
        className="thirdgrid-section-row"
      >
        <Col lg={12} order={reverse ? 1 : 0}>
          <div
            className={`titles ${reverse ? "titles-reverse" : "titles-not-reverse"}`}
            // style={{
            //   marginLeft: reverse ? "50px" : "",
            //   marginRight: reverse ? "" : "50px",
            // }}
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
