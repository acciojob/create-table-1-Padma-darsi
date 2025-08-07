function insert_Row() {
  const table = document.getElementById("sampleTable");

  // Create a new row and two cells
  const newRow = table.insertRow(0); // Insert at the top (index 0)
  const cell1 = newRow.insertCell(0); // Create first cell
  const cell2 = newRow.insertCell(1); // Create second cell

  // Add text to each cell
  cell1.textContent = "New Cell1";
  cell2.textContent = "New Cell2";
}
