import * as C from './App.styles'
import { categories } from './dados/categories'
import { itens } from './dados/itens'
import { useState, useEffect } from 'react'
import { getCurrentMonth, filterListByMonth, saveData } from './funcoes/funcoes.js'
import { TableArea } from './components/TableArea/index.jsx'
import { InfoArea } from './components/InfoArea/index.jsx'
import { InputArea } from './components/InputArea/index.jsx'
import { AreaIA } from './components/AreaIA/index.jsx'
import { EditModal } from './components/EditModal/index.jsx'

const App = () => {
  const [list, setList] = useState(() => {
    const saved = localStorage.getItem('dados')
    return saved ? JSON.parse(saved) : itens
  })
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
    const newItem = {
      ...item,
      id: Date.now() + Math.floor(Math.random() * 1000)
    }
    const saved = localStorage.getItem('dados')
    const currentList = saved ? JSON.parse(saved) : []
    const newList = [...currentList, newItem]
    saveData(newList)
    setList(newList)
    console.log('Item adicionado:', newItem)
  }



  const handleDeleteItem = (itemToDelete) => {
    console.log('Item a ser deletado:', itemToDelete);
    const newList = list.filter(item => item.id !== itemToDelete.id);
    console.log(newList)
    setList(newList);
    saveData(newList);
  }

  const handleEditClick = (item) => {
    setEditingItem(item);
    setIsEditModalOpen(true);
  }

  const handleSaveEdit = (editedItem) => {
    const newList = list.map(item => 
      item.id === editedItem.id ? editedItem : item
    )
    setList(newList)
    saveData(newList)
    setIsEditModalOpen(false)
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderImage src="/logobranco.png" alt="Logo ABH - Finanças" />
      </C.Header>
      <C.Body>
        <InfoArea currentMonth={currentMonth} onMonthChange={handleMonthChange} income={income} expense={expense}/>
        <InputArea onAdd={handleAddItem} />
        {console.log(` itens ${itens}`)}
        <AreaIA item={filteredList} />
        <TableArea list={filteredList} onDelete={handleDeleteItem} onEdit={handleEditClick}/>
        {isEditModalOpen && 
          <EditModal item={editingItem} onSave={handleSaveEdit} onClose={() => setIsEditModalOpen(false)} />
        }
      </C.Body>
    </C.Container>
  )
}

export default App