import * as C from './App.styles'
import { categories } from './data/categories'
import { itens } from './data/itens'
import { useState, useEffect } from 'react'
import { getCurrentMonth, filterListByMonth } from './helders/helders'
import { TableArea } from './components/TableArea/index.jsx'
import { InfoArea } from './components/InfoArea/index.jsx'

const App = () => {
  const [list, setList] = useState(itens)
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [filteredList, setFilteredList] = useState([])
  const [income, setIncome] = useState(0) // Estado para armazenar a renda total
  const [expense, setExpense] = useState(0) // Estado para armazenar a despesa total

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth]) // Atualiza a lista filtrada sempre que a lista ou o mês atual mudar

  const handleMonthChange = (newMonth) => {
    setCurrentMonth(newMonth)
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>ABH - Finanças</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea currentMonth={currentMonth} onMonthChange={handleMonthChange} income={income} expense={expense}/>
        {}
        <TableArea list={filteredList}/>
      </C.Body>
    </C.Container>
  )
}

export default App