import PriceSummary from "./PriceSummary";

export default function OrderFooter({
  isValid,
  isPosting,
  quantity,
  setQuantity,
  extrasPrice,
  totalPrice,
}) {
  const inc = () => setQuantity((q) => q + 1);
  const dec = () => setQuantity((q) => Math.max(1, q - 1));

  return (
    <div style={{ marginTop: 18 }}>
      <div className="footerWrap">
        <div className="qtyBox">
          <button
            type="button"
            className="qtyBtn qtyBtnLeft"
            onClick={dec}
            disabled={quantity <= 1}
          >
            -
          </button>

          <div className="qtyMid">{quantity}</div>

          <button type="button" className="qtyBtn qtyBtnRight" onClick={inc}>
            +
          </button>
        </div>

        <PriceSummary extrasPrice={extrasPrice} totalPrice={totalPrice} />
      </div>

      <button className="orderBtn" disabled={!isValid || isPosting}>
        SİPARİŞ VER
      </button>
    </div>
  );
}
