import styled from 'styled-components'



const speed = '5s';
const  borderColor = '#555';
const  backgroundSize = 'cover' ;


export const StyledPage = styled.div`
    width: ${({width}) => width };
    height:${({height}) => height };
    background-color: ${({bookColor}) => bookColor};
    position: absolute;
    top: 0px; right: 50%;
    transform-origin: 100% 100%;
    border: solid ${(borderColor)} 1px;
    background-size: ${backgroundSize};
    background-position: center;
    transform-style: preserve-3d;

        &:nth-child(1) {transform: rotateX(${({bookAngle}) => bookAngle}) rotateY(1.5deg); }
        &:nth-child(2) {transform: rotateX(${({bookAngle}) => bookAngle}) rotateY(3deg); }
        &:nth-child(3) { transform: rotateX(${({bookAngle}) => bookAngle}) rotateY(4.5deg); }
        &:nth-child(4) {
            transform: rotateX(${({bookAngle}) => bookAngle}) rotateY(6deg);
            animation: nextPage ${speed}*5 infinite ${speed}*-4.8 steps(1);
            background-size: ${backgroundSize};
            background-position: -1px -1px;
        }

        &:nth-child(5) { transform: rotateX(${({bookAngle}) => bookAngle}) rotateY(178.5deg); }
        &:nth-child(6) { transform: rotateX(${({bookAngle}) => bookAngle}) rotateY(177deg); }
        &:nth-child(7) { transform: rotateX(${({bookAngle}) => bookAngle}) rotateY(175.5deg); }
        &:nth-child(8) {
            transform: rotateX(${({bookAngle}) => bookAngle}) rotateY(174deg);
            overflow: hidden;
        }
`





// width: ${pageSize}px;
// height: ${pageSize*pageRatio}px;