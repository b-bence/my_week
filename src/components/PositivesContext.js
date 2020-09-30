import React, {useState, createContext} from 'react'

export const PositivesContext = createContext();

export const Positives = props =>{

    const [positives, addPositive] = useState([
        'Relaxed week','Good teamwork','Good communication', "Balance between teamwork and individual work", "Could follow the plan", "Big challenge", "Learned a lot of new things", "New team member"
        
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