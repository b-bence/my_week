import React, {useState, useContext} from 'react'
import {PositivesContext} from './PositivesContext'
import BulletPointDiv from './BulletPointDiv'

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
        <BulletPointDiv>
            <div style={{height: "20%"}}><h1>Positives</h1></div>
            <div style={{height: "60%"}}>
                <h2>{firstValue}</h2>
                <h2>{secondValue}</h2>
                <h2>{thirdValue}</h2>
            </div>
            <div>
                <button onClick={randomize}>Randomize</button>
            </div>
            
        </BulletPointDiv>
    )
}


export default PositiveList