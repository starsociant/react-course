import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  const updateState = () => setCount('Olá mundo');

  return (
    <>
      <br />
      <button onClick={updateState}>Click me</button>
      <br />
      Count: {count}
    </>
  );
}
