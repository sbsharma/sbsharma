import Banner from "../Banner";
import FloatingButton from "../FloatingButton";
import MainGrid from "../MainGrid";
import QuesComp from "../QuesComp";
import SalesPromotion from "../SalesPromotion";
import SecondGrid from "../SecondGrid";
import ThirdGrid from "../ThirdGrid";

export default function ProductBundling() {
  return (
    <>
      <Banner />
      <FloatingButton />
      <div style={{ padding: "120px 100px 20px 100px", backgroundColor: "#2C1F53" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <MainGrid
            heading={
              <>Maximze your profit<br/> with
                <span style={{ color: "#F9A802" }}> product bundling</span>
              </>
            }
            para={
              <>
                Give your customers the best possible reasons to continue<br/> adding items to their baskets as they shop.
              </>
            }
            btnText={"Learn more"}
            img={"/maingrid-img09.png"}
          />
          <br />
          <br />
          <SecondGrid
            gridHeading={
              <>
                <span style={{ color: "#F9A802" }}>Conversation that drives</span> with our referal software
              </>
            }
            gridImg1="/qq.png"
            gridImg2="/rr.png"
            gridImg3="/tt.png"
            gridPara1={
              <>
                Custom product bundles
              </>
            }
            gridSubPara1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum, convallis est at porttitor facilisi maecenas sit."
            gridPara2="No more hard-coding"
            gridSubPara2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum, convallis est at porttitor facilisi maecenas sit."
            gridPara3="Increase average order value"
            gridSubPara3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum, convallis est at porttitor facilisi maecenas sit."
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
      <div style={{ padding: "20px 100px", backgroundColor: "#2C1F53" }}>
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
