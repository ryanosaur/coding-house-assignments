function frequency(text){
    var clean = text.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    var words = clean.split(' ');
    
    var dict = {};
    words.forEach(function(word){
        dict[word] ? dict[word]++ : dict[word] = 1;
    });
    
    return Object.keys(dict).map(function(key){
        return {word: key, count: dict[key]};
    })
    .sort(function (prev, next) {
      if (prev.count < next.count)
        return 1;
      if (prev.count > next.count)
        return -1;
      return 0;
    })
    .slice(0,9);
};

jQuery(document).ready(function(){
    $("button").on('click', function(){
        var textEntered = $("textarea").val();
        var results = frequency(textEntered);
        console.log('results: ' + results);
        
        $('body').append($("<table></table>"));
        $('table').append($("<tr><th>Word</th><th>Frequency</th></tr>"));
        results.forEach(function(obj){
            $('table').append($("<tr><td>"+ obj.word +"</td><td>"+ obj.count +"</td></td>"));
        });
        
    });
});