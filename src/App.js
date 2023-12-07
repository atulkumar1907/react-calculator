import React, { useState } from "react"
import './App.css';

const App = ()=>{
    const [result, setResult] = useState("");

    const handleClick = (e)=>{
        setResult(result.concat(e.target.innerText));
        console.log(e.target.innerText)
    }

    const clear= ()=>{
        setResult("");
    }

    const backSpace = ()=>{
        setResult(result.slice(0, -1));
    }

    const calculate=()=>{
        setResult(eval(result));
    }

    return (
        <>
            <div className="container">
                <form>
                    <input type="text" value={result}></input>
                </form>
                <div className="keypad">
                    <button className="highlight" id="clear" onClick={clear}>Clear</button>
                    <button className="highlight"  id="backspace" onClick={backSpace}>C</button>
                    <button className="highlight" onClick={handleClick}>&divide;</button>
                    <button onClick={handleClick}>7</button>
                    <button onClick={handleClick}>8</button>
                    <button onClick={handleClick}>9</button>
                    <button className="highlight" onClick={handleClick}>&times;</button>
                    <button onClick={handleClick}>4</button>
                    <button onClick={handleClick}>5</button>
                    <button onClick={handleClick}>6</button>
                    <button className="highlight" onClick={handleClick}>&ndash;</button>
                    <button onClick={handleClick}>1</button>
                    <button onClick={handleClick}>2</button>
                    <button onClick={handleClick}>3</button>
                    <button className="highlight" onClick={handleClick}>+</button>
                    <button onClick={handleClick}>0</button>
                    <button className="highlight" onClick={handleClick}>.</button>
                    <button className="highlight" id="result" onClick={calculate}>=</button>
                </div>
            </div>
        </>
    )
}

export default App;