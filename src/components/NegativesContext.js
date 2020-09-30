import React, {useState, createContext} from 'react'

export const NegativesContext = createContext();

export const Negatives = props =>{

    const [negatives, addNegative] = useState([
        "Git", "Merge conflict", 'Lazy Monday', "No mentor help at Wednesday", "Some features took longer to implement", "Lack of sleep", "Coffee machine broke down", "Some concepts are still unclear", "Lost a team member"
    ])

    return (
        <NegativesContext.Provider value={[negatives]}>
            {props.children}
        </NegativesContext.Provider>
    )

}