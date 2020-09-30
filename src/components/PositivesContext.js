import React, {useState, createContext} from 'react'

export const PositivesContext = createContext();

export const Positives = props =>{

    const [positives, addPositive] = useState([
        'Relaxed week','Good teamwork','Effective communication', "1","2","3","4","5","6"
    ])

    // const [negatives, addNegative] = useState([
    //     "Unproductive Monday", "Git", "Merge conflict"
    // ])

    return (
        <PositivesContext.Provider value={[positives]}>
            {props.children}
        </PositivesContext.Provider>
    )

}