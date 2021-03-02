window.onload = () => {
   loadTableData(personData);
}

let sortDirection = false;
let personData = [
   { name: 'Dylan', age : 31 },
   { name: 'Crist', age : 30 },
   { name: 'Israel', age : 25 },
   { name: 'Doolan', age : 19 },
   { name: 'Thug', age : 17 },
   { name: 'Etna', age : 40 }
]

loadTableData(personData);

function loadTableData(personData) {
   const tableBody = document.getElementById("tableData");
   let dataHtml = "";

   for (let person of personData) {
      dataHtml += `<tr><td>${person.name}</td><td>${person.age}</td></tr>`
   }

   tableBody.innerHTML = dataHtml;
}

function sortColumn(columnName) {
   const dataType = typeof personData[0][columnName];
   sortDirection = !sortDirection;

   switch(dataType) {
      case 'number':
         sortNumberColumn(sortDirection, columnName);
         break;
      
      case 'string':
         sortNumberColumn(sortDirection, columnName);
         break;
   }

   loadTableData(personData);

   function sortNumberColumn(sort, columnName) {
      personData = personData.sort((p1, p2) => {
         return sort ? p1[columnName] - p2[columnName] : p2[columnName] - p1[columnName]
      });
   }
}
