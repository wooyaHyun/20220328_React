// A04Styled.js
import styled from 'styled-components'

export const Box = styled.div`
    background-color: ${props => props.color || 'lightgray' };
    color: white;
    font-size: 24pt;
    padding: 10px;
    font-weight: bold;
`
export const Button = styled.button`
    background-color: ${props => props.color || 'lightgray' };
    color: white;
    padding: 4px;
    font-weight: bold;
    border: 1px solid gray;

    &:hover {
        background-color: white;
        color: gray;
    }
    & + & {
        margin: 5px;
    }
`
