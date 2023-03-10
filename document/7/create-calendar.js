const createCalendar = (elem, year, month) => {
  const table = document.createElement('table');
  const date = new Date(year, month - 1);
  const dayNames = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

  const getDay = (date) => {
    let day = date.getDay();
    if (day === 0) {
      day = 7;
    }

    return day - 1;
  }

  const tableHeadRow = document.createElement('tr');
  dayNames.forEach((dayName) => {
    const tableHead = document.createElement('th');
    tableHead.textContent = dayName;

    tableHeadRow.append(tableHead);
  });

  const tableRowFirst = document.createElement('tr');
  for (let i = 0; i < getDay(date); i++) {
    const td = document.createElement('td');

    tableRowFirst.append(td);
  }

  while (tableRowFirst.children.length !== 7) {
    const td = document.createElement('td');
    td.textContent = date.getDate();

    tableRowFirst.append(td);

    date.setDate(date.getDate() + 1);
  }

  table.append(tableHeadRow);
  table.append(tableRowFirst);

  while (date.getMonth() === month - 1) {
    const tr = document.createElement('tr');

    for (let i = 0; i < 7; i++) {
      const td = document.createElement('td');
      td.textContent = date.getDate();

      tr.append(td);

      if (date.getDate() !== 1) {
        date.setDate(date.getDate() + 1);
      } else {
        td.textContent = '';
      }
    }

    table.append(tr);
  }

  elem.append(table);
};
