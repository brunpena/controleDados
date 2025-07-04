import { categories } from '../../dados/categories'
import * as C from './index.styles'
import { useState } from 'react'
import { newDateAdjusted } from '../../funcoes/funcoes'

export const InputArea = ({ onAdd }) => {

  const [dateField, setDateField] = useState('')
  const [categoryField, setCategoryField] = useState('')
  const [titleField, setTitleField] = useState('')
  const [valueField, setValueField] = useState('')

  const categoryKeys = Object.keys(categories)

  const handleAddEvent = () => {
    if (isNaN(new Date(dateField).getTime())) {
      alert('Data inválida!')
      return
    }
    if (!categoryKeys.includes(categoryField)) {
      alert('Categoria inválida!')
      return
    }
    if (titleField.trim() === '') {
      alert('Título vazio!')
      return
    }
    if (isNaN(parseFloat(valueField)) || parseFloat(valueField) <= 0) {
      alert('Valor inválido!')
      return
    }

    onAdd({
      date: newDateAdjusted(dateField),
      category: categoryField,
      title: titleField.trim(),
      value: parseFloat(valueField)
    })

    clearFields()
  }

  const clearFields = () => {
    setDateField('')
    setCategoryField('')
    setTitleField('')
    setValueField('')
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
          <option></option>
          {categoryKeys.map((key) => (
            <option key={key} value={key}>{categories[key].title}</option>
          ))}
        </C.Select>
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Título</C.InputTitle>
        <C.Input type="text" value={titleField} onChange={e => setTitleField(e.target.value)} />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Valor</C.InputTitle>
        <C.Input type="number" value={valueField} onChange={e => setValueField(e.target.value)} />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>&nbsp;</C.InputTitle>
        <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
      </C.InputLabel>
    </C.Container>
  )
}
