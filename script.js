let samtab=document.getElementById("sampleTable");
    samtab.addEventListener("click",insert_Row);

function insert_Row() {
    //Write your code here
   samtab.innerHTML+=`
         <tr><td>New Cell1</td> 
		<td>New Cell2</td></tr> `;
}
