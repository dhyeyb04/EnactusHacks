function tableFill(){
  var patientsArray = JSON.parse(people.json)
  var columns = ['First Name', 'Last Name', 'Severity', 'Reason']
  var table = document.getElementById('posts');

  for (var i = 0; i < patientsArray.length; i++){
    var row = table.insertRow( -1 ); // -1 is insert as last
    for( var j = 0; j < columns.length; j++ ){
      var cell = row.insertCell( - 1 ); // -1 is insert as last
      cell.className = columns[j]; //
      cell.innerHTML = patientsArray[i][j]
    }
  }
}
