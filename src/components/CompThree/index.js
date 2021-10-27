import { Checkbox, Col, Row, Typography } from "antd";
import CompThreeCard from "../CompThreeCard";

const Title = Typography;

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

export default function CompThree() {
  return (
    <div>
      <Title className="comp-three-heading">All Case Studies</Title>
      <div style={{ display: "flex", color: "#fff" }}>
        <p>Filter by</p>
        <div style={{ position: "absolute", right: "100px" }}>
          <Checkbox onChange={onChange} style={{ color: "#fff" }}>
            All
          </Checkbox>
          <Checkbox onChange={onChange} style={{ color: "#fff" }}>
            BtoC
          </Checkbox>
          <Checkbox onChange={onChange} style={{ color: "#fff" }}>
            BtoB
          </Checkbox>
        </div>
      </div>
      <div style={{ margin: "40px 0" }}>
        <Row justify="space-around" align="middle">
          <Col xs={2} sm={4} md={6} lg={14} xl={8}>
            <CompThreeCard cardImg="/cs01.png" />
          </Col>
          <Col xs={2} sm={4} md={6} lg={14} xl={8}>
            <CompThreeCard cardImg="/cs02.png" />
          </Col>
          <Col xs={2} sm={4} md={6} lg={14} xl={8}>
            <CompThreeCard cardImg="/cs03.png" />
          </Col>
        </Row>
      </div>
      <div style={{ margin: "80px 0" }}>
        <Row justify="space-around" align="middle">
          <Col xs={2} sm={4} md={6} lg={14} xl={8}>
            <CompThreeCard cardImg="/cs04.png" />
          </Col>
          <Col xs={2} sm={4} md={6} lg={14} xl={8}>
            <CompThreeCard cardImg="/cs05.png" />
          </Col>
          <Col xs={2} sm={4} md={6} lg={14} xl={8}>
            <CompThreeCard cardImg="/cs06.png" />
          </Col>
        </Row>
      </div>
      <div style={{ margin: "40px 0 " }}>
        <Row justify="space-around" align="middle">
          <Col xs={2} sm={4} md={6} lg={14} xl={8}>
            <CompThreeCard cardImg="/cs07.png" />
          </Col>
          <Col xs={2} sm={4} md={6} lg={14} xl={8}>
            <CompThreeCard cardImg="/cs08.png" />
          </Col>
          <Col xs={2} sm={4} md={6} lg={14} xl={8}>
            <CompThreeCard cardImg="/cs09.png" />
          </Col>
        </Row>
      </div>
    </div>
  );
}
