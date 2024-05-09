// import { useState } from 'react';

export default function Button({ value, onUpdate }) {
  // const [clicks, setClicks] = useState(0);
  // const [phrase, setPhrase] = useState('You click');
  // const handleClick = () => {
  //   setClicks(clicks + 1);
  // };
  // return (
  //   <button onClick={handleClick}>
  //     {phrase} {clicks}
  //   </button>
  // );

  return <button onClick={onUpdate}>Current: {value}</button>;
}
