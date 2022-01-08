import { Col, Row, Typography } from "antd";
import ICON from "../../icons";
const { Title } = Typography;

export default function SecondGrid({
  gridHeading,
  gridImg1,
  gridImg2,
  gridImg3,
  gridPara1,
  gridSubPara1,
  gridPara2,
  gridSubPara2,
  gridPara3,
  gridSubPara3
}) {
  return (
    <>
      <div className="second-grid">
        <Title style={{ color: "#fff", textAlign: "center" }} className="grid-heading">
          {gridHeading}
        </Title>
      </div>
      <Row>
        <Col sm={24} xl={8}>
          <div style={{ textAlign: "center", objectFit: "contain" }}>
            <img
              src={gridImg1}
              alt=""
              className="second-grid-img"
            />
            <div className="second-grid-text">
              <Title level={2} className="grid-para">
                {gridPara1}
              </Title>
              <Title level={4} style={{ color: "#D9D0D0" }} className="grid-sub-para">
                {gridSubPara1}
              </Title>
            </div>
          </div>
        </Col>
        <Col xl={8}>
          <div style={{ textAlign: "center", objectFit: "contain" }}>
            <img
              src={gridImg2}
              alt=""
              className="second-grid-img"
            />
            <div className="second-grid-text">
              <Title level={2} className="grid-para">
                {gridPara2}
              </Title>
              <Title level={4} style={{ color: "#D9D0D0" }} className="grid-sub-para">
                {gridSubPara2}
              </Title>
            </div>
          </div>
        </Col>
        <Col xl={8}>
          <div style={{ textAlign: "center", objectFit: "contain" }}>
            <img
              src={gridImg3}
              alt=""
              className="second-grid-img"
            />
            <div className="second-grid-text">
              <Title level={2} className="grid-para">
                {gridPara3}
              </Title>
              <Title level={4} style={{ color: "#D9D0D0" }} className="grid-sub-para">
                {gridSubPara3}
              </Title>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
