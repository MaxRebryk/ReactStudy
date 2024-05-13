export default function Radio({ value, onSelect }) {
  return (
    <>
      <h1>Select coffee size</h1>
      <label>
        <input
          onChange={event => onSelect(event.target.value)}
          type="radio"
          name="coffeeSize"
          value="sm"
          checked={value === 'sm'}
        />
        Small
      </label>
      <label>
        <input
          onChange={event => onSelect(event.target.value)}
          type="radio"
          name="coffeeSize"
          value="md"
          checked={value === 'md'}
        />
        Medium
      </label>
      <label>
        <input
          onChange={event => onSelect(event.target.value)}
          type="radio"
          name="coffeeSize"
          value="lg"
          checked={value === 'lg'}
        />
        Large
      </label>
    </>
  );
}
