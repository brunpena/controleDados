import * as C from './index.styles'

export const ResumeItem = ({ title, value }) => {
    return (
        <C.Container>
            <C.Title>{title}</C.Title>
            <C.Value>R${}</C.Value>
        </C.Container>
    )
}