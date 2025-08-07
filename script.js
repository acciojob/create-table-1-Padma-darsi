function insert_Row() {
 const table = document.getElementById("sampleTable");

  // Create a new row
  const newRow = document.createElement("tr");

  // Create two cells
  const cell1 = document.createElement("td");
  const cell2 = document.createElement("td");

  // Set text content
  cell1.textContent = "New Cell1";
  cell2.textContent = "New Cell2";

  // Append cells to the row
  newRow.appendChild(cell1);
  newRow.appendChild(cell2);

  // Insert new row as first <tr> (NOT firstChild, which might be a text node!)
  const firstRow = table.querySelector("tr");
  table.insertBefore(newRow, firstRow);
}
