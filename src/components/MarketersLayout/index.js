import Banner from "../Banner";
import FloatingButton from "../FloatingButton";
import MainGrid from "../MainGrid";
import QuesComp from "../QuesComp";
import SalesPromotion from "../SalesPromotion";
import SecondGrid from "../SecondGrid";
import ThirdGrid from "../ThirdGrid";

export default function MarketersLayout() {
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
            heading={
              <>
                One Software Made Personalization Of Campaign
                <br /> Easy.
              </>
            }
            para={
              <>
                Flexible sales promotion software for every step of your <br />
                customer's journey..
              </>
            }
            btnText={"Learn more"}
            img={"/maingrid-img13.png"}
          />
          <br />
          <br />
          <SecondGrid
            gridHeading={<>Why marketers choose us</>}
            gridImg1="/sg01.png"
            gridImg2="/ii.png"
            gridImg3="/sg03.png"
            gridPara1={<>Developer free</>}
            gridSubPara1="Generate customer-, product-, order-specific coupons to attract and retain customers."
            gridPara2="Secured & trackable"
            gridSubPara2="Protect coupon ROI and budget with fraud-prevention mechanisms and in-depth tracking."
            gridPara3="Promotions
            that engage"
            gridSubPara3="Link codes to user profiles and create an omnichannel journey with trigger-based distribution and 20+ integrations."
          />
          <ThirdGrid
            title={
              <>
                Build and personalize campaigns{" "}
                <span style={{ color: "#F9A802" }}>on your own</span>
              </>
            }
            subTitle={
              <>
                Personalize campaigns based on various factors to increase
                performance, save budget with fine-grained targeting and turn
                your customers into brand ambassadors.
              </>
            }
            titleImg="/tg01.png"
          />
          <ThirdGrid
            reverse
            title={
              <>
                <span style={{ color: "#F9A802" }}>Omnichannel promotion</span>{" "}
                solutions for your business
              </>
            }
            subTitle={
              <>
                Gain full control through one centralized system to provide a
                seamless customer experience.
              </>
            }
            titleImg="/tg02.png"
          />
          <ThirdGrid
            title={
              <>
                Optimize promotional
                <span style={{ color: "#F9A802" }}> ROI</span>
              </>
            }
            subTitle={
              <>
                Give each shopper the minimum incentive needed to purchase,
                while giving your business the optimum ROI without overspending
                your marketing budget.
              </>
            }
            titleImg="/tg03.png"
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
