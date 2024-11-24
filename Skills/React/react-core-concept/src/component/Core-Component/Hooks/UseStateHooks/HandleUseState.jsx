import React, { useState } from 'react';

const HandleUseState = () => {
    const [count,setCount] = useState(0)

    const handleClick =(state)=>{
        if(state==="add"){
            const countState = count + 1 ;
            setCount(countState);
        }
        else{
            const countState = count - 1 ;
            setCount(countState);
        }
       
    }
    return (
        <div>
            <h1> Wellcome to use state World </h1>
            <h3>Count : {count}</h3>
            <button onClick={()=>handleClick("add")}>Add</button>
            <button onClick={()=>handleClick("rem")}>Remove</button>
        </div>
    );
};

export default HandleUseState;