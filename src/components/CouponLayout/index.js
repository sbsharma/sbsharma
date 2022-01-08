import Banner from "../Banner";
import FloatingButton from "../FloatingButton";
import MainGrid from "../MainGrid";
import QuesComp from "../QuesComp";
import SalesPromotion from "../SalesPromotion";
import SecondGrid from "../SecondGrid";
import ThirdGrid from "../ThirdGrid";

export default function CouponLayout() {
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
                <span style={{ color: "#F9A802" }}>Unlimited Alteration</span>{" "}
                for <br />
                your coupons with our
                <br /> coupon software
              </>
            }
            para={
              <>
                Unlimited coupon customization. Build whatever you need,
                <br /> whenever you need it
              </>
            }
            btnText={"Learn more"}
            img={"/maingrid-img02.png"}
          />
          <br />
          <br />
          <SecondGrid
            gridHeading={
              <>
                Make coupons more{" "}
                <span style={{ color: "#F9A802" }}>special</span> with us
              </>
            }
            gridImg1="/i.png"
            gridImg2="/ii.png"
            gridImg3="/iii.png"
            gridPara1={
              <>
                Personalized &<br /> targeted
              </>
            }
            gridSubPara1="Generate customer-, product-, order-specific coupons to attract and retain customers."
            gridPara2="Secured & trackable"
            gridSubPara2="Protect coupon ROI and budget with fraud-prevention mechanisms and in-depth tracking."
            gridPara3="Ultimate discounting experience"
            gridSubPara3="Link codes to user profiles and create an omnichannel journey with trigger-based distribution and 20+ integrations."
          />
          <ThirdGrid
            title={
              <>
                Personalize coupon with our{" "}
                <span style={{ color: "#F9A802" }}>
                  advanced marketing software
                </span>
              </>
            }
            subTitle={
              <>
                The possibilities are infinite. Create millions of customized
                coupons by setting individual expiry dates and linking client
                IDs to single coupons.
              </>
            }
            titleImg="/aa.png"
          />
          <ThirdGrid
            reverse
            title={
              <>
                <span style={{ color: "#F9A802" }}>Track & Analyse</span> your
                coupons campaign
              </>
            }
            subTitle={
              <>
                The possibilities are infinite. Create millions of customized
                coupons by setting individual expiry dates and linking client
                IDs to single coupons.
              </>
            }
            titleImg="/bb.png"
          />
          <ThirdGrid
            title={
              <>
                Distribute via 
                <span style={{ color: "#F9A802" }}> multiple channels</span>
              </>
            }
            subTitle={
              <>
                The possibilities are infinite. Create millions of customized
                coupons by setting individual expiry dates and linking client
                IDs to single coupons.
              </>
            }
            titleImg="/cc.png"
          />
          </div></div>
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
