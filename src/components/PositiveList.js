import React, {useState, useContext} from 'react'
import {PositivesContext} from './PositivesContext'
import BulletPointDiv from './BulletPointDiv'
import styled from 'styled-components'
import RandomizeButton from './RandomizeButton'


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
        let newList = [...values]

        newList = setValue(newList, setFirstValue)
        newList = setValue(newList, setSecondValue)
        newList = setValue(newList, setThirdValue)
        newList = setValue(newList, setFourthValue)
    }
    
    function setValue (elementList, valueFunction) {
        let value = elementList[Math.floor(Math.random() * Math.floor(elementList.length))]
        valueFunction(value)
        let index = elementList.indexOf(value);
        elementList.splice(index, 1); 
        return elementList;
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
                <RandomizeButton onClick={randomize}>Give me good stuff</RandomizeButton>
            </div>
            
        </BulletPointDiv>
    )
}


export default PositiveList