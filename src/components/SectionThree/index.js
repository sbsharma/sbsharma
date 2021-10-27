import { Col, Row, Typography } from "antd";
const { Title } = Typography;

export default function SectionThree(){
  return(
    <div className="section-three"> 
      <Title className="section-three-heading">Where can you use Prepaid cards</Title>
      <div className="section-three-row">
      <Row justify="space-around" align="middle">
        <Col xs={20} sm={16} md={12} lg={10} xl={8} style={{textAlign:'center', padding: '0px 12px'}}>
          <img src="/3a.png" alt="" className="section-three-img" />
          <Title style={{color: '#fff'}}>Everyday payments</Title>
          <Title level={4} style={{color: '#fff'}}>Integrate banking into your applications with our bundle of flexible APIs used by thousands of large businesses.</Title>
        </Col>
        <Col xs={20} sm={16} md={12} lg={10} xl={8} style={{textAlign:'center', padding: '0px 12px'}}>
          <img src="/3b.png" alt="" className="section-three-img" />
          <Title style={{color: '#fff'}}>Employee benifts</Title>
          <Title level={4} style={{color: '#fff'}}>Integrate banking into your applications with our bundle of flexible APIs used by thousands of large businesses.</Title>
        </Col>
        <Col xs={20} sm={16} md={12} lg={10} xl={8} style={{textAlign:'center', padding: '0px 12px'}}>
          <img src="/3c.png" alt="" className="section-three-img" />
          <Title style={{color: '#fff'}}>Food cards</Title>
          <Title level={4} style={{color: '#fff'}}>Integrate banking into your applications with our bundle of flexible APIs used by thousands of large businesses.</Title>
        </Col>
      </Row>
      <br/>
      <br/>
      <br/>
      <Row justify="space-around" align="middle">
        <Col xs={20} sm={16} md={12} lg={10} xl={8} style={{textAlign:'center', padding: '0px 12px'}}>
          <img src="/3d.png" alt="" className="section-three-img" />
          <Title style={{color: '#fff'}}>Shopping</Title>
          <Title level={4} style={{color: '#fff'}}>Integrate banking into your applications with our bundle of flexible APIs used by thousands of large businesses.</Title>
        </Col>
        <Col xs={20} sm={16} md={12} lg={10} xl={8} style={{textAlign:'center', padding: '0px 12px'}}>
          <img src="/3e.png" alt="" className="section-three-img" />
          <Title style={{color: '#fff'}}>Fuel bills</Title>
          <Title level={4} style={{color: '#fff'}}>Integrate banking into your applications with our bundle of flexible APIs used by thousands of large businesses.</Title>
        </Col>
        <Col xs={20} sm={16} md={12} lg={10} xl={8} style={{textAlign:'center', padding: '0px 12px'}}>
          <img src="/3f.png" alt="" className="section-three-img" />
          <Title style={{color: '#fff'}}>Gift cards</Title>
          <Title level={4} style={{color: '#fff'}}>Integrate banking into your applications with our bundle of flexible APIs used by thousands of large businesses.</Title>
        </Col>
      </Row>
      </div>
      <div style={{textAlign: 'center', paddingBottom: '30px', paddingTop: '10px'}}>
      <button className="btn-one">Get Started</button>
      <button className="btn-two">Contact Us</button>
      </div>
    </div>
  )
}