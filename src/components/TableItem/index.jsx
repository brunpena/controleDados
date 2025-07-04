import * as C from './index.styles'
import { formatDate } from '../../funcoes/funcoes'
import { categories } from '../../dados/categories'

export const TableItem = ({ item, onDelete, onEdit }) => {

    const palavraMaiuscula = (str) => {
        if (typeof str !== 'string' || str.length === 0) {
            return str;
        }
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{palavraMaiuscula(item.title)}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[item.category].expense}>
                    R$ {Number(item.value).toFixed(2)}
                </C.Value>
            </C.TableColumn>
            <C.TableColumn>
                <C.Buttons>
                    <button onClick={() => onDelete(item)}>
                        ❌
                    </button>
                    <button onClick={() => onEdit(item)}>
                        ✏️
                    </button>
                    
                </C.Buttons>
            </C.TableColumn>
        </C.TableLine>
    )
}