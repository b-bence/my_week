import React from 'react'
import ContainerDiv from './ContainerDiv'
import BulletPointDiv from './BulletPointDiv'
import styled from 'styled-components'

const CustomBulletPointDiv = styled(BulletPointDiv)`
    height: 400px;
    justify-content: initial ;
    align-items: initial;
`

const MainPage = () =>{

    return (
        <ContainerDiv>
            <CustomBulletPointDiv>
                
                <h2 style={headerStyle}>Do you need to make a presentation, but nothing interesting happened at the week? Or you're just lazy and want something quick?</h2>
                
               
                <h3 style={headerStyle}>Worry no more! This website gives you: </h3>

                <ul style={{marginTop: "0px"}}>
                    <li>Weekly summaries</li>
                    <li>Good and Bad things about your project/week</li>
                    <li>And of course a good variety of meme collection</li>
                </ul>
                
                <h3 style={headerStyle}>So go on, select what you need from the header above and copy the content to your slides!</h3>

            </CustomBulletPointDiv>
        </ContainerDiv>

    )

}

const headerStyle = {
    margin: "20px", 
    textAlign: "center"
}

export default MainPage