import styled from "styled-components";

export const TableLine = styled.tr`

`

export const TableColumn = styled.td`
    padding: 10px 0;
`

export const Cleaner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    button {
        background-color: transparent;
        border: none;
        color: #FF0000;
        font-size: 20px;
        cursor: pointer;
    }
`

export const Category = styled.div`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #FFF;
    background-color: ${props => props.color || '#000'};
`

export const Value = styled.div`
    color: ${props => props.color || '#000'};
    font-weight: bold;
    text-align: left;
`

export const Buttons = styled.div`
`
