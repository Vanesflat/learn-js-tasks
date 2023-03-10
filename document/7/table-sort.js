const table = document.querySelector('table');
const nameCol = Array.from(table.rows).slice(1);
const sortedRows = nameCol.sort((a, b) => a.firstElementChild.textContent > b.firstElementChild.textContent ? 1 : -1);

table.tBodies[0].append(...sortedRows);
