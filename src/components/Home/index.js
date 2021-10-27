import Banner from "../Banner";
import FloatingButton from "../FloatingButton";
import MainFooter from "../MainFooter";
import MainLayout from "../MainLayout";

export default function Home() {
  return (
    <>
      <Banner />
      <FloatingButton />
      <div
        style={{
          // margin: "105px 0",
          padding: "120px 100px 20px 100px",
          backgroundColor: "#2C1F53",
        }}
      >
        <MainLayout />
      </div>
      <MainFooter />
    </>
  );
}
