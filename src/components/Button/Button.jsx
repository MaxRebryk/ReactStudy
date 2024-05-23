// import { useState } from 'react';
import { useEffect } from 'react';

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
  useEffect(() => {
    console.log({ value });
  }, [onUpdate]);
  return <button onClick={onUpdate}>Current: {value}</button>;
}
