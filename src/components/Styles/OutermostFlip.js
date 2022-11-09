import styled from 'styled-components'
import {Flip} from './StyledFlip'
import {flip2} from '../utils/Keyframes'

export const OutermostFlip = styled(Flip)`
    border-width: 1px 0px 1px 1px;
    background-color:red;
    transform-origin: right;
    transform: rotateY(0deg) translateY(0px);
    // animation-name:  ${(props) => props.animate && flip2};
    // animation-duration: ${({speed}) => speed};
    // animation-timing-function: ease-in-out; 
    // animation-iteration-count: infinite;
    
`
