export default function Checkbox({ checked, onChange }) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="terms"
          checked={checked}
          onChange={onChange}
        />
        I accept terms and conditions
      </label>
      <button type="button" disabled={!checked}>
        Proceed
      </button>
    </div>
  );
}
