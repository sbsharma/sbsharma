import Banner from "../Banner";
import FloatingButton from "../FloatingButton";
import QuesComp from "../QuesComp";
import SectionFive from "../SectionFive";
import SectionFour from "../SectionFour";
import SectionOne from "../SectionOne";
import SectionThree from "../SectionThree";
import SectionTwo from "../SectionTwo";

export default function PrepaidCardLayout() {
  return (
    <>
      <Banner />
      <FloatingButton />
      <div className="home-class">
      {/* <div style={{ backgroundColor: "#2C1f53", padding: "120px 100px 20px 100px" }}> */}
        <SectionOne />
        </div>
      {/* </div> */}
      <SectionTwo />
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
      </div>
    </>
  );
}
