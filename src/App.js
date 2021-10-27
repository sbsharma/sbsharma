import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Test from "./components/Test";
import "antd/dist/antd.css";
import { Col, Divider, Row } from "antd";
import Algorithm from "./components/Algorithm";
import MainLayout from "./components/MainLayout";
import { Layout } from "antd";
import ICON from "./icons";
import { Typography } from "antd";
import SecondGrid from "./components/SecondGrid";
import QuesComp from "./components/QuesComp";
import CouponLayout from "./components/CouponLayout";
import ThirdGrid from "./components/ThirdGrid";
import MainFooter from "./components/MainFooter";
import Banner from "./components/Banner";
import GiftcardLayout from "./components/GiftcardLayout";
import GeofencingLayout from "./components/GeofencingLayout";
import AnalyticsLayout from "./components/AnalyticsLayout";
import GiveawayLayout from "./components/GiveawayLayout";
import ProductBundling from "./components/ProductBundling";
import LoyaltyLayout from "./components/LoyaltyLayout";
import DigitalWalletsLayout from "./components/DigitalWalletsLayout";
import ReferralProgramLayout from "./components/ReferralProgramLayout";
import CartLevelLayout from "./components/CartLevelLayout";
import IntegrationsLayout from "./components/IntegrationsLayout";
import PrepaidCardLayout from "./components/PrepaidCardLayout";
import CustomersLayout from "./components/CustomersLayout";
import PricingLayout from "./components/PricingLayout";
import TnCLayout from "./components/TnCLayout";
import PrivacyLayout from "./components/PrivacyLayout";
import Carousel from "./components/Carousel";
import FloatingButton from "./components/FloatingButton";
import HelpSupportLayout from "./components/HelpSupportLayout";
import Home from "./components/Home";
const { Header, Content, Footer, Sider } = Layout;

const { Title } = Typography;

