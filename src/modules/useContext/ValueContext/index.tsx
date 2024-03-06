import React, { useContext, useState } from "react";

const ValueContext : any = React.createContext(0)
const ValueContextUpdate : any = React.createContext(0)

export const useValue = () => {
    return useContext(ValueContext)
}

export const useValueUpdate = () => {
    return useContext(ValueContextUpdate)
}


export const ValueProvider = ({children}: any) =>{
    const [value, setValue] = useState(0);
    const setNewValue = (newValue: number) => {
        setValue(newValue);
    }
    return (
        <ValueContext.Provider value={value}>
            <ValueContextUpdate.Provider value={setNewValue}>
            {children}
            </ValueContextUpdate.Provider>
        </ValueContext.Provider>
    )

}