import { Col, Row, Typography } from "antd";
const { Title } = Typography;

export default function SectionTwo() {
  return (
    <div style={{background: '#fff', padding: '50px 0'}}>
      <Row justify="space-around" align="middle">
        <Col xs={20} sm={16} md={12} lg={10} xl={8} style={{textAlign:'center'}}>
          <div>
            <img src="/st01.png" alt="" style={{width: '300px', height: '300px', objectFit: 'contain'}} />
            <Title level={2}>Interportable<br/>wallet</Title>
          </div>
        </Col>
        <Col xs={20} sm={16} md={12} lg={10} xl={8} style={{textAlign:'center'}}>
          <div>
            <img src="/st02.png" alt="" style={{width: '300px', height: '300px', objectFit: 'contain'}} />
            <Title level={2}>Completly<br/>Secure</Title>
          </div>
        </Col>
        <Col xs={20} sm={16} md={12} lg={10} xl={8} style={{textAlign:'center'}}>
          <div>
            <img src="/st03.png" alt="" style={{width: '300px', height: '300px', objectFit: 'contain'}} />
            <Title level={2}>Mobile<br/>Compatibility</Title>
          </div>
        </Col>
      </Row>
    </div>
  );
}
