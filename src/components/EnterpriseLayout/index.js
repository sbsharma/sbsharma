import Banner from "../Banner";
import FloatingButton from "../FloatingButton";
import MainGrid from "../MainGrid";
import QuesComp from "../QuesComp";
import SalesPromotion from "../SalesPromotion";
import SecondGrid from "../SecondGrid";
import ThirdGrid from "../ThirdGrid";

export default function EnterpriseLayout() {
  return (
    <>
      <Banner />
      <FloatingButton />
      <div className="home-class">
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <MainGrid
            heading={<>Enterprise Promotions Management at Scale</>}
            para={
              <>
                Streamline onboarding with our security standards and <br />
                painless procurement process.
              </>
            }
            btnText={"Learn more"}
            img={"/maingrid-img14.png"}
          />
          <br />
          <br />
          <SecondGrid
            gridHeading={<>Why product managers choose us </>}
            gridImg1="/sg07.png"
            gridImg2="/sg08.png"
            gridImg3="/sg09.png"
            gridPara1={<>One-time integration</>}
            gridSubPara1="After integrating, your input is minimal. We handle the complex marketing requirements."
            gridPara2="Dedicated technical support"
            gridSubPara2="Developer Docs, SDKs and Technical Engineers to guide you along the way."
            gridPara3={<>Save development time</>}
            gridSubPara3="Save developer hours, building promotions from scratch. Focus on your core product."
          />
          <ThirdGrid
            title={<>Performance scalability</>}
            subTitle={
              <>
                Manage promotions at scale and handle spikes in traffic with
                ease. Enjoy high availability with 99.99% platform uptime. If
                that's not enough, get a custom SLA and a dedicated AWS cluster
                to ensure the performance your business needs.
              </>
            }
            titleImg="/tg07.png"
          />
          <ThirdGrid
            reverse
            title={
              <>
                <span style={{ color: "#F9A802" }}>Vertical scalability</span>
              </>
            }
            subTitle={
              <>
                Integrate your e-commerce and CRM tech stack with any
                programming language. Use our flexible API, developer-friendly
                building blocks and plugins to deliver even the most complex
                promotional use cases.
              </>
            }
            titleImg="/tg08.png"
          />
          <ThirdGrid
            title={<>Security First</>}
            subTitle={
              <>
                Bi-directional communication channels are encrypted. IP
                Whitelisting can be implemented to reject any traffic outside
                your chosen IP ranges.
              </>
            }
            titleImg="/tg09.png"
          />
        </div>
      </div>
      <div style={{ backgroundColor: "#2C1F53" }}>
        <QuesComp
          ques="Are you burning money & wasting time on digital promotions?"
          quesPara="It’s time to change"
          quesBtn="Get Started"
        />
      </div>
      <div className="sales-promotion-class">
        <SalesPromotion
          header={
            <div style={{ textAlign: "center" }}>
              One solution for every problem:
              <span style={{ color: "#F9A802" }}> MeriBachat</span>
            </div>
          }
        />
      </div>
    </>
  );
}
