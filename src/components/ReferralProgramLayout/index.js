import Banner from "../Banner";
import FloatingButton from "../FloatingButton";
import MainGrid from "../MainGrid";
import QuesComp from "../QuesComp";
import SalesPromotion from "../SalesPromotion";
import SecondGrid from "../SecondGrid";
import ThirdGrid from "../ThirdGrid";

export default function ReferralProgramLayout() {
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
              <>
                Our first{" "}
                <span style={{ color: "#F9A802" }}>
                  no-limt referal marketing
                </span>
                software
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
            img={"/maingrid-img11.png"}
          />
          <br />
          <br />
          <SecondGrid
            gridHeading={
              <>
                <span style={{ color: "#F9A802" }}>Referral software</span> that
                drives conversation
              </>
            }
            gridImg1="/7.png"
            gridImg2="/8.png"
            gridImg3="/9.png"
            gridPara1={<>Create touch-points</>}
            gridSubPara1="Thanks to a clear overview of customer’s rewards and benefits."
            gridPara2="Automate referral rewards"
            gridSubPara2="Thanks to easily redeemable, self-service rewards."
            gridPara3="Maximize revenue"
            gridSubPara3="By creating digital wallets and sending notifications about soon-expiring rewards."
          />
          <ThirdGrid
            title={
              <>
                Any <span style={{ color: "#F9A802" }}>referral method</span> is
                possible
              </>
            }
            subTitle={
              <>
                Create ambassadors of your affiliates, employees and
                influencers. Appeal to these groups with KPI-based or staggered
                rewards, and build a stronger base of dedicated users with our
                referral tracking software.
              </>
            }
            titleImg="/b1.png"
          />
          <ThirdGrid
            reverse
            title={
              <>
                Choose referral software with
                <span style={{ color: "#F9A802" }}>
                  {" "}
                  analytics and real-time insights
                </span>
              </>
            }
            subTitle={
              <>
                1. Track your referral performance through various metrics like
                leaderboards or campaign performance. <br />
                2. Track customer purchases, personal attributes, and their
                activity on your website related to referrals. <br />
                3. Test several referral scenarios in A/B experiments to find an
                optimal referral strategy.
              </>
            }
            titleImg="/b2.png"
          />
          <ThirdGrid
            title={
              <>
                Improve your
                <span style={{ color: "#F9A802" }}> referral success</span>
              </>
            }
            subTitle={
              <>
                Get your advocates to be more hands-on with their referrals. Set
                rewards that increase in value for each completed stage of the
                onboarding with their friends, or for each referral they make.
              </>
            }
            titleImg="/b3.png"
          />
        </div>
      </div>
      <div style={{ backgroundColor: "#2C1F53" }}>
        <QuesComp
          ques={
            <>
              Are you wasting time and money on <span style={{ color: "#F9A802" }}>Enterprise Analytics</span>
            </>
          }
          quesPara="It’s time to change "
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
