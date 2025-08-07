function insert_Row() {
  const table = document.getElementById("sampleTable");

  // Create a new row and two cells
  const newRow = document.createElement("tr");
  const cell1 = document.createElement("td");
  const cell2 = document.createElement("td");

  // Add text to each cell
  cell1.textContent = "New Cell1";
  cell2.textContent = "New Cell2";

  // Append cells to the row
  newRow.appendChild(cell1);
  newRow.appendChild(cell2);

  // Insert the new row as the first row in the table
  table.appendChild(newRow);
}
