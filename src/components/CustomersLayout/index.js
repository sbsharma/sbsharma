import Banner from "../Banner";
import CompThree from "../CompThree";
import CompTwo from "../CompTwo";
import FloatingButton from "../FloatingButton";
import QuesComp from "../QuesComp";
import SectionFive from "../SectionFive";
import SectionFour from "../SectionFour";
import CompOne from "../SectionOne";
import SectionOne from "../SectionOne";
import SectionThree from "../SectionThree";
import SectionTwo from "../SectionTwo";

export default function CustomersLayout() {
  return (
    <>
      <Banner />
      <FloatingButton />
      <div style={{ backgroundColor: "#2C1f53", padding: "120px 100px 20px 100px" }}>
        <CompOne />
      </div>
      <CompTwo
        compTwoImg="/cs01.png"
        text={
          <>
            Save your time & make your sales promotions successful with{" "}
            <span style={{ color: "#F9A802" }}>MeriBachat</span>
          </>
        }
        subText01="Industry"
        subText02="Location"
        subText03="Solution"
      />
      <div style={{ backgroundColor: "#2C1f53", padding: "120px 100px 20px 100px" }}>
        <CompThree />
      </div>
      <div style={{ backgroundColor: "#2C1F53" }}>
        <QuesComp
          ques="Are you wasting time and money on digital promotions"
          quesPara="It’s time to change "
          quesBtn="Get Started"
        />
      </div>
      {/* <SectionTwo />
      <div style={{ backgroundColor: "#2C1f53", padding: "20px 100px" }}>
        <SectionThree />
      </div>
      <SectionFour />
      <div style={{ backgroundColor: "#2C1f53", padding: "20px 100px" }}>
        <SectionFive />
      </div>
      <div style={{ backgroundColor: "#2C1F53" }}>
        <QuesComp
          ques="Say Goodbye!"
          quesPara={<>For your conventional way of paying<br/> get prepaid cards and save your time <br/>and effort</>}
          quesBtn="Get Started"
        />
      </div> */}
    </>
  );
}
