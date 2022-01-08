import { Col, Row, Typography } from "antd";
import SalesBox from "../SalesBox";
// import ICON from "../../icons";

const { Title } = Typography;

export default function SalesPromotion({header}) {
  return (
    <div className="sales-promotion">
      <Title style={{ color: "#fff" }} className="sales-promotion-heading">{header}
      </Title>
      <br/>
      <Row justify="center">
        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
          <SalesBox salesBoxImg={<img src="/img01.png" alt="sales-promotion" style={{height: '65px', width: '65px', objectFit: 'contain'}} className="inner-box-img"/>} salesBoxText={"Personalised Coupons"} />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
        <SalesBox salesBoxImg={<img src="/img02.png" alt="sales-promotion" style={{height: '90px', width: '90px', objectFit: 'contain'}} className="inner-box-img"/>} salesBoxText={"Product Bundling"} />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
        <SalesBox salesBoxImg={<img src="/img03.png" alt="sales-promotion" style={{height: '60px', width: '60px', objectFit: 'contain'}} className="inner-box-img"/>} salesBoxText={"Analytics"} />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
        <SalesBox salesBoxImg={<img src="/img04.png" alt="sales-promotion" style={{height: '52px', width: '52px', objectFit: 'contain'}} className="inner-box-img"/>} salesBoxText={"Digital Wallet"} />
        </Col>
      </Row>
      <br/>
      <br/>
      <Row justify="center">
        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
          <SalesBox salesBoxImg={<img src="/img05.png" alt="sales-promotion" style={{height: '65px', width: '65px', objectFit: 'contain'}} className="inner-box-img"/>} salesBoxText={"Refferal Program"} />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
        <SalesBox salesBoxImg={<img src="/img06.png" alt="sales-promotion" style={{height: '62px', width: '62px', objectFit: 'contain'}} className="inner-box-img"/>} salesBoxText={"Loyalty Program"} />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
        <SalesBox salesBoxImg={<img src="/img01.png" alt="sales-promotion" style={{height: '60px', width: '60px', objectFit: 'contain'}} className="inner-box-img"/>} salesBoxText={"Geofencing"} />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
        <SalesBox salesBoxImg={<img src="/img07.png" alt="sales-promotion" style={{height: '52px', width: '52px', objectFit: 'contain'}} className="inner-box-img"/>} salesBoxText={"In-cart promotion"} />
        </Col>
      </Row>
    </div>
  );
}
