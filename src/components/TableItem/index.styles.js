import styled from "styled-components";

export const TableLine = styled.tr`
    border-bottom: 1px solid #ccc;
    align-items: center;
    padding: 10px 0;
    &:hover {
        background-color: #f5f5f5;
    }
`

export const TableColumn = styled.td`
    padding: 10px 50px;
    text-align: center
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
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-size: 20px;
        margin: 0 5px;
    }
`
