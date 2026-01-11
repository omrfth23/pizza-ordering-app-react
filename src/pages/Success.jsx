import { useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";


const formatTL = (n) =>
  new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" }).format(
    n
  );

export default function Success() {
  const { state } = useLocation();


  const order = state?.order;

  const pizzaName = "Position Absolute Acı Pizza";

  const sizeText = order?.size ? order.size : "-";
  const doughText = order?.dough ? order.dough : "-";
  const ingredientsText =
    order?.ingredients?.length > 0 ? order.ingredients.join(", ") : "-";


  const extrasPrice = typeof order?.extrasPrice === "number" ? order.extrasPrice : 0;
  const totalPrice = typeof order?.price === "number" ? order.price : 0;

  const logo = new URL(
    "../../images/iteration-1-images/logo.svg",
    import.meta.url
  ).href;

  return (
    <div className="successPage">
      <div className="successHeader">
        <img src={logo} alt="Teknolojik Yemekler" className="successLogo" />
      </div>

      <div className="successCenter">
        <div className="successContent">
          <div className="successTagline">lezzetin yolda</div>
          <div className="successTitle">SİPARİŞ ALINDI</div>
          <hr className="successDivider" />

          <div className="successPizzaName">{pizzaName}</div>

          <div className="successInfo">
            <div className="successInfoRow">
              <span className="successInfoLabel">Boyut:</span>
              <span className="successInfoValue">{sizeText}</span>
            </div>

            <div className="successInfoRow">
              <span className="successInfoLabel">Hamur:</span>
              <span className="successInfoValue">{doughText}</span>
            </div>

            <div className="successInfoRow">
              <span className="successInfoLabel">Ek Malzemeler:</span>
              <span className="successInfoValue">{ingredientsText}</span>
            </div>
          </div>

          <div className="successBox">
            <div className="successBoxTitle">Sipariş Toplamı</div>

            <div className="successBoxRow">
              <span>Seçimler</span>
              <span>{formatTL(extrasPrice)}</span>
            </div>

            <div className="successBoxTotal">
              <span>Toplam</span>
              <span>{formatTL(totalPrice)}</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
