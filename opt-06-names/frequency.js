jQuery(document).ready(function(){
    $.ajax({
        url : "./data.txt", 
        dataType : "text",
        success : function(data){
            data.split('\n').map(function(line){
                return line.replace(/^(\s*[^ ])([0-9]*\s[|]\s)/g, '');
            })
            .slice(2)
            .filter(function(name){
                return name.length > 0;
            })
            .forEach(Names.frequency);
            
            $('body').append($("<table></table>"));
            $('table').append($("<tr><th>Name</th><th>Frequency</th></tr>"));
            Names.sortNames().forEach(function(obj){
                $('table').append($("<tr><td>"+ obj.name +"</td><td>"+ obj.count +"</td></td>"));
            });
        }
    });
});

var Names = {};

Names.dict = {};

Names.frequency = function(name){
    var first = name.split(' ')[0];
    Names.dict[first] ? Names.dict[first]++ : Names.dict[first] = 1;
};

Names.sortNames = function(){
    return Object.keys(Names.dict).map(function(key){
        return {name: key, count: Names.dict[key]};
    })
    .sort(function (prev, next) {
      if (prev.count < next.count)
        return 1;
      if (prev.count > next.count)
        return -1;
      return 0;
    })
    .slice(0,19);
};