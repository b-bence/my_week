import React, {useState, createContext} from 'react'

export const NegativesContext = createContext();

export const Negatives = props =>{

    const [negatives, addNegative] = useState([
        "Unproductive Monday", "Git", "Merge conflict", 'Lazy Monday'
    ])

    return (
        <NegativesContext.Provider value={[negatives]}>
            {props.children}
        </NegativesContext.Provider>
    )

}