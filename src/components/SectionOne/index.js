import { Button, Col, Row } from "antd";
import { Typography } from "antd";

const { Title } = Typography;

export default function CompOne() {
  return (
    <div>
      <Row justify="space-around" align="middle">
        <Col xs={2} sm={4} md={6} lg={14} xl={14}>
          <Title style={{color: '#fff', fontSize: '64px'}}>Serving customers all over the <span style={{color: '#F3A400'}}>INDIA</span></Title>
          
          <Title level={5} style={{color: '#fff', fontSize: '20px', fontWeight: 'normal'}}>Read case studies or visit projects that our <br/>customers have built with Meribachat.</Title>
          <button type="primary" className="section-button" style={{marginTop: '20px'}}>Get Started</button>
        </Col>
        <Col xs={20} sm={16} md={12} lg={10} xl={10}>
          <img src="/rupay_card.png" alt="cards" className="maingrid-img" />
        </Col>
      </Row>
    </div>
  );
}
