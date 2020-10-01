import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import RandomizeButton from './RandomizeButton'

const HeaderDiv = styled.div`
    padding: 10px;
    background-color: #eeeeee;
    text-align: center;
    color: #222831;
`

const CustomLink = styled(Link)`
    color: #eeeeee;
    text-decoration: none;
`

const Header = () => {

    return (
        <HeaderDiv>
            <h1>My week</h1>

            <RandomizeButton style={buttonDesign}><CustomLink to='/' >Main page</CustomLink></RandomizeButton>
            <RandomizeButton style={buttonDesign}><CustomLink to='/summary' >Week summary</CustomLink></RandomizeButton>
            <RandomizeButton style={buttonDesign}><CustomLink to='/positives' >Positives & Negatives</CustomLink></RandomizeButton>
            <RandomizeButton style={buttonDesign}><CustomLink to='/memes' >Memes</CustomLink></RandomizeButton>
        </HeaderDiv>
    )
}

const buttonDesign = {
    backgroundColor: "#222831"
}

export default Header