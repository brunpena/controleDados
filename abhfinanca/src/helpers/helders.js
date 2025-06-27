export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${(now.getMonth() + 1)}`;
}

export const filterListByMonth = (list, date) => {
    let newList = [];
    let [year, month] = date.split('-');
    for (let i in list) {
        if (list[i].date.getFullYear() === parseInt(year) && 
        (list[i].date.getMonth() + 1) === parseInt(month)) {
            newList.push(list[i]);
        }
    }
    return newList;
}

export const formatDate = (date) => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return `${(day < 10 ? '0' : '') + day}/${(month < 10 ? '0' : '') + month}/${year}`;
}

export const formatCurrentMonth = (currentMonth) => {
    let [year, month] = currentMonth.split('-');
    let monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ]
    return `${monthNames[parseInt(month) - 1]} de ${year}`;
}

export const newDateAdjusted = (date) => {
    let [year, month, day] = date.split('-');
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
}

export const saveData = () => {
    
}