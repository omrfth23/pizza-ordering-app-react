export default function NameField({ value, onChange }) {
  return (
    <div style={{ marginTop: 18 }}>
      <label className="fieldLabel">
        İsim <span className="reqStar">*</span>
      </label>

      <input
        className="input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Adınızı giriniz"
        data-cy="order-name"
      />
    </div>
  );
}
