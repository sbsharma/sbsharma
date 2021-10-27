import { Col, Row, Typography } from "antd";
const Title = Typography;

export default function CompTwo({ compTwoImg, text, subText01, subText02, subText03 }) {
  return (
    <div className="comp-two">
      <Row justify="space-around" align="middle">
        <Col xs={2} sm={4} md={6} lg={14} xl={12}>
          <img src={compTwoImg} alt="" className="comp-two-img" />
        </Col>
        <Col xs={2} sm={4} md={6} lg={14} xl={12}>
          <div className="text-box">
          <Title className="comp-two-text">{text}</Title>
          <br/>
          <Title className="comp-two-sub-text">{subText01}</Title>
          <Title className="comp-two-sub-text">{subText02}</Title>
          <Title className="comp-two-sub-text">{subText03}</Title>
          </div>
        </Col>
      </Row>
    </div>
  );
}
