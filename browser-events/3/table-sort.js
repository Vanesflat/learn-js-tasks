const table = document.getElementById('grid');
const tableBody = table.tBodies[0];
const rows = Array.from(tableBody.rows);

table.addEventListener('click', (evt) => {
  if (evt.target.tagName !== 'TH') {
    return;
  }

  const cellIndex = evt.target.cellIndex;
  const type = evt.target.dataset.type;
  let sortedRows;

  switch (type) {
    case 'number':
      sortedRows = rows.sort((a, b) => a.cells[cellIndex].textContent - b.cells[cellIndex].textContent);
      break;
    case 'string':
      sortedRows = rows.sort((a, b) => a.cells[cellIndex].textContent > b.cells[cellIndex].textContent ? 1 : -1);
      break;
  }

  tableBody.append(...sortedRows);
});
