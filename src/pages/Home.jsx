import { useNavigate } from "react-router-dom";
import Footer from "../components/footer/Footer";
import HomeContent from "../components/home/HomeContent";

export default function Home() {
  const navigate = useNavigate();

  const homeBanner = new URL(
    "../../images/iteration-1-images/home-banner.png",
    import.meta.url
  ).href;

  const logo = new URL(
    "../../images/iteration-1-images/logo.svg",
    import.meta.url
  ).href;

  return (
    <>
      <div
        className="home"
        data-cy="home-page"
        style={{
          backgroundImage: `url(${homeBanner})`,
        }}
      >
        <header className="homeHeader" data-cy="home-header">
          <img
            src={logo}
            alt="Teknolojik Yemekler"
            className="homeLogo"
            data-cy="home-logo"
          />
        </header>

        <main className="homeMain">
          <div className="homeContent">
            <div className="homeTag" data-cy="home-tag">
              fırsatı kaçırma
            </div>

            <h1 className="homeTitle" data-cy="home-title">
              KOD ACIKTIRIR
              <br />
              PIZZA, DOYURUR
            </h1>

            <button
              className="homeCta"
              data-cy="home-cta"
              onClick={() => navigate("/order")}
            >
              ACIKTIM
            </button>
          </div>
        </main>
      </div>

      <HomeContent data-cy="home-content" />
      <Footer data-cy="footer" />
    </>
  );
}
