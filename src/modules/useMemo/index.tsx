import { useMemo, useState } from "react";


    // Description: 


    /* useMemo is a React hook that allows you to memoize the result of a function. In this case the newValue is being assigned by the slow assignValueSlowly function. If I donot use the useMemo with that function it will slow down the whole component as it the component the re render the value every time even when the value is not changing. So it will recalculate the value every time. However, if I use useMemo with that function it will not slow down the component as the value will be compared if it was changed only then it will recalculate.
 */


    
export default function UseMemoExample() {

    const [value, setValue] = useState(0);
    const [slowValue, setSlowValue] = useState(0)
    const newValue :  any =  useMemo (() => assignValueSlowly(slowValue), [slowValue]) 

    return (
        <>
            <h1>UseMemo Example</h1>
            <div>
                <p>Fast Value: {value}</p>
                <input type="number" name="changeValue" id="change-value" onChange={(e) => {setValue(Number(e.target.value))}} placeholder="Change Fast Value" />
                <p>Slow Value: {newValue}</p>
                <input type="number" onChange={(e) => {
                    setSlowValue(Number(e.target.value))
                    assignValueSlowly(slowValue)}} />
            </div>
        </>
    )
}

const assignValueSlowly = (value: number) => {
  for (let index = 0; index < 1000000000; index++) {}
  return value
}

