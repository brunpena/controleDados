import * as C from './index.styles'
import { formatDate } from '../../helders/helders'
import { categories } from '../../data/categories'

export const TableItem = ({ item }) => {
    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[item.category].expense}>
                    R$ {item.value}
                </C.Value>
            </C.TableColumn>
        </C.TableLine>
    )
}