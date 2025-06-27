import { categories } from '../../data/categories'
import * as C from './index.styles'
import { useState } from 'react'
import { newDateAdjusted } from '../../helpers/helders'

export const InputArea = ({ onAdd }) => {

    const [dateField, setDateField] = useState('')
    const [categoryField, setCategoryField] = useState('')
    const [titleField, setTitleField] = useState('')
    const [valueField, setValueField] = useState(0)

    let categoryKeys = Object.keys(categories)

    const handleAddEvent = () => {
        if(isNaN(new Date(dateField).getTime())) {
        alert('Data inválida!');
        return
        }
        if(!categoryKeys.includes(categoryField)) {
        alert('Categoria inválida!');
        return
        }
        if(titleField === '') {
        alert('Título vazio!');
        return
        }
        if(valueField <= 0) {
        alert('Valor inválido!');
        return
        } else {
        onAdd({
            date: newDateAdjusted(dateField),
            category: categoryField,
            title: titleField,
            value: valueField
        });
        clearFields();
        }
    }

    const clearFields = () => {
        setDateField('')
        setCategoryField('')
        setTitleField('')
        setValueField(0)
    }

    return (
        <C.Container>
        <C.InputLabel>
          <C.InputTitle>Data</C.InputTitle>
          <C.Input type="date" value={dateField} onChange={e => setDateField(e.target.value)} />
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>Categoria</C.InputTitle>
          <C.Select value={categoryField} onChange={e => setCategoryField(e.target.value)}>
            <>
              <option></option>
              {categoryKeys.map((key, index) => (
                <option key={index} value={key}>{categories[key].title}</option>
              ))}
            </>
          </C.Select>
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>Título</C.InputTitle>
          <C.Input type="text" value={titleField} onChange={e => setTitleField(e.target.value)} />
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>Valor</C.InputTitle>
          <C.Input type="number" value={valueField} onChange={e => setValueField(parseFloat(e.target.value))} />
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>&nbsp;</C.InputTitle>
          <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
        </C.InputLabel>
      </C.Container>
    )
}