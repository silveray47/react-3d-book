import styled from 'styled-components'
import {Flip} from './StyledFlip'
import {flip1} from '../utils/Keyframes'


export const InnermostFlip = styled(Flip)`
    width:${(props) => props.FlipWidth};
    background-color:red;
    right: 50%;
    top: 0;
    border-width: 1px 1px 1px 0px;
    transform:  rotateX(${(props) => props.bookAngle}) rotateY(6deg);
    animation-name:  ${props => props.animate && flip1(props.bookAngle)};
    animation-duration: ${({speed}) => speed};
    animation-timing-function: ease-in-out; 
    // animation-iteration-count: infinite;
    animation-fill-mode: forwards;

`
 