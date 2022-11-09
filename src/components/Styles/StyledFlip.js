import styled from 'styled-components'
import {flip2} from '../utils/Keyframes'


export const Flip = styled.div`
    width:${(props) => props.FlipWidth};
    height: ${(props) => props.height};
    position: absolute;
    transform-origin: 100% 100%;
    top: -1px;
    right: calc(100% - 1px);
    border: solid #555;
    border-width: 1px 0px;
    perspective: $flipPerspective;
    perspective-origin: center; 
    transform-style: preserve-3d;
    background-size: cover;
    background-color: ${(props) => props.pageColor};

    transform-style: preserve-3d;
    transform: rotateY(0deg) translateY(0px);
    animation-name:  ${(props) => props.animate && flip2};
    animation-duration: ${(Props) => Props.speed};
    animation-timing-function: ease-in-out; 
    // animation-iteration-count: infinite;
    animation-fill-mode: forwards;


    &:after {
        content: '';
        position: absolute;
        top: 0px; right: 0%;
        width: 100%; height: 100%;
        transform-origin: center;
        background-size: cover;
    }
`
