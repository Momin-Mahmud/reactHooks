import React, { useState } from "react";

//Description :

/* useRef is a React hook that allows you to create a mutable reference. In this case the prevValue is being assigned by the updateStoringPrevValue function. If i use useEffect to check what my prev value it will cause re renders infinitely. but useRef automatically stores prevValue as the value persists along single component render */

export default function RefExample() {

    const [value, setValue] = React.useState<number>(0);
    const [inputValue, setInputValue] = useState<number>(0);
    const prevValue  = React.useRef<number>();

    const updateStoringPrevValue = (value: number) => {
        prevValue.current = value;
    }

    return (
        <div>
            <h1>UseRef Example</h1>
            <div>
                <p>Current Value: {value}</p>
                <p>Previous Value: {prevValue.current}</p>
                <input type="number" name="changeValue" id="change-value" onChange={(e) => setInputValue(Number(e.target.value))} placeholder="Change Value" />
                <button onClick={() => {
                    updateStoringPrevValue(value);
                    setValue(inputValue)}}>Change Value</button>
            </div>
        </div>
    );
}