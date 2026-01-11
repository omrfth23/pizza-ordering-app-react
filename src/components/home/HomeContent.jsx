import { useNavigate } from "react-router-dom";

export default function HomeContent() {
  const navigate = useNavigate();

  return (
    <div className="homeContentWrap">
      {/* Navigation Menu */}
      <nav className="homeNav">
        <a className="homeNavItem">
          <img src="/images/iteration-2-images/icons/1.svg" alt="" />
          <span>YENİ! Kore</span>
        </a>
        <a className="homeNavItem">
          <img src="/images/iteration-2-images/icons/2.svg" alt="" />
          <span>Pizza</span>
        </a>
        <a className="homeNavItem">
          <img src="/images/iteration-2-images/icons/3.svg" alt="" />
          <span>Burger</span>
        </a>
        <a className="homeNavItem">
          <img src="/images/iteration-2-images/icons/4.svg" alt="" />
          <span>Kızartmalar</span>
        </a>
        <a className="homeNavItem">
          <img src="/images/iteration-2-images/icons/5.svg" alt="" />
          <span>Fast food</span>
        </a>
        <a className="homeNavItem">
          <img src="/images/iteration-2-images/icons/6.svg" alt="" />
          <span>Gazlı içecek</span>
        </a>
      </nav>

      {/* Promo Cards */}
      <section className="promoSection">
        <div className="promoCard promoCardLarge">
          <h2 className="promoTitle">
            Özel
            <br />
            Lezzetus
          </h2>
          <p className="promoDesc">Position:Absolute Acı Burger</p>
        </div>

        <div className="promoGroup">
          <div className="promoCard promoCardDark">
            <h3 className="promoTitleSmall">
              Hackathlon
              <br />
              Burger Menü
            </h3>
          </div>

          <div className="promoCard promoCardLight">
            <h3 className="promoTitleSmall">
              <span className="promoHighlight">Çoooook</span> hızlı
              <br />
              npm gibi kurye
            </h3>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="menuSection">
        <p className="menuSubtitle">en çok paketlenen menüler</p>
        <h2 className="menuTitle">Acıktıran Kodlara Doyuran Lezzetler</h2>

        <div className="menuCategories">
          <button className="menuCategoryBtn">
            <img src="/images/iteration-2-images/icons/1.svg" alt="" />
            <span>Ramen</span>
          </button>
          <button className="menuCategoryBtn">
            <img src="/images/iteration-2-images/icons/2.svg" alt="" />
            <span>Pizza</span>
          </button>
          <button className="menuCategoryBtn">
            <img src="/images/iteration-2-images/icons/3.svg" alt="" />
            <span>Burger</span>
          </button>
          <button className="menuCategoryBtn">
            <img src="/images/iteration-2-images/icons/4.svg" alt="" />
            <span>French fries</span>
          </button>
          <button className="menuCategoryBtn">
            <img src="/images/iteration-2-images/icons/5.svg" alt="" />
            <span>Fast food</span>
          </button>
          <button className="menuCategoryBtn">
            <img src="/images/iteration-2-images/icons/6.svg" alt="" />
            <span>Soft drinks</span>
          </button>
        </div>

        {/* Product Cards */}
        <div className="productGrid">
          <article className="productCard">
            <img
              className="productImage"
              src="/images/iteration-2-images/pictures/food-1.png"
              alt="Terminal Pizza"
            />
            <h3 className="productName">Terminal Pizza</h3>
            <div className="productMeta">
              <span className="productRating">4.9</span>
              <span className="productReviews">(200)</span>
              <span className="productPrice">60₺</span>
            </div>
          </article>

          <article className="productCard">
            <img
              className="productImage"
              src="/images/iteration-2-images/pictures/food-2.png"
              alt="Position Absolute Acı Pizza"
            />
            <h3 className="productName">Position Absolute Acı Pizza</h3>
            <div className="productMeta">
              <span className="productRating">4.9</span>
              <span className="productReviews">(200)</span>
              <span className="productPrice">60₺</span>
            </div>
          </article>

          <article className="productCard">
            <img
              className="productImage"
              src="/images/iteration-2-images/pictures/food-3.png"
              alt="useEffect Tavuklu Burger"
            />
            <h3 className="productName">useEffect Tavuklu Burger</h3>
            <div className="productMeta">
              <span className="productRating">4.9</span>
              <span className="productReviews">(200)</span>
              <span className="productPrice">60₺</span>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
