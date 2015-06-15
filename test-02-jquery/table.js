jQuery(document).ready(function(){
  var Scope = {};
  Scope.data = []; // an array of objects per row
  $('body').append($("<table>", {id:'table', class:'table'}));
  $.ajax({
    url : "./data.json",
    dataType : "JSON",
    success : function(data){
      Scope.data = data;
      initHeader(Scope.data);
      Scope.data = Scope.data.slice(1);
      writeObjectArrayToTable(Scope.data);
    },
    error: function(req, status, error){
      console.log(req, status, error);
    }
  });

  var initHeader = function(data){
    var $header = returnHeaderRow(data[0])[0];
    $('#table').append($header);
    $('th').on('click', function(){
      $this = $(this);
      sortArrayBasedOnColumn($this.attr('data'), $this.attr('asc'));
    });
  }

  var writeObjectArrayToTable = function(data){
    var rowsToAppend = [];
    $('#table').find('tr:not(#header)').remove();
    data.forEach(function(object){
      rowsToAppend.push(returnDataRow(object));
    });
    $('#table').append(rowsToAppend);
  }

  var returnHeaderRow = function(object){
    var $row = $('<tr>');
    $row.attr('id', 'header');
    $row.attr('asc', true);
    $row.append(returnRow(object, '<th>'));
    return $row;
  }

  var returnDataRow = function(object){
    var $row = $('<tr>');
    $row.append(returnRow(object, '<td>'));
    return $row;
  }

  var returnRow = function(object, type){
    var cellArray = [];
    for(var key in object){
      $cell = $(type, {text: object[key]});
      $cell.attr('data', key);
      cellArray.push($cell);
    }
    return cellArray;
  }

  var sortArrayBasedOnColumn = function(column, asc){
    Scope.data = Scope.data.sort(function(a, b){
      console.log(a, b, column);
      if(a[column] > b[column]){
        return 1;
      }
      if(a[column] < b[column]){
        return -1;
      }
      else return 0;
    });
    console.log(Scope.data);
    writeObjectArrayToTable(Scope.data);
  };
});
