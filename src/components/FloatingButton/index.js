import { CloseOutlined, RightOutlined } from "@ant-design/icons";
import { Col, Row, Typography } from "antd";
import React, { useState } from "react";
import MainFooter from "../MainFooter";
import PricingLayout from "../PricingLayout";
const { Title } = Typography;

export default function FloatingButton() {
  // const [collapse, setCollapse] = useState(false);
  // const toggleCollapse = () => {
  //   setCollapse(console.log("hi"));
  // };

  // function showDiv() {
  //   document.getElementById("welcomeDiv").style.display = "block";
  // }

  // function showMenu() {
  //   document.getElementById("menuDiv").style.display = "block";
  // }

  const [show, setShow] = useState(false);
  const [menu, setMenu] = useState(false);
  // const [pricing, setPricing] = useState(false);

  return (
    <>
      <div
        className="floating-button"
      >
        {/* <button className="logo" onClick={toggleCollapse}>
        <img src="/sidebar_logo.png" alt="sidebar" className="logo-img" />
      </button> */}

        <button className="logo" onClick={() => setShow(show ? null : true)}>
          <img
            src={show ? "/close.png" : "/sidebar_logo.png"}
            alt="sidebar"
            className="logo-img"
          />
        </button>
        {show ? (
          <div
          // id="welcomeDiv"
          // style={{ display: "none" }}
          // className="answer_list"
          >
            <div style={{ width: "215px", background: "#2C1F53" }}>
              <a
                className="sidenav_links"
                onClick={() => setMenu(menu ? null : true)}
              >
                <li className="sidenav_list">
                  Product <RightOutlined className="list_icon" />
                </li>
              </a>
              <a href="/pricing">
                <li className="sidenav_list">Pricing</li>
              </a>
              <a>
                <li className="sidenav_list">
                  Resources <RightOutlined className="list_icon" />
                </li>
              </a>
              <a href="/customers">
                <li className="sidenav_list">Customers</li>
              </a>
              <a>
                <li className="sidenav_list">
                  Company <RightOutlined className="list_icon" />
                </li>
              </a>
              <a href="/prepaidcards">
                <li className="sidenav_list">Pre-paid card</li>
              </a>
            </div>
            <br />
            <br />
            <br />
            <div style={{ display: "flex", padding: "20px" }}>
              <img src="/user.png" alt="" className="user-img" />
              <div style={{ marginLeft: "10px" }}>
                <Title level={4} style={{ marginBottom: "0px", color: "#fff" }}>
                  Jerome Bell
                </Title>
                <Title level={5} style={{ marginTop: "0px", color: "#DEDEDE" }}>
                  bell@mb.com
                </Title>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {menu ? (
        <div
          // id="menuDiv"
          // style={{ display: "none" }}
          style={{ position: "fixed", zIndex: "5" }}
        >
          <div
            style={{
              borderRadius: "20px",
              background: "#fff",
              padding: "30px",
              width: "600px",
              position: "absolute",
              zIndex: "3",
              top: "220px",
              left: "230px",
            }}
          >
            <Row>
              <Col xs={2} sm={4} md={6} lg={14} xl={12}>
                <a href="/coupons">
                  <div
                    style={{
                      display: "flex",
                      verticalAlign: "middle",
                      cursor: "pointer",
                    }}
                    href="/coupons"
                  >
                    <img src="/sn01.png" alt="" className="sn-icons" />
                    <Title level={5} className="sn-box-links">
                      Personalised Coupons
                    </Title>
                  </div>
                </a>
              </Col>
              <Col xs={2} sm={4} md={6} lg={14} xl={12}>
                <a href="/loyalty">
                  <div
                    style={{
                      display: "flex",
                      verticalAlign: "middle",
                      cursor: "pointer",
                    }}
                  >
                    <img src="/sn02.png" alt="" className="sn-icons" />
                    <Title level={5} className="sn-box-links">
                      Loyalty
                    </Title>
                  </div>
                </a>
              </Col>
            </Row>
            <Row>
              <Col xs={2} sm={4} md={6} lg={14} xl={12}>
                <a href="/giftcards">
                  <div
                    style={{
                      display: "flex",
                      verticalAlign: "middle",
                      cursor: "pointer",
                    }}
                  >
                    <img src="/sn03.png" alt="" className="sn-icons" />
                    <Title level={5} className="sn-box-links">
                      Gift Cards
                    </Title>
                  </div>
                </a>
              </Col>
              <Col xs={2} sm={4} md={6} lg={14} xl={12}>
                <a href="/digitalwallets">
                  <div
                    style={{
                      display: "flex",
                      verticalAlign: "middle",
                      cursor: "pointer",
                    }}
                  >
                    <img src="/sn04.png" alt="" className="sn-icons" />
                    <Title level={5} className="sn-box-links">
                      Digital Wallet
                    </Title>
                  </div>
                </a>
              </Col>
            </Row>
            <Row>
              <Col xs={2} sm={4} md={6} lg={14} xl={12}>
                <a href="/geofencing">
                  <div
                    style={{
                      display: "flex",
                      verticalAlign: "middle",
                      cursor: "pointer",
                    }}
                  >
                    <img src="/sn05.png" alt="" className="sn-icons" />
                    <Title level={5} className="sn-box-links">
                      Geo Fencing
                    </Title>
                  </div>
                </a>
              </Col>
              <Col xs={2} sm={4} md={6} lg={14} xl={12}>
                <a href="/referralprograms">
                  <div
                    style={{
                      display: "flex",
                      verticalAlign: "middle",
                      cursor: "pointer",
                    }}
                  >
                    <img src="/sn06.png" alt="" className="sn-icons" />
                    <Title level={5} className="sn-box-links">
                      Referral Program
                    </Title>
                  </div>
                </a>
              </Col>
            </Row>
            <Row>
              <Col xs={2} sm={4} md={6} lg={14} xl={12}>
                <a href="/analytics">
                  <div
                    style={{
                      display: "flex",
                      verticalAlign: "middle",
                      cursor: "pointer",
                    }}
                  >
                    <img src="/sn07.png" alt="" className="sn-icons" />
                    <Title level={5} className="sn-box-links">
                      Analytics
                    </Title>
                  </div>
                </a>
              </Col>
              <Col xs={2} sm={4} md={6} lg={14} xl={12}>
                <a href="/productbundling">
                  <div
                    style={{
                      display: "flex",
                      verticalAlign: "middle",
                      cursor: "pointer",
                    }}
                  >
                    <img src="/sn08.png" alt="" className="sn-icons" />
                    <Title level={5} className="sn-box-links">
                      Product Bundling
                    </Title>
                  </div>
                </a>
              </Col>
            </Row>
          </div>
        </div>
      ) : null}
      {/* {pricing?
      <PricingLayout /> &&
      <MainFooter />:null} */}
    </>
  );
}
