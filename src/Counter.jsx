import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState();

  const handleInputChange = event => {
    event.preventDefault();
  };

  return (
    <div>
      <input
        type="text"
        value={count}
        onChange={event => setCount(event.target.value)}
      />
      <button onClick={() => setCount(+count + 1)}> +1</button>
      <button onClick={() => setCount(count - 1)}> -1</button>
    </div>
  );
}

export default Counter;
