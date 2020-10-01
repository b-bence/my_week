import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const HeaderDiv = styled.div`
    background-color: #eeeeee;
    text-align: center;

`

const Header = () => {

    return (
        <HeaderDiv>
            <h1 style={headerStyle}>My week</h1>

            <button><Link to='/' >Main page</Link></button>
            <button><Link to='/summary' >Week summary</Link></button>
            <button><Link to='/positives' >Positives & Negatives</Link></button>
            <button><Link to='/memes' >Memes</Link></button>
        </HeaderDiv>
    )


}

const headerStyle = {
    
}

export default Header