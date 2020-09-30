import React, {useState} from 'react'
import BulletPointDiv from './BulletPointDiv'


const WeekSummary = () =>{

    const monday = ["Sprint plan", "Understanding the code", "Slow start", "Babzsak session"]
    let [mondayDisplay, addToMonday] = useState([]) 

    const tuesday = ["Pair programming", "Planning and understanding"]
    let [tuesdayDisplay, addToTuesday] = useState([])

    const wednesday = ["Pair programming", "Socializing", "Active coding", "Finished many tasks", "Refactor"]
    let [wednesdayDisplay, addToWednesday] = useState([])

    const thursday = ["Creating presentation", "Fixing bugs", "Extra features", "Last minute merge conflict", "Pair programming", "Finished most of the project"]
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

        addToFriday("Demo")


    }

    function fillUpList(day, dayList, setter){
        let value;

        value = day[Math.floor(Math.random() * Math.floor(day.length))]
        setter( dayList => [...dayList, value])
        let index = day.indexOf(value);
        day.splice(index, 1); 
    }

    return (
        <BulletPointDiv> 

        <div>
            <h1>Week Summary</h1>
        </div>

        <div>
            <h2>Monday: {mondayDisplay.toString()}</h2>
            <h2>Tuesday: {tuesdayDisplay.toString()}</h2>
            <h2>Wednesday: {wednesdayDisplay.toString()}</h2>
            <h2>Thursday: {thursdayDisplay.toString()}</h2>
            <h2>Friday: {fridayDisplay.toString()}</h2>
        </div>
        <div>
        <button onClick={randomize}>Randomize</button>
        </div>
        </BulletPointDiv>
    )

}

export default WeekSummary