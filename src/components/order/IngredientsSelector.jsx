export default function IngredientsSelector({
  items,
  selected,
  onToggle,
  max = 10,
}) {
  const selectedCount = selected.length;

  return (
    <div className="ingredientGrid">
      {items.map((item) => {
        const checked = selected.includes(item);
        const limitReached = selectedCount >= max && !checked;

        return (
          <label
            key={item}
            className="ingCard"
            style={{ opacity: limitReached ? 0.5 : 1 }}
          >
            <input
              className="ingCheck"
              type="checkbox"
              checked={checked}
              disabled={limitReached}
              onChange={() => onToggle(item)}
            />
            <span className="ingName">{item}</span>
          </label>
        );
      })}
    </div>
  );
}
