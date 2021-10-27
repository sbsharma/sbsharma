import { Col, Row, Typography } from "antd";
const { Title } = Typography;

export default function SectionFour() {
  return (
    <div style={{background: '#F5F3FF', padding: '50px 0'}}>
      <Row justify="space-around" align="middle">
        <Col xs={20} sm={16} md={12} lg={10} xl={8} style={{textAlign:'center'}}>
          <div style={{padding: '20px 100px'}}>
            <img src="/st04.png" alt="" style={{width: '300px', height: '300px', objectFit: 'contain'}} />
            <div style={{height: '100px'}}>
            <Title level={4}>Safe</Title>
            <Title level={5}>We ensure you get a good night’s sleep with your money staying with large and highly stable banks in India.</Title>
          </div>
          </div>
        </Col>
        <Col xs={20} sm={16} md={12} lg={10} xl={8} style={{textAlign:'center'}}>
          <div style={{padding: '20px 100px'}}>
            <img src="/st05.png" alt="" style={{width: '300px', height: '300px', objectFit: 'contain'}} />
            <div style={{height: '100px'}}>
            <Title level={4}>Secure</Title>
            <Title level={5}>Enjoy secure access to your account with 2-factor authentication and TLS/SSL encryption of your data.</Title>
          </div>
          </div>
        </Col>
        <Col xs={20} sm={16} md={12} lg={10} xl={8} style={{textAlign:'center'}}>
          <div style={{padding: '20px 100px'}}>
            <img src="/st04.png" alt="" style={{width: '300px', height: '300px', objectFit: 'contain'}} />
            <div style={{height: '100px'}}>
            <Title level={4}>Easy</Title>
            <Title level={5}>An Easy way to spen money in this new digital era</Title>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