function App() {
  return (
    <>
      <Router>
        
          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul> */}

          <Switch>
            <Route path="/pricing">
              <PricingLayout />
              <MainFooter />
            </Route>
            <Route path="/coupons">
              <CouponLayout />
              <MainFooter />
            </Route>
            <Route path="/giftcards">
              <GiftcardLayout />
              <MainFooter />
            </Route>
            <Route path="/geofencing">
              <GeofencingLayout />
              <MainFooter />
            </Route>
            <Route path="/analytics">
              <AnalyticsLayout />
              <MainFooter />
            </Route>
            <Route path="/loyalty">
              <LoyaltyLayout />
              <MainFooter />
            </Route>
            <Route path="/digitalwallets">
              <DigitalWalletsLayout />
              <MainFooter />
            </Route>
            <Route path="/referralprograms">
              <ReferralProgramLayout />
              <MainFooter />
            </Route>
            <Route path="/productbundling">
              <ProductBundling/>
              <MainFooter />
            </Route>
            <Route path="/cartlevel">
              <CartLevelLayout />
              <MainFooter />
            </Route>
            <Route path="/giveaway">
              <GiveawayLayout />
              <MainFooter />
            </Route>
            <Route path="/integrations">
              <IntegrationsLayout />
              <MainFooter />
            </Route>
            <Route path="/prepaidcards">
              <PrepaidCardLayout />
              <MainFooter />
            </Route>
            <Route path="/customers">
              <CustomersLayout />
              <MainFooter />
            </Route>
            <Route path="/tnc">
              <TnCLayout />
              <MainFooter />
            </Route>
            <Route path="/privacy">
              <PrivacyLayout />
              <MainFooter />
            </Route>
            <Route path="/helpandsupport">
              <HelpSupportLayout />
              <MainFooter />
            </Route>
            <Route path="/topics">{/* <Topics /> */}</Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        
      </Router>
      {/* <FloatingButton /> */}
      {/* <Carousel /> */}
      {/* <div style={{ display: "flex" }}> */}
        {/* <Sidebar /> */}
        {/* <div> */}
          {/* <HelpSupportLayout />
          <MainFooter />

          <PrivacyLayout />
          <MainFooter />
          <TnCLayout />
          <MainFooter />
          <PricingLayout />
          <MainFooter />
          <CustomersLayout />
          <MainFooter />
          <PrepaidCardLayout />
          <MainFooter />
          <IntegrationsLayout />
          <GiveawayLayout />
          <MainFooter />
          <CartLevelLayout />
          <MainFooter />
          <ReferralProgramLayout />
          <MainFooter />
          <DigitalWalletsLayout />
          <MainFooter />
          <LoyaltyLayout />
          <MainFooter />
          <ProductBundling />
          <MainFooter />
          <AnalyticsLayout />
          <MainFooter />
          <GeofencingLayout />
          <MainFooter />
          <GiftcardLayout />
          <MainFooter />
          <CouponLayout />
          <MainFooter /> */}
          {/* <Banner />
          <FloatingButton />
          <div
            style={{
              margin: "105px 0",
              padding: "20px 100px",
              backgroundColor: "#2C1F53",
            }}
          > */}
            {/* <ThirdGrid
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
              coupons by setting individual expiry dates and linking client IDs
              to single coupons.
            </>
          }
          titleImg="/aa.png"
        />
        <ThirdGrid
          reverse
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
              coupons by setting individual expiry dates and linking client IDs
              to single coupons.
            </>
          }
          titleImg="/aa.png"
        /> */}
            {/* <MainLayout /> */}

            {/* <Algorithm /> */}
            {/* <Divider orientation="left">Responsive</Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
          <div>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div>col-6</div>
        </Col>
      </Row> */}
            {/* <Test /> */}
            {/* <br /> */}
            {/* <br /> */}
            {/* <SecondGrid
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
        /> */}
          {/* </div> */}
          {/* <MainFooter /> */}
          {/* <div style={{ backgroundColor: "#2C1F53" }}>
        <QuesComp
          ques="Are you burning money & wasting time on digital promotions?"
          quesPara="It’s time to change"
          quesBtn="Get Started"
        />
      </div> */}
          {/* <MainFooter /> */}
          {/* <Footer style={{ textAlign: "center" }}>
        <Row>
          <Col xs={4}>{ICON.websiteLogo()}</Col>
          <Col xs={4} style={{ textAlign: "left", padding: "0 30px" }}>
            <div className="footer-links">
              <Title level={5}>Features</Title>

              <li>
                <a>Coupon software</a>
              </li>
              <li>
                <a>Cart-level promotion software</a>
              </li>
              <li>
                <a>Gift cards software</a>
              </li>
              <li>
                <a>Product bundling</a>
              </li>
              <li>
                <a>Loyalty program software</a>
              </li>
              <li>
                <a>Referral program software</a>
              </li>
              <li>
                <a>Giveaways software</a>
              </li>
              <li>
                <a>Digital wallets</a>
              </li>
              <li>
                <a>Geofence promotions</a>
              </li>
            </div>
          </Col>
          <Col xs={4} style={{ textAlign: "left", padding: "0 30px" }}>
            <div className="footer-links">
              <Title level={5}>Meribachat for...</Title>

              <li>
                <a>Enterprise</a>
              </li>
              <li>
                <a>Marketers</a>
              </li>
              <li>
                <a>Product managers</a>
              </li>
              <li>
                <a>Developers</a>
              </li>
            </div>
          </Col>
          <Col xs={4} style={{ textAlign: "left", padding: "0 30px" }}>
            <div className="footer-links">
              <Title level={5}>For Marketers</Title>

              <li>
                <a>Integrations</a>
              </li>
              <li>
                <a>Success portal</a>
              </li>
              <li>
                <a>Inspiration library</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Roadmap</a>
              </li>
              <li>
                <a>Help Center</a>
              </li>
              <li>
                <a>Promotions Hub</a>
              </li>
            </div>
          </Col>
          <Col xs={4} style={{ textAlign: "left", padding: "0 30px" }}>
            <div className="footer-links">
              <Title level={5}>For Developers</Title>

              <li>
                <a>Documentation</a>
              </li>
              <li>
                <a>API status</a>
              </li>
            </div>
          </Col>
          <Col xs={4} style={{ textAlign: "left", padding: "0 30px" }}>
            <div className="footer-links">
              <Title level={5}>Company</Title>

              <li>
                <a>About</a>
              </li>
              <li>
                <a>Our partners</a>
              </li>
              <li>
                <a>Career</a>
              </li>
              <li>
                <a>Contact us</a>
              </li>
              <li>
                <a>Legal</a>
              </li>
            </div>
          </Col>
        </Row>
      </Footer> */}
        {/* </div> */}
      {/* </div> */}
    </>
  );
}

export default App;
