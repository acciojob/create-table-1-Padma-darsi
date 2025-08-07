function insert_Row() {
    //Write your code here
    const table = document.getElementById("sampleTable");

      // Create new row
      const newRow = document.createElement("tr");

      // Create two cells
      const cell1 = document.createElement("td");
      const cell2 = document.createElement("td");

      // Set text content
      cell1.textContent = "New Cell1";
      cell2.textContent = "New Cell2";

      // Append cells to row
      newRow.appendChild(cell1);
      newRow.appendChild(cell2);

      // Insert row at the top (as first row)
      table.insertBefore(newRow, table.firstChild);	
  
}
