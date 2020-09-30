import React, {useState, useContext} from 'react'
import {PositivesContext} from './PositivesContext'

const PositiveList = () => {
    const [values] = useContext(PositivesContext)

    const [firstValue, setFirstValue] = useState('')
    const [secondValue, setSecondValue] = useState('')
    const [thirdValue, setThirdValue] = useState('')

    const randomize = () =>{
        const newList = [...values]

        let value = newList[Math.floor(Math.random() * Math.floor(newList.length))]
        setFirstValue(value)
        let index = newList.indexOf(value);
        newList.splice(index, 1); 

        value = newList[Math.floor(Math.random() * Math.floor(newList.length))]
        setSecondValue(value)
        index = newList.indexOf(value);
        newList.splice(index, 1);

        value = newList[Math.floor(Math.random() * Math.floor(newList.length))]
        setThirdValue(value)
        index = newList.indexOf(value);
        newList.splice(index, 1);
    }
    
    return (
        <div>
            <h1>{firstValue}</h1>
            <h1>{secondValue}</h1>
            <h1>{thirdValue}</h1>
            <button onClick={randomize}>Randomize</button>
        </div>
    )
}

export default PositiveList