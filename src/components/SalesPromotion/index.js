import { Col, Row, Typography } from "antd";
import SalesBox from "../SalesBox";
// import ICON from "../../icons";

const { Title } = Typography;

export default function SalesPromotion({header}) {
  return (
    <div className="sales-promotion">
      <Title style={{ color: "#fff" }}>{header}
      </Title>
      <br/>
      <Row justify="center">
        <Col xs={2} sm={4} md={6} lg={6} xl={6}>
          <SalesBox salesBoxImg={<img src="/img01.png" alt="sales-promotion" style={{height: '65px', width: '65px', objectFit: 'contain'}}/>} salesBoxText={"Personalised Coupons"} />
        </Col>
        <Col xs={2} sm={4} md={6} lg={6} xl={6}>
        <SalesBox salesBoxImg={<img src="/img02.png" alt="sales-promotion" style={{height: '90px', width: '90px', objectFit: 'contain'}}/>} salesBoxText={"Product Bundling"} />
        </Col>
        <Col xs={2} sm={4} md={6} lg={6} xl={6}>
        <SalesBox salesBoxImg={<img src="/img03.png" alt="sales-promotion" style={{height: '60px', width: '60px', objectFit: 'contain'}}/>} salesBoxText={"Analytics"} />
        </Col>
        <Col xs={2} sm={4} md={6} lg={6} xl={6}>
        <SalesBox salesBoxImg={<img src="/img04.png" alt="sales-promotion" style={{height: '52px', width: '52px', objectFit: 'contain'}}/>} salesBoxText={"Digital Wallet"} />
        </Col>
      </Row>
      <br/>
      <br/>
      <Row justify="center">
        <Col xs={2} sm={4} md={6} lg={6} xl={6}>
          <SalesBox salesBoxImg={<img src="/img05.png" alt="sales-promotion" style={{height: '65px', width: '65px', objectFit: 'contain'}}/>} salesBoxText={"Refferal Program"} />
        </Col>
        <Col xs={2} sm={4} md={6} lg={6} xl={6}>
        <SalesBox salesBoxImg={<img src="/img06.png" alt="sales-promotion" style={{height: '62px', width: '62px', objectFit: 'contain'}}/>} salesBoxText={"Loyalty Program"} />
        </Col>
        <Col xs={2} sm={4} md={6} lg={6} xl={6}>
        <SalesBox salesBoxImg={<img src="/img01.png" alt="sales-promotion" style={{height: '60px', width: '60px', objectFit: 'contain'}}/>} salesBoxText={"Geofencing"} />
        </Col>
        <Col xs={2} sm={4} md={6} lg={6} xl={6}>
        <SalesBox salesBoxImg={<img src="/img07.png" alt="sales-promotion" style={{height: '52px', width: '52px', objectFit: 'contain'}}/>} salesBoxText={"In-cart promotion"} />
        </Col>
      </Row>
    </div>
  );
}
