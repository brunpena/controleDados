import * as C from './index.styles'

export const ResumeItem = ({ title, value, color }) => {
    return (
        <C.Container>
            <C.Title>{title}</C.Title>
            <C.Value color={color}>R${Number(value).toFixed(2)}</C.Value>
        </C.Container>
    )
}