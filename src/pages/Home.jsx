import { useNavigate } from "react-router-dom";
import Footer from "../components/footer/Footer";
import HomeContent from "../components/home/HomeContent";

export default function Home() {
  const navigate = useNavigate();

  const homeBanner = new URL(
    "../../images/iteration-1-images/home-banner.png",
    import.meta.url
  ).href;

  // Logo
  const logo = new URL(
    "../../images/iteration-1-images/logo.svg",
    import.meta.url
  ).href;

  return (
    <>
      <div
        className="home"
        style={{
          backgroundImage: `url(${homeBanner})`,
        }}
      >
        <header className="homeHeader">
          <img src={logo} alt="Teknolojik Yemekler" className="homeLogo" />
        </header>

        <main className="homeMain">
          <div className="homeContent">
            <div className="homeTag">fırsatı kaçırma</div>

            <h1 className="homeTitle">
              KOD ACIKTIRIR
              <br />
              PIZZA, DOYURUR
            </h1>

            <button className="homeCta" onClick={() => navigate("/order")}>
              ACIKTIM
            </button>
          </div>
        </main>
      </div>

      <HomeContent />
      <Footer />
    </>
  );
}
