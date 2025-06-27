import styled from 'styled-components';

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0 0 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: -40px;
    display: flex;
    align-items: center;
`

export const MonthArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

export const MonthArrow = styled.div`
    width: 40px;
    text-align: center;
    cursor: pointer;
    user-select: none;
    font-size: 30px;
    color: #333;
    transition: all ease .3s;

    &:hover {
        color: #000;
        transform: scale(1.2);
    }
`

export const MonthTitle = styled.div`
    flex: 1;
    text-align: center;
    font-size: 20px;
`

export const ResumeArea = styled.div`
    flex: 2;
    display: flex;
`