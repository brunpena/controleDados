import * as C from './App.styles'
import { categories } from './data/categories'
import { itens } from './data/itens'
import { useState, useEffect, use } from 'react'
import { getCurrentMonth, filterListByMonth } from './helders/helders'

const App = () => {
  const [list, setList] = useState(itens)
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [filteredList, setFilteredList] = useState([])

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }), [list, currentMonth]

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>ABH - Finanças</C.HeaderText>
      </C.Header>
      <C.Body>
        {}
        {}
        {}
      </C.Body>
    </C.Container>
  )
}

export default App