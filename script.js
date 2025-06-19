let lng = navigator.language
if (lng === 'ar' || lng === 'he') {
  document.getElementById('sidebar').style.order = 999
}

let sortDirection = false;
function sortTable(columnIndex) {
  const table = document.getElementById("co2Table");
  const tbody = table.tBodies[0];
  const rows = Array.from(tbody.rows);

  const direction = sortDirection;
  sortDirection = !sortDirection;

  rows.sort((a, b) => {
    const aText = a.cells[columnIndex].textContent;
    const bText = b.cells[columnIndex].textContent;

    let aValue = aText.toLowerCase();
    let bValue = bText.toLowerCase();

    if(!isNaN(aValue) && !isNaN(bValue)){
      aValue = Number(aValue);
      bValue = Number(bValue);
    } 

    if (direction) {
      if (aValue < bValue) return -1;
      if (aValue > bValue) return 1;
    } else {
      if (aValue > bValue) return -1;
      if (aValue < bValue) return 1;
    }
    return 0;
  });

  rows.forEach(row => tbody.appendChild(row));
}

function filterTable() {
  const input = document.getElementById("searchText");
  const searchText = input.value.toLowerCase();
  const table = document.getElementById("co2Table");
  const rows = table.tBodies[0].rows;

  for (let row of rows) {
    let text = Array.from(row.cells).map(cell => cell.textContent.toLowerCase()).join(" ");
    if(text.includes(searchText)){
      row.style.display = "";
    }else{
      row.style.display = "none";
    }
    
  }
}