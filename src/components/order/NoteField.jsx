export default function NoteField({ value, onChange }) {
  return (
    <textarea
      className="textarea"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Sipariş eklemek istediğin bir not var mı?"
      data-cy="order-note"
    />
  );
}
