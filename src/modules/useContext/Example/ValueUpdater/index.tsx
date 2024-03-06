import { useState } from "react";
import {  useValue, useValueUpdate } from "../../ValueContext";


export default function ValueUpdater() {
    const currentValue : any = useValue();
    const updateValue : any = useValueUpdate();
    const [valueEntered, setValueEntered] : any = useState(0); 

    return (
      <div>
        currentValue is {currentValue}
        <br />
        updateValue 
        <br />
        <input type="number" onChange={(e) => setValueEntered(e.target.value)}/>
        <button onClick={() => updateValue(valueEntered)}>Update Value</button>
      </div>
    );
}