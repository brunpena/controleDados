import * as C from './index.styles.js'
import { TableItem } from '../TableItem/index.jsx'

export const TableArea = ({ list, onDelete, onEdit }) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Título</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index)=> (
                    <TableItem key={index} item={item} onDelete={onDelete} onEdit={onEdit} />
                ))}
            </tbody>
        </C.Table>
        
    )

}