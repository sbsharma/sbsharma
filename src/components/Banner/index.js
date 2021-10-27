import { Typography } from "antd";
const { Title } = Typography;

export default function Banner() {
  return (
    <div style={{backgroundColor: '#261B48', padding: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', position:'fixed', width: '100%', zIndex:"5"}}>
      <Title
        level={5}
        style={{
          color: "#fff",
          fontWeight: "normal",
          textAlign: "center",
        }}
      >
        How to design referral programs that work? Get our new{" "}
        <span style={{ fontWeight: "bold" }}>Complete Referral Guide</span> <span style={{fontWeight:'400'}}>(no
        sign-up required).</span>
      </Title>
      <button className="banner-btn">Download</button>
    </div>
  );
}
