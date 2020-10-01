import React from 'react'
import PositiveList from './PositiveList'
import NegativeList from './NegativeList'
import {Positives} from './PositivesContext'
import {Negatives} from './NegativesContext'
import styled from 'styled-components'
import ContainerDiv from './ContainerDiv'

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