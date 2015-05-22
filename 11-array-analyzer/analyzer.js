var Analyzer = {};

Analyzer.analyze = function(numbersToParse){
    var results = {};
    var numbers = numbersToParse.split(',').map(Number);
    
    results.odds = Analyzer.odds(numbers);
    results.negatives = Analyzer.negatives(numbers);
    results.avg = Analyzer.avg(numbers);
    results.median = Analyzer.median(numbers);
    
    return results;
};

Analyzer.odds = function(args){
    var odds = 0;
    
    args.map(function(value){
        if(value % 2 !== 0)
            odds++;
    });
    
    return odds;
};

Analyzer.negatives = function(args){
    var negatives = 0;
    
    args.map(function(value){
        if(value < 0)
            negatives++;
    });
    
    return negatives;
};

Analyzer.avg = function(args){
    var total = 0;
    
    args.map(function(value){total+=value});
    
    var avg = total/args.length;
    
    return avg !== undefined ? parseFloat(avg.toFixed(2)) : 0;
};

Analyzer.median = function(args){
    var sortable = args;
    sortable.sort(function(a,b){return a-b;});

    var middle = Math.floor(sortable.length/2);    
    
    return sortable.length % 2 ? sortable[middle] : (sortable[middle-1] + sortable[middle]) /2;
};