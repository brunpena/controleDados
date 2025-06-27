import * as C from './index.styles'

export const ResumeItem = ({ title, value, color }) => {
    return (
        <C.Container>
            <C.Title>{title}</C.Title>
            <C.Value color={color}>R${value}</C.Value>
        </C.Container>
    )
}