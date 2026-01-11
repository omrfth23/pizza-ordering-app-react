const formatTL = (n) =>
  new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" }).format(
    n
  );

export default function PriceSummary({ extrasPrice, totalPrice }) {
  return (
    <div className="summary">
      <div className="summaryTitle">Sipariş Toplamı</div>

      <div className="summaryRow">
        <span>Seçimler</span>
        <span>{formatTL(extrasPrice)}</span>
      </div>

      <div className="summaryTotal">
        <span>Toplam</span>
        <span>{formatTL(totalPrice)}</span>
      </div>
    </div>
  );
}
