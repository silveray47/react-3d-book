import styled from 'styled-components'

const speed = '5s';
const borderColor = '#000';
const backgroundSize = 'cover' ;
const bookColor = '#d4b49c'
const width =  '300px'
const height = '400px'
const bookAngle = '20deg'

export const StyledPage = styled.div`
    width: ${(props) => props.width ? props.width : width };
    height:${(props) => props.height ? props.height : height};
    background-color: ${(props) => props.bookColor ? props.bookColor: bookColor };
    position: absolute;
    top: 0px; right: 50%;
    transform-origin: 100% 100%;
    border: solid ${(props) => props.borderColor ? props.borderColor: borderColor} 1px;
    background-size: ${backgroundSize};
    background-position: center;
    transform-style: preserve-3d;

        &:nth-child(1) {transform: rotateX(${(props) => props.bookAngle ? props.bookAngle : bookAngle}) rotateY(1deg); }
        &:nth-child(2) {transform: rotateX(${(props) => props.bookAngle ? props.bookAngle : bookAngle}) rotateY(2deg); }
        &:nth-child(3) { transform: rotateX(${(props) => props.bookAngle ? props.bookAngle : bookAngle}) rotateY(3deg); }
        &:nth-child(4) {
            transform: rotateX(${(props) => props.bookAngle ? props.bookAngle : bookAngle}) rotateY(4deg);
            animation: nextPage ${speed}*5 infinite ${speed}*-4.8 steps(1);
            background-size: ${backgroundSize};
            background-position: -1px -1px;
        }

        &:nth-child(5) { transform: rotateX(${(props) => props.bookAngle ? props.bookAngle : bookAngle}) rotateY(179deg); }
        &:nth-child(6) { transform: rotateX(${(props) => props.bookAngle ? props.bookAngle : bookAngle}) rotateY(178deg); }
        &:nth-child(7) { transform: rotateX(${(props) => props.bookAngle ? props.bookAngle : bookAngle}) rotateY(177deg); }
        &:nth-child(8) {
            transform: rotateX(${(props) => props.bookAngle ? props.bookAngle : bookAngle}) rotateY(176deg);
            overflow: hidden;
        }
`
