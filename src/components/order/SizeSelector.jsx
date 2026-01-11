export default function SizeSelector({ size, onChange, sizePriceMap }) {
  const sizes = ["S", "M", "L"];

  return (
    <div className="sizePills">
      {sizes.map((s) => (
        <div
          key={s}
          className={`sizePill ${size === s ? "sizePillActive" : ""}`}
          onClick={() => onChange(s)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") onChange(s);
          }}
          title={`${s} (${sizePriceMap[s] ?? 0} TL)`}
        >
          {s}
        </div>
      ))}
    </div>
  );
}
