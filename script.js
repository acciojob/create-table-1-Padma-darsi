function insert_Row() {
    //Write your code here
   const table = document.getElementById("sampleTable");

  // Create a new row element
  const newRow = document.createElement("tr");

  // Create two new cells
  const cell1 = document.createElement("td");
  const cell2 = document.createElement("td");

  // Add text content
  cell1.textContent = "New Cell1";
  cell2.textContent = "New Cell2";

  // Append cells to the new row
  newRow.appendChild(cell1);
  newRow.appendChild(cell2);

  // Insert new row as the first row of the table
  table.insertBefore(newRow, table.firstChild);
}
