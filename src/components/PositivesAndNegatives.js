import React from 'react'
import PositiveList from './PositiveList'
import NegativeList from './NegativeList'
import {Positives} from './PositivesContext'
import {Negatives} from './NegativesContext'
import styled from 'styled-components'


const ContainerDiv = styled.div`
    width: 100%;
    margin: 0 auto;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;`

const PositivesAndNegatives = props =>{

    return(
        <Positives>
            <Negatives>

            <ContainerDiv>
            <PositiveList></PositiveList>
            <NegativeList></NegativeList>

            </ContainerDiv>

            </Negatives>
        </Positives>

    )
}


export default PositivesAndNegatives