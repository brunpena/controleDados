import * as C from './index.styles'
import { formatCurrentMonth } from '../../helders/helders'
import { ResumeItem } from '../ResumeItem/index'

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }) => {
    
    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() - 1); // Subtrai um mês
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    };

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1); // Aumenta um mês
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    return (
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={handlePrevMonth}>&larr;</C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={handleNextMonth}>&rarr;</C.MonthArrow>

            </C.MonthArea>
            <C.ResumeArea>
                <ResumeItem title='Receitas' value={income}/>
                <ResumeItem title='Despesas' value={expense}/>
                <ResumeItem title='Balanço' value={income - expense}/>
            </C.ResumeArea>
        </C.Container>
    )
}