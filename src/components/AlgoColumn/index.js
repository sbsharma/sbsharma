import { Col } from "antd";
import { Typography } from "antd";

const { Title } = Typography;


export default function AlgoColumn({reverse= false, stepNumber, gridOrder}){
  
  return(
    <>
    <Col xs={{ span: 12 }} order={reverse ? 0 : 1}>
          <div
            style={{ margin: reverse ? "100px 0 0 0px" : "100px 0px 0 70px" }}
          >
            <Title level={3} style={{ color: "#F9A802" }}>
              Step {stepNumber} :
            </Title>
            <Title level={2} style={{ color: "#fff" }}>
              Personization of offers at scale
            </Title>
            <Title level={4} style={{ color: "#fff" }}>
              Promotion strategy campaigns need not always be just the marketing
              campaigns you run. It can be a campaign to identify the aspects of
              change and development
            </Title>
          </div>
        </Col>
        <Col xs={{ span: 12 }}>
          <img
            src="/step2.png"
            alt="algo"
            height="495px"
            width="600px"
            style={{ objectFit: "contain" }}
          />
        </Col>
    </>
  )
}