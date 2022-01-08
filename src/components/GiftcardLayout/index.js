import Banner from "../Banner";
import FloatingButton from "../FloatingButton";
import MainGrid from "../MainGrid";
import QuesComp from "../QuesComp";
import SalesPromotion from "../SalesPromotion";
import SecondGrid from "../SecondGrid";
import ThirdGrid from "../ThirdGrid";

export default function GiftcardLayout() {
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
                <span style={{ color: "#F9A802" }}>Gift Card software</span> for
                all
                <br /> your needs
              </>
            }
            para={
              <>
                Generate and manage digital gift cards on scale with top-
                <br />
                tier gift cards software.
              </>
            }
            btnText={"Learn more"}
            img={"/maingrid-img03.png"}
          />
        </div>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <br />
          <br />
          <SecondGrid
            gridHeading={
              <>
                <span style={{ color: "#F9A802" }}>Gift Card</span> solution for
                you
              </>
            }
            gridImg1="/a1.png"
            gridImg2="/ii.png"
            gridImg3="/a2.png"
            gridPara1={<>Distribute via multiple channel</>}
            gridSubPara1="Use the powerful API and marketer-friendly Dashboard to connect gift cards with any marketing channel."
            gridPara2="Secured & trackable"
            gridSubPara2="Protect coupon ROI and budget with fraud-prevention mechanisms and in-depth tracking."
            gridPara3="Growth in customer retention"
            gridSubPara3="Personalized gift certificates have the power to keep customers coming back and invoke repeat purchases."
          />
          <ThirdGrid
            title={
              <>
                <span style={{ color: "#F9A802" }}>Gift card Program</span> at
                scale
              </>
            }
            subTitle={
              <>
                Build a base of brand advocates by launching highly personalized
                referral programs. Choose any referral method and rewards that
                are relevant to your unique business objectives.
              </>
            }
            titleImg="/dd.png"
          />
          <ThirdGrid
            reverse
            title={
              <>
                Redem Coupon
                <span style={{ color: "#F9A802" }}> online/offline </span>
              </>
            }
            subTitle={
              <>
                Easily create millions of randomly generated coupons. Set
                individual expiry dates and link client IDs to single coupons.
                The possibilities are infinite.
              </>
            }
            titleImg="/ee.png"
          />
          <ThirdGrid
            title={
              <>
                <span style={{ color: "#F9A802" }}>Track & Analyse</span> your
                gift card campaign
              </>
            }
            subTitle={
              <>
                Easily create millions of randomly generated coupons. Set
                individual expiry dates and link client IDs to single coupons.
                The possibilities are infinite.
              </>
            }
            titleImg="/ff.png"
          />
        </div>
      </div>
      <div style={{ backgroundColor: "#2C1F53" }}>
        <QuesComp
          ques={
            <>
              Are you wasting time and money on{" "}
              <span style={{ color: "#F9A802" }}>Gift card solutions</span>
            </>
          }
          quesPara="Don't worry! We are here "
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
