import React from "react";

export const Counter = (props) => {

    const [counter, setCounter] = React.useState(0);

    return <div>
        <h1>Counter</h1>
        <p data-testid={"counter"}>{counter}</p>
        <button data-testid={"incrementBtn"} onClick={() => setCounter(counter + 1)} >Increment</button>
        <button data-testid={"decrementBtn"} onClick={() => setCounter(counter - 1)} >Decrement</button>
    </div>
}