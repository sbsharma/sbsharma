import { Card, Typography } from "antd";
const { Meta } = Card;
const Title = Typography;

export default function CompThreeCard({cardImg}) {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 400, borderRadius:'20px' }}
        cover={
          <img
            alt="example"
            src={cardImg}
            style={{ width: "400px", height: "257px", objectFit: "cover", borderRadius:'20px 20px 0 0'  }}
          />
        }
      >
        <Title className="comp-three-card-heading">
          Save your time & make your sales promotions successful with{" "}
          <span style={{ color: "#F9A802" }}>MeriBachat</span>
        </Title>
        <br />
        <Meta title="Industry" />
        <br />
        <Meta title="Location" />
        <br />
        <Meta title="Solution" />
      </Card>
    </div>
  );
}
