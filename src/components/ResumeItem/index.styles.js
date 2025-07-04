import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
`

export const Title = styled.div`
    text-align: center;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
`

export const Value = styled.div`
    text-align: center;
    font-size: 18px;
    color: ${props => props.color || '#000'};
    font-weight: bold;
    margin-bottom: 20px;
`