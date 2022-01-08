import Banner from "../Banner";
import FloatingButton from "../FloatingButton";
import MainGrid from "../MainGrid";
import QuesComp from "../QuesComp";
import SalesPromotion from "../SalesPromotion";
import SecondGrid from "../SecondGrid";
import ThirdGrid from "../ThirdGrid";

export default function GiveawayLayout() {
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
                All-in-one
                <br />
                <span style={{ color: "#F9A802" }}> Sweepstakes Software</span>
              </>
            }
            para={
              <>
                Don’t push your luck with cookie-cutter solutions. Try <br />
                Voucherify flexible online contest software to run and track{" "}
                <br />
                online contests.
              </>
            }
            btnText={"Learn more"}
            img={"/maingrid-img08.png"}
          />
          <br />
          <br />
          <SecondGrid
            gridHeading={<>Choose a complete sweepstakes software</>}
            gridImg1="/kk.png"
            gridImg2="/ll.png"
            gridImg3="/mm.png"
            gridPara1={
              <>
                Keep customers on <br />
                the edge
              </>
            }
            gridSubPara1="Grow customer engagement with exciting contests without spending a fortune on dedicated engineering teams."
            gridPara2={
              <>
                Take control over <br />
                logic
              </>
            }
            gridSubPara2="Release complex sweepstakes and online contests straight from the Dashboard and give your marketing experts the tools they need to easily track, manage and upgrade campaigns."
            gridPara3="Target the right audience"
            gridSubPara3="Customize rewards and incentives to match customers’ preferences. Run customer segment specific or open sweepstake campaigns to either boost customer loyalty or generate new leads."
          />
          <ThirdGrid
            title={<>Achieve business goals with our sweepstakes software</>}
            subTitle={
              <>
                <span style={{ fontWeight: "normal" }}>
                  Build a base of dedicated customers by launching
                  highly-personalized sweepstakes and contests. Drive real
                  customer engagement and reach more potential clients with
                  gamified campaigns.{" "}
                </span>
                <br />
                <br />
                • Customizable sweepstake workflow and drawing rules. <br />
                • Various sweepstake prizes ranging from material rewards to
                numerous non-monetary incentives, including discount coupons,
                gift card credits, or loyalty points. <br />
                • Flexible landing pages creator & hosting. <br />
                • Automatic prizes assignment and reward notifications. <br />•
                Interwoven sweepstakes and online contests with other
                promotional activities that create a consistent brand style.{" "}
                <br />• Detailed contest analytics thanks to comprehensive
                reporting and audit logs.
              </>
            }
            titleImg="/nn.png"
          />
          <ThirdGrid
            reverse
            title={<>Scale with our end-to-end sweepstakes software</>}
            subTitle={
              <>
                • Leverage flexible API and multiple SDKs to shorten your
                time-to-market.
                <br />
                • Enjoy simple handling and low maintenance costs thanks to an
                API-first platform.
                <br />
                • Bulk data import and export capabilities that suit your needs.
                <br />
                • Rollback reward redemptions and disable/enable sweepstake
                campaigns with one click.
                <br />
              </>
            }
            titleImg="/oo.png"
          />
          <ThirdGrid
            title={<>Enjoy simple contest management</>}
            subTitle={
              <>
                <span style={{ fontWeight: "normal" }}>
                  Increase the productivity of your marketing team and launch
                  fully automated sweepstakes and online contests thanks to
                  Voucherify user-friendly dashboard and flexible API. All you
                  have to do is design your campaign workflow and we will take
                  care of the rest – drawing the winners, assigning rewards to
                  particular customers, and notifying them about prizes.
                </span>
              </>
            }
            titleImg="/pp.png"
          />
          <ThirdGrid
            reverse
            title={<>Offer any reward via any channel</>}
            subTitle={
              <>
                Take advantage of Voucherify's powerful API-based online contest
                software and set up a multi-level rewards schema and
                multi-channel messaging to inform customers about your contest,
                drawing results, and prizes assignment.
              </>
            }
            titleImg="/g1.png"
          />
        </div>
      </div>
      <div style={{ backgroundColor: "#2C1F53" }}>
        <QuesComp
          ques={
            <>
              Are you wasting time and money on{" "}
              <span style={{ color: "#F9A802" }}>Enterprise Analytics</span>
            </>
          }
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
