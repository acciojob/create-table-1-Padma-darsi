
    table.addEventListener("click",insert_Row);

function insert_Row() {
    //Write your code here
   // Get the reference to the table
    let table = document.getElementById("sampleTable");

    // Create a new row at the top
    let newRow = table.insertRow(0); // Insert at index 0

    // Create two new cells in the new row
    let cell1 = newRow.insertCell(0); // First cell
    let cell2 = newRow.insertCell(1); // Second cell

    // Assign values to the cells
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}