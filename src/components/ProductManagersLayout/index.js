import Banner from "../Banner";
import FloatingButton from "../FloatingButton";
import MainGrid from "../MainGrid";
import QuesComp from "../QuesComp";
import SalesPromotion from "../SalesPromotion";
import SecondGrid from "../SecondGrid";
import ThirdGrid from "../ThirdGrid";

export default function ProductManagersLayout() {
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
            heading={<>Promotion Engine Integrated in Days</>}
            para={
              <>
                The only promotion solution you’ll ever need. Every use <br />
                case you can imagine, in one user-friendly interface.
              </>
            }
            btnText={"Learn more"}
            img={"/maingrid-img14.png"}
          />
          <br />
          <br />
          <SecondGrid
            gridHeading={<>Why product managers choose us </>}
            gridImg1="/sg04.png"
            gridImg2="/sg05.png"
            gridImg3="/sg06.png"
            gridPara1={<>No overhead maintenance</>}
            gridSubPara1="Let marketers create and update campaigns, without developers."
            gridPara2="Easy to adopt"
            gridSubPara2="Teams can use  quickly with a range of user roles and permissions to protect against mistakes."
            gridPara3={
              <>
                Quick
                <br />
                time to market
              </>
            }
            gridSubPara3="Integrate in days,
            launch campaigns in minutes."
          />
          <ThirdGrid
            title={
              <>
                <span style={{ color: "#F9A802" }}>Flexibility of API</span> and
                data model
              </>
            }
            subTitle={
              <>
                Voucherify API is designed to support iterative development.
                With fine-grained REST endpoints, you can roll-out promotional
                campaigns according to your business priorities, without large
                up-front integration.
              </>
            }
            titleImg="/tg04.png"
          />
          <ThirdGrid
            reverse
            title={
              <>
                <span style={{ color: "#F9A802" }}>Boost brand loyalty</span>{" "}
                and customer lifetime value with promotion diversity
              </>
            }
            subTitle={
              <>
                Limiting yourself to siloed promotion solutions almost always
                leads to failure. Offer your customers a range of rewards to
                incentivize onboarding, referral and loyalty programs.
              </>
            }
            titleImg="/tg05.png"
          />
          <ThirdGrid
            title={
              <>
                <span style={{ color: "#F9A802" }}>Start small</span> and scale
                fast
              </>
            }
            subTitle={
              <>
                Voucherify has a powerful infrastructure that grows with you,
                both vertically and horizontally. Enterprise subscription plan
                covers the following features to help you scale:
              </>
            }
            titleImg="/tg06.png"
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
