import { keyframes } from 'styled-components'

export const flip1 = (bookAngle) => keyframes`
        0% { transform: rotateX(${bookAngle}) rotateY(6deg); } 
        20% { transform: rotateX(${bookAngle}) rotateY(6deg); }
        80% { transform: rotateX(${bookAngle}) rotateY(174deg); } 
        100% { transform: rotateX(${bookAngle}) rotateY(174deg); }
    `
export const flip2 = keyframes`
    0%  { transform: rotateY(0deg) translateY(0px); } 
    20% { transform: rotateY(0deg) translateY(0px); }
    50% { transform: rotateY(-10deg) translateY(0px); }
`