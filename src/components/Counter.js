import { React, useState } from 'react';

export default function Counter() {
    const [counter, setCounter] = useState(0);

    const updateCounter =(e,type)=>{
        e.preventDefault();
        let updater;
        switch(type)
        {
            case "INCREMENT":
                updater = counter + 1;
                setCounter(updater);
                break;
            case "DECREMENT":
                updater = counter - 1;
                if(counter !== 0)
                    setCounter(updater);
                break;
            default :
                console.log("default is exicuted");
        }
    }

    return (
        <div>
            <div style={{display : "flex",justifyContent : "center"}}>
                <button style={{width : "3rem", margin : "2px"}} onClick={e =>{updateCounter(e, "DECREMENT")}}>-</button>
                <h1>{counter}</h1>
                <button style={{width : "3rem", margin : "2px"}}  onClick={e =>{updateCounter(e, "INCREMENT")}}>+</button>
            </div>
        </div>
    )
}
