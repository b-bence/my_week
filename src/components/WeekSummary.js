import React, {useState} from 'react'
import BulletPointDiv from './BulletPointDiv'
import styled from 'styled-components'
import RandomizeButton from './RandomizeButton'
import ContainerDiv from './ContainerDiv'

const CustomHeader = styled.h2`
    margin: 10px;
    padding: 12px;
    `

const CustomBulletPointDiv = styled(BulletPointDiv)`
    width: 850px;
`


const WeekSummary = () =>{

    const monday = [" sprint plan", " understanding the code", " slow start", " babzsák session"]
    let [mondayDisplay, addToMonday] = useState([]) 

    const tuesday = [" pair programming", " planning and understanding", " brainstorming", " finished many tasks"]
    let [tuesdayDisplay, addToTuesday] = useState([])

    const wednesday = [" pair programming", " socializing", " active coding", " refactor", " added CSS to project", " debugging"]
    let [wednesdayDisplay, addToWednesday] = useState([])

    const thursday = [" creating presentation", " fixing bugs", " extra features", " last minute merge conflict", " pair programming", " finished most of the project"]
    let [thursdayDisplay, addToThursday] = useState([])

    let [fridayDisplay, addToFriday] = useState([])

    const randomize = () =>{
        addToMonday([]) 
        addToTuesday([])
        addToWednesday([])
        addToThursday([])
        addToFriday([])

        const mondayClone = [...monday]
        const tuesdayClone = [...tuesday]
        const wednesdayClone = [...wednesday]
        const thursdayClone = [...thursday]

        fillUpList(mondayClone, mondayDisplay, addToMonday)
        fillUpList(mondayClone, mondayDisplay, addToMonday)

        fillUpList(tuesdayClone, tuesdayDisplay, addToTuesday)
        fillUpList(tuesdayClone, tuesdayDisplay, addToTuesday)

        fillUpList(wednesdayClone, wednesdayDisplay, addToWednesday)
        fillUpList(wednesdayClone, wednesdayDisplay, addToWednesday)

        fillUpList(thursdayClone, thursdayDisplay, addToThursday)
        fillUpList(thursdayClone, thursdayDisplay, addToThursday)

        addToFriday(" demo")


    }

    function fillUpList(day, dayList, setter){
        let value;

        value = day[Math.floor(Math.random() * Math.floor(day.length))]
        setter( dayList => [...dayList, value])
        let index = day.indexOf(value);
        day.splice(index, 1); 
    }

    return (
        <ContainerDiv>
        <CustomBulletPointDiv> 

        <div style={{height: "15%"}}>
            <h1>Week summary</h1>
        </div>

        <div style={{height: "70%", width: "100%", textAlign: "left"}}>
            <CustomHeader>Monday: {mondayDisplay.toString()}</CustomHeader>
            <CustomHeader>Tuesday: {tuesdayDisplay.toString()}</CustomHeader>
            <CustomHeader>Wednesday: {wednesdayDisplay.toString()}</CustomHeader>
            <CustomHeader>Thursday: {thursdayDisplay.toString()}</CustomHeader>
            <CustomHeader>Friday: {fridayDisplay.toString()}</CustomHeader>
        </div>
        <div style={{height: "5%"}}>
        <RandomizeButton onClick={randomize}>Show my week</RandomizeButton>
        </div>
        </CustomBulletPointDiv>
        </ContainerDiv>
    )

}

const headerStyle = {
    margin: "10px"
}

export default WeekSummary