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
    <div style={{ marginTop: 18 }} data-cy="order-footer">
      <div className="footerWrap">
        <div className="qtyBox" data-cy="quantity-box">
          <button
            type="button"
            className="qtyBtn qtyBtnLeft"
            onClick={dec}
            disabled={quantity <= 1}
            data-cy="order-quantity-minus"
          >
            -
          </button>

          <div className="qtyMid" data-cy="order-quantity-value">
            {quantity}
          </div>

          <button
            type="button"
            className="qtyBtn qtyBtnRight"
            onClick={inc}
            data-cy="order-quantity-plus"
          >
            +
          </button>
        </div>

        <PriceSummary
          extrasPrice={extrasPrice}
          totalPrice={totalPrice}
        />
      </div>

      <button
        className="orderBtn"
        disabled={!isValid || isPosting}
        data-cy="order-submit"
      >
        SİPARİŞ VER
      </button>
    </div>
  );
}
