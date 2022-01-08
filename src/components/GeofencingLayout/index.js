import Banner from "../Banner";
import FloatingButton from "../FloatingButton";
import MainGrid from "../MainGrid";
import QuesComp from "../QuesComp";
import SalesPromotion from "../SalesPromotion";
import SecondGrid from "../SecondGrid";
import ThirdGrid from "../ThirdGrid";

export default function GeofencingLayout() {
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
                <span style={{ color: "#F9A802" }}>
                  Personalized geofence <br />
                  marketing
                </span>{" "}
                campaigns
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
            img={"/maingrid-img07.png"}
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
                <span style={{ color: "#F9A802" }}>Promotion</span> all over map
              </>
            }
            gridImg1="/a3.png"
            gridImg2="/ii.png"
            gridImg3="/iii.png"
            gridPara1={<>Developer-friendly geofencing</>}
            gridSubPara1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum, convallis est at porttitor facilisi maecenas sit."
            gridPara2="Unlimited customizations "
            gridSubPara2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum, convallis est at porttitor facilisi maecenas sit."
            gridPara3="Exceptional customer experiences"
            gridSubPara3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum, convallis est at porttitor facilisi maecenas sit."
          />
          <ThirdGrid
            title={
              <>
                Our powerful
                <span style={{ color: "#F9A802" }}> geofencing</span> software
              </>
            }
            subTitle={
              <>
                Easily create millions of randomly generated coupons. Set
                individual expiry dates and link client IDs to single coupons.
                The possibilities are infinite.
              </>
            }
            titleImg="/gg.png"
          />
          <ThirdGrid
            reverse
            title={
              <>
                Get creative with
                <span style={{ color: "#F9A802" }}> geofences</span>
              </>
            }
            subTitle={
              <>
                Easily create millions of randomly generated coupons. Set
                individual expiry dates and link client IDs to single coupons.
                The possibilities are infinite.
              </>
            }
            titleImg="/hh.png"
          />
          <ThirdGrid
            title={
              <>
                Deliver promotion via
                <span style={{ color: "#F9A802" }}> multiple channels </span>
              </>
            }
            subTitle={
              <>
                Easily create millions of randomly generated coupons. Set
                individual expiry dates and link client IDs to single coupons.
                The possibilities are infinite.
              </>
            }
            titleImg="/jj.png"
          />
        </div>
      </div>
      <div style={{ backgroundColor: "#2C1F53" }}>
        <QuesComp
          ques={
            <>
              Are you interested in new
              <br />
              <span style={{ color: "#F9A802" }}> Geo- Fencing</span> Solutions
            </>
          }
          quesPara="We are here to help"
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
