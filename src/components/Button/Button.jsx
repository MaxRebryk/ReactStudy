export default function Button() {
  const handleClick = () => {
    alert('Hello');
  };
  return <button onClick={handleClick}>Click Me</button>;
}
