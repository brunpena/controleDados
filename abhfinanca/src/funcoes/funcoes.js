export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${(now.getMonth() + 1)}`;
}

export const filterListByMonth = (list, date) => {
  let newList = [];
  let [year, month] = date.split('-');

  for (let i in list) {
    let itemDate;

    const dateValue = list[i].date;

    if (!dateValue) {
      console.warn(`Item sem data:`, list[i]);
      continue; 
    }

    if (typeof dateValue === 'string') {
      if (dateValue.includes('/')) {
        // dd/mm/yyyy
        const [day, m, y] = dateValue.split('/');
        itemDate = new Date(`${y}-${m}-${day}`);
      } else if (dateValue.includes('-')) {
        // yyyy-mm-dd
        itemDate = newDateAdjusted(dateValue);
      } else {
        itemDate = new Date(dateValue);
      }
    } else if (dateValue instanceof Date) {
      itemDate = dateValue;
    } else {
      console.warn(`Formato de data não tratado:`, dateValue);
      itemDate = new Date(dateValue);
    }

    if (
      itemDate instanceof Date &&
      !isNaN(itemDate) &&
      itemDate.getFullYear() === parseInt(year) &&
      itemDate.getMonth() + 1 === parseInt(month)
    ) {
      newList.push(list[i]);
    }
  }

  return newList;
};

    

export const formatDate = (date) => {
  let theDate;

  if (!date) return '';

  if (date instanceof Date) {
    theDate = date;
  } else if (typeof date === 'string') {
    if (date.includes('/')) {
      // dd/mm/yyyy → Date
      const [day, month, year] = date.split('/');
      theDate = new Date(`${year}-${month}-${day}`);
    } else if (date.includes('-')) {
      // yyyy-mm-dd → Date
      const [year, month, day] = date.split('-');
      theDate = new Date(`${year}-${month}-${day}`);
    } else {
      theDate = new Date(date);
    }
  } else {
    theDate = new Date(date);
  }

  if (isNaN(theDate)) return '';

  let day = theDate.getDate();
  let month = theDate.getMonth() + 1;
  let year = theDate.getFullYear();

  return `${(day < 10 ? '0' : '') + day}/${(month < 10 ? '0' : '') + month}/${year}`;
};

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

export const formatDateToInput = (date) => {
    if (!date) return ''
    if (/^\d{4}-\d{2}-\d{2}$/.test(date)) return date

    const d = new Date(date)
    if (!isNaN(d)) {
        return d.toISOString().split('T')[0]
    }

    const parts = date.split('/')
    if (parts.length === 3) {
        return `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`
    }
    return ''
}

