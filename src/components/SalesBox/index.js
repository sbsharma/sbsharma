import { Col, Row, Typography } from "antd";
// import ICON from "../../icons";

const { Title } = Typography;

export default function SalesBox({ salesBoxText, salesBoxImg }) {
  return (
    <div className="sales-box">
      <div className="sales-inner-box">{salesBoxImg}</div>
      <Title level={4} style={{color: '#fff'}}>{salesBoxText}</Title>
    </div>
  );
}


