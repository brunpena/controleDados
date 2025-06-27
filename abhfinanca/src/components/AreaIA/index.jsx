import * as C from './index.styles'

export const AreaIA = ({ item }) => {

    const analyzeData = (data) => {

    }

    return (
        <C.Container>
            <C.Analise>Analíse Por IA</C.Analise>
            <C.Result>{analyzeData(item)}</C.Result>
        </C.Container>
    )
}