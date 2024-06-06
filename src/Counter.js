import React, {useState} from "react";

function Counter() {

    const [curCount, setCurCount] = useState(0);

    const incrementCount = (e) => {
        setCurCount(previousCount => previousCount + 1);
    }

    const decrementCount = (e) => {
        if (curCount >= 1){
            setCurCount(previousCount => previousCount - 1);
        }else {
            alert('Decrement cannot go beyond 0. Try again!');
        }
        
    }


    return (
        <>
            <button style={{backgroundColor: 'aquamarine', padding: '10px'}} onClick={incrementCount}>Increment</button>
            <div style={{color: 'ivory', padding: '15px'}} >{curCount}</div>
            <button style={{backgroundColor: 'indianred', padding: '10px'}} onClick={decrementCount}>Decrement</button>
        </>
    );
    
}

export default Counter;