import Banner from "../Banner";
import FloatingButton from "../FloatingButton";
import MainGrid from "../MainGrid";
import QuesComp from "../QuesComp";
import SalesPromotion from "../SalesPromotion";
import SecondGrid from "../SecondGrid";
import ThirdGrid from "../ThirdGrid";

export default function DigitalWalletsLayout() {
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
                  Flexible and Customizable <br />
                  Digital Wallets
                </span>{" "}
                Software
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
                Harness the power of
                <span style={{ color: "#F9A802" }}> digital wallets </span>
                <br />
                with our e wallet software
              </>
            }
            gridImg1="/4.png"
            gridImg2="/5.png"
            gridImg3="/6.png"
            gridPara1={<>Increase the repeated purchase rate</>}
            gridSubPara1="Thanks to a clear overview of customer’s rewards and benefits."
            gridPara2="Let your customer service unwind"
            gridSubPara2="Thanks to easily redeemable, self-service rewards."
            gridPara3="Always stay top of mind"
            gridSubPara3="By creating digital wallets and sending notifications about soon-expiring rewards."
          />
          <ThirdGrid
            title={
              <>
                Manage all currencies and reward types with{" "}
                <span style={{ color: "#F9A802" }}>
                  one digital wallet software
                </span>{" "}
              </>
            }
            subTitle={
              <>
                Create a digital wallet, a place where customers can collect and
                use all rewards and currencies available in your store. Show all
                benefits at one convenient & branded space
                <br /> <br />
                • Coupons & gift certificates. <br />
                • Redeemable material rewards. <br />
                • Loyalty points balance. <br />
                • Custom currencies. <br />
              </>
            }
            titleImg="/xx.png"
          />
          <ThirdGrid
            reverse
            title={
              <>
                Get creative with custom currencies thank to our
                <span style={{ color: "#F9A802" }}> e wallet solution</span>
              </>
            }
            subTitle={
              <>
                Whether it is steps, miles, stars, stamps, diamonds or anything
                else, you can choose your own currency that matches your brand.
                Let your customers earn and collect it in their digital wallets.
              </>
            }
            titleImg="/yy.png"
          />
          <ThirdGrid
            title={
              <>
                Create
                <span style={{ color: "#F9A802" }}> customized wallets </span>
                with our
                <span style={{ color: "#F9A802" }}>
                  {" "}
                  digital wallet software
                </span>
              </>
            }
            subTitle={
              <>
                Give customers instant access to all rewards and discounts in
                one convenient place. Add the information on
                <br />
                <br />
                • Active, expired and pending points and rewards.
                <br />
                • Tier status in your loyalty program.
                <br />
                • How to collect the points/custom currencies in your program.
                <br />
                • Rewards they can unlock if they collect more points.
                <br />
                • Points missing to reach the next tier in your loyalty program.
                <br />
                • Soon-to-expire rewards, points, currencies, coupons.
                <br />• Any upcoming promotions (double point days, special
                discounts).
              </>
            }
            titleImg="/zz.png"
          />
        </div>
      </div>
      <div style={{ backgroundColor: "#2C1F53" }}>
        <QuesComp
          ques={
            <>
              Want to build a{" "}
              <span style={{ color: "#F9A802" }}>
                data based loyality program
              </span>
            </>
          }
          quesPara="We are here"
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
