jQuery(document).ready(function(){
    $('body').append($("<table></table>"));
    $('table').append($("<tr><th>Name</th><th>Frequency</th></tr>"));
    $.ajax({
        url : "./data.txt", 
        dataType : "text",
        success : function(data){
            data.split('\n').map(function(line){
                return line.replace(/^(\s*[^\s])([0-9]*\s[|]\s)/g, '');
                /* regex explained
                
                ^ - start of line
                () - first search group
                \s - space
                * - any number of times
                [^\s] - !space
                () - second search group
                [0-9] - any number
                * - any number of times
                \s - space
                [|] - until a pipe
                \s - space
                
                g - global
                
                */
            })
            .slice(2) // remove header & line seperator
            .createDictionaryFromArray() // returns a Dictionary object structure from array 
            .sortByValues() // returns an array of objects from a Dictionary sorted by value
            .forEach(function(obj){
                $('table').append($("<tr><td>"+ obj.name +"</td><td>"+ obj.count +"</td></tr>"));
            });
        }
    });
});

Array.prototype.createDictionaryFromArray = function(){
    var dict = new Dictionary();
    this.forEach(function(element){
        var first = element.split(' ')[0].toLowerCase();
        dict[first] ? dict[first]++ : dict[first] = 1;
    });
    return dict;
};

var Dictionary = function(){
    return this;
};

Dictionary.prototype.sortByValues = function(){
    var scope = this;
    return Object.keys(this).map(function(key){
        return {name: key, count: scope[key]};
    })
    .sort(function (prev, next) {
      if (prev.count < next.count)
        return 1;
      if (prev.count > next.count)
        return -1;
      return 0;
    })
    .filter(function(record){
        return record.name.length > 0;
    })
    .slice(0,19);
};