import Banner from "../Banner";
import FloatingButton from "../FloatingButton";
import MainGrid from "../MainGrid";
import QuesComp from "../QuesComp";
import SalesPromotion from "../SalesPromotion";
import SecondGrid from "../SecondGrid";
import ThirdGrid from "../ThirdGrid";

export default function CartLevelLayout() {
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
                Automatic{" "}
                <span style={{ color: "#F9A802" }}>
                  Discounts <br />
                  Software
                </span>{" "}
                With{" "}
                <span style={{ color: "#F9A802" }}>
                  Unlimited Personalization
                </span>
              </>
            }
            para={
              <>
                Meet the new standard for promotion marketing and apply
                <br />
                discounts automatically when customers meet promotion
                <br />
                conditions.
              </>
            }
            btnText={"Learn more"}
            img={"/maingrid-img12.png"}
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
            gridImg3="/10.png"
            gridPara1={<>Increase average ﻿order size</>}
            gridSubPara1="Offer attractive up-selling and cross-selling promotions to encourage shoppers to add more products to the basket."
            gridPara2="Data-driven discounts"
            gridSubPara2="Save promotion budget with targeted promotions and complex discount redemption rules."
            gridPara3="Track promotion ROI"
            gridSubPara3="Gain critical insights into how your campaign is doing and base your next marketing move on hard data."
          />
          <ThirdGrid
            title={
              <>
                Launch any type of automatic discount with a
                <span style={{ color: "#F9A802" }}>
                  single promotion management tool
                </span>{" "}
              </>
            }
            subTitle={
              <>
                Give developers a break and create automatic promotions in a
                couple of clicks using an intuitive dashboard and top-tier
                discount management API. Choose from a wide range of promotion
                types and achieve unlimited customization.
                <br /> <br />
                • Percentage & amount discounts (multi-currency support). <br />
                • Free shipping & products. <br />
                • Fixed discount amount on specific orders or products. <br />
                • Attractive product bundles & creative BOGO promotions. <br />
                • Automatic promotions with multiple tiers and discount
                hierarchy. <br />
                • Time-limited promotions with short expiration dates set on the
                level of the campaign or individual tiers. <br />• Discount for
                specific, some, or only one product in the cart. <br />
              </>
            }
            titleImg="/c1.png"
          />
          <ThirdGrid
            reverse
            title={
              <>
                Target
                <span style={{ color: "#F9A802" }}>
                  {" "}
                  automatic discounts
                </span>{" "}
                based on any data
              </>
            }
            subTitle={
              <>
                Introduce limits and tiers to make your automatic promotions
                both engaging to customers and scalable for your business.
                Target cart promotions based on:
                <br />
                <br />
                • Order volume & value.
                <br />
                • Cart content & order history.
                <br />
                • Customer segment or loyalty tier.
                <br />
                • Customer geolocation & device.
                <br />
                • Specific stores & affiliates.
                <br />• Any other custom sales data provided through custom
                fields (metadata).
              </>
            }
            titleImg="/c2.png"
          />
          <ThirdGrid
            title={
              <>
                Ensure
                <span style={{ color: "#F9A802" }}>
                  {" "}
                  exceptional customer experience{" "}
                </span>
                with auto-applied discounts
              </>
            }
            subTitle={
              <>
                Our promotion software tracks your visitors and validates cart
                structure against pre-set promotion rules. When an eligible
                customer proceeds to checkout, the discount is applied
                automatically, without a need for a coupon code – smooth and
                easy!
                <br />
                <br />
                • Use dynamic price widgets to show customers how much they can
                save.
                <br />
                • Offer automatic promotions to customers who abandoned their
                carts to incentivize them to finish the purchase.
                <br />
                • Allow customers to stack and combine multiple promotion tiers
                and discounts.
                <br />
                • Create clever product combinations to supercharge up-selling
                and cross-selling strategies.
                <br />
              </>
            }
            titleImg="/c3.png"
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
