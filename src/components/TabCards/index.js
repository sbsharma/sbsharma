import { Card } from "antd";
import { Typography } from "antd";
const { Meta } = Card;


const { Title } = Typography;
export default function TabCards(){
  return(
    <>
      <div style={{display: 'flex', marginBottom: '20px'}}>
            <Card
              hoverable
              style={{
                width: 240,
                padding: "150px 140px",
                borderRadius: "11px",
                margin: '10px 40px 20px 0'
              }}
            >
              {/* <Title level={5}>Name</Title> */}
              <Meta title="Name" style={{ textAlign: "center" }} />
            </Card><Card
              hoverable
              style={{
                width: 240,
                padding: "150px 140px",
                borderRadius: "11px",
                margin: '10px 40px 20px 0'
              }}
            >
              <Meta title="Name" style={{ textAlign: "center" }} />
            </Card><Card
              hoverable
              style={{
                width: 240,
                padding: "150px 140px",
                borderRadius: "11px",
                margin: '10px 40px 20px 0'
              }}
            >
              <Meta title="Name" style={{ textAlign: "center" }} />
            </Card></div>
            <div style={{display: 'flex'}}>
            <Card
              hoverable
              style={{
                width: 240,
                padding: "150px 140px",
                borderRadius: "11px",
                margin: '10px 40px 20px 0'
              }}
            >
              <Meta title="Name" style={{ textAlign: "center" }} />
            </Card><Card
              hoverable
              style={{
                width: 240,
                padding: "150px 140px",
                borderRadius: "11px",
                margin: '10px 40px 20px 0'
              }}
            >
              <Meta title="Name" style={{ textAlign: "center" }} />
            </Card></div>
    </>
  )
} 