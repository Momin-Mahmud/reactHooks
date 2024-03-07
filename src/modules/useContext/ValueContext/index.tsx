import React, { useContext, useState } from "react";

//Description:

/* ValueContext is a React hook that allows you to create a context. This helps children to access value without passing them through props. This can be used a Redux alternative by storing the values in localStorage. I have created customHooks for useContext to be accessible in child components so that all the code related to the updation of value is within the context and now need to write extra code in child componnets. Child is wrapped in the context provider to access the value */

const ValueContext : any = React.createContext(0)
const ValueContextUpdate : any = React.createContext(0)

export const useValue = () => {
    return useContext(ValueContext)
}

export const useValueUpdate = () => {
    return useContext(ValueContextUpdate)
}


export const ValueProvider = ({children}: any) =>{
    const [value, setValue] = useState(Number(localStorage.getItem("value")) || 0);
    const setNewValue = (newValue: number) => {
        setValue(newValue);
        localStorage.setItem("value", newValue.toString());
    }
    return (
        <ValueContext.Provider value={value}>
            <ValueContextUpdate.Provider value={setNewValue}>
            {children}
            </ValueContextUpdate.Provider>
        </ValueContext.Provider>
    )

}