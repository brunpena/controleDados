import * as C from './App.styles'
import { categories } from './data/categories'
import { itens } from './data/itens'
import { useState, useEffect } from 'react'
import { getCurrentMonth, filterListByMonth } from './helpers/helders.js'
import { TableArea } from './components/TableArea/index.jsx'
import { InfoArea } from './components/InfoArea/index.jsx'
import { InputArea } from './components/InputArea/index.jsx'
import { AreaIA } from './components/AreaIA/index.jsx'

const App = () => {
  const [list, setList] = useState(itens)
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [filteredList, setFilteredList] = useState([])
  const [income, setIncome] = useState(0) // Estado para armazenar a renda total
  const [expense, setExpense] = useState(0) // Estado para armazenar a despesa total

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

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>ABH - Finanças</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea currentMonth={currentMonth} onMonthChange={handleMonthChange} income={income} expense={expense}/>
        <InputArea onAdd={handleAddItem} />
        <TableArea list={filteredList}/>
        <AreaIA item={filteredList} />
      </C.Body>
    </C.Container>
  )
}

export default App