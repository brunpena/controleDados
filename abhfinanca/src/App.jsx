import * as C from './App.styles'
import { categories } from './data/categories'
import { itens } from './data/itens'
import { useState, useEffect } from 'react'
import { getCurrentMonth, filterListByMonth, saveData } from './helpers/helders.js'
import { TableArea } from './components/TableArea/index.jsx'
import { InfoArea } from './components/InfoArea/index.jsx'
import { InputArea } from './components/InputArea/index.jsx'
import { AreaIA } from './components/AreaIA/index.jsx'
import { EditModal } from './components/EditModal/index.jsx'

const App = () => {
  const [list, setList] = useState(itens)
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [filteredList, setFilteredList] = useState([])
  const [income, setIncome] = useState(0) // Estado para armazenar a renda total
  const [expense, setExpense] = useState(0) // Estado para armazenar a despesa total

  const [isEditModalOpen, setIsEditModalOpen] = useState(false) 
  const [editingItem, setEditingItem] = useState(null) 

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth]) // Atualiza a lista filtrada sempre que a lista ou o mês atual mudar

  useEffect(() => {
    let incomeTotal = 0
    let expenseTotal = 0

    for(let i in filteredList) {
      if(categories[filteredList[i].category].expense === 'red') {
        expenseTotal += filteredList[i].value // Soma as despesas
      } else {
        incomeTotal += filteredList[i].value // Soma as rendas
      }
    }

    setIncome(incomeTotal) // Atualiza a renda total
    setExpense(expenseTotal) // Atualiza a despesa total
  }, [filteredList]) // Atualiza a renda e despesa totais sempre que a lista filtrada mudar

  const handleMonthChange = (newMonth) => {
    setCurrentMonth(newMonth)
  }

  const handleAddItem = (item) => {
    let newList = [...list]
    newList.push(item)
    setList(newList) // Atualiza a lista com o novo item
  }

  const handleDeleteItem = (itemToDelete) => {
    const newList = list.filter(item => item.id !== itemToDelete.id);
    setList(newList);
    saveData(newList);
  }

  const handleEditClick = (item) => {
    setEditingItem(item);
    setIsEditModalOpen(true);
  }

  const handleSaveEdit = (editedItem) => {
    const newList = list.map(item => {
      item.id === editedItem.id ? editedItem : item
    })
    setList(newList)
    saveData(newList)
    setIsEditModalOpen(false)
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>ABH - Finanças</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea currentMonth={currentMonth} onMonthChange={handleMonthChange} income={income} expense={expense}/>
        <InputArea onAdd={handleAddItem} />
        <AreaIA item={filteredList} />
        <TableArea list={filteredList} onDelete={handleDeleteItem} onEdit={handleEditClick}/>
        {isEditModalOpen && 
          <EditModal 
            item={editingItem} 
            onSave={handleSaveEdit} 
            onClose={() => setIsEditModalOpen(false)} 
          />

        }
      </C.Body>
    </C.Container>
  )
}

export default App