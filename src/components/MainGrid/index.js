import { Button, Col, Row } from "antd";
import { Typography } from "antd";

const { Title } = Typography;

export default function MainGrid({heading, para, btnText, img}) {
  return (
    <div>
      <Row justify="space-around" align="middle">
        <Col xs={2} sm={4} md={6} lg={14} xl={14}>
          <Title style={{color: '#fff', fontSize: '45px'}}>{heading}</Title>
          <Title level={5} style={{color: '#fff'}}>{para}</Title>
          <button type="primary" className="maingrid-button">{btnText}</button>
        </Col>
        <Col xs={20} sm={16} md={12} lg={10} xl={10}>
          <img src={img} alt="cards" className="maingrid-img" />
        </Col>
      </Row>
    </div>
  );
}
