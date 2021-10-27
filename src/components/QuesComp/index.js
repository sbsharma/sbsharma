import { Typography } from "antd";
const { Title } = Typography;

export default function QuesComp({ ques, quesPara, quesBtn }) {
  return (
    <div className="ques-comp"> 
      <Title className="ques-heading">{ques}</Title>
      <Title level={3} className="ques-para">
        {quesPara}
      </Title>
      <button className="ques-btn">{quesBtn}</button>
      <div style={{margin: '40px'}}></div>
    </div>
  );
}
