import React, { useEffect, useState, useCallback } from "react";


// Description: 
// useCallback and useMemo is lmost similar the diff is that it returns a memoized FUNCTION. useMemo will only recompute the memoized VALUE if one of the dependencies has changed. useCallback will recompute the memoized value if one of the dependencies has changed.

export const UseCallbackExample = () => {
    const [number, setNumber] = React.useState(0);
    const [darkTheme, setDarkTheme] = React.useState(false);
    const incrementItems = useCallback(() => {
        for (let index = 0; index < 1000000000; index++) {}
        return [number, number + 1, number + 2 ]
    }, [number])

    return (
        <div style={{backgroundColor: darkTheme ? "black" : "white", color: darkTheme ? "white" : "black"}}>
            <h1>UseCallback Example</h1>
            <button style={{margin: "10px", backgroundColor: darkTheme ? "white" : "black", color: darkTheme ? "black" : "white"}} onClick={() => setDarkTheme(!darkTheme)}>Toggle Theme</button>
            <input type="number" placeholder="Count" onChange={(e) => setNumber(Number(e.target.value))}/>
            <h3>Items now</h3>
            <ListItems getItems={incrementItems}/>
        </div>
    )
}

const ListItems = ({getItems}: any)  => {

    const [listItems, setListItems] = useState([]);

    useEffect(() => {
        console.log("useEffect Called in ListItems")
        setListItems(getItems())
    }, [getItems])

    return (
        listItems.map(item => (
            <li>{item}</li>
        ))
    )
}