import React, {useState, useContext} from 'react'
import {PositivesContext} from './PositivesContext'
import BulletPointDiv from './BulletPointDiv'
import styled from 'styled-components'


const CustomHeader = styled.h2`
    margin: 10px;
    margin-left: 20px;
    padding: 10px;
`

const PositiveList = () => {
    const [values] = useContext(PositivesContext)

    const [firstValue, setFirstValue] = useState('')
    const [secondValue, setSecondValue] = useState('')
    const [thirdValue, setThirdValue] = useState('')
    const [fourthValue, setFourthValue] = useState('')

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

        value = newList[Math.floor(Math.random() * Math.floor(newList.length))]
        setFourthValue(value)
        index = newList.indexOf(value);
        newList.splice(index, 1);
    }
    
    return (
        <BulletPointDiv>
            <div style={{height: "15%"}}><h1>Positives</h1></div>
            <div style={{height: "60%", width: "100%", textAlign: "left"}}>
                <CustomHeader>{firstValue}</CustomHeader>
                <CustomHeader>{secondValue}</CustomHeader>
                <CustomHeader>{thirdValue}</CustomHeader>
                <CustomHeader>{fourthValue}</CustomHeader>
            </div>
            <div style={{height: "5%"}}>
                <button onClick={randomize}>Give me good stuff</button>
            </div>
            
        </BulletPointDiv>
    )
}


export default PositiveList