import { useState } from "react";

function Counter(){
    let [count, setCount] = useState(0);
    return (
        <>
        <div className="increment">
            <h4>{count}</h4>
            <button onClick={() => setCount(count+1)}>Increment</button>
        </div>
        <div className="decrement">
            <button onClick={() => setCount(count-1)}>Decrement</button>
        </div>
        <div className="reset">
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
        </>
    );
}

export default Counter;