jQuery(document).ready(function(){
    var solution = HangMan.pickword();
    var underscores = HangMan.initUnderscores(solution);
    HangMan.updateLettersLeft();

    var hints = ["Try the letter " + solution.substring(0,1).toUpperCase() + "!"];
    $('#hints').append('<p>'+ hints[0] +'</p>');
    
    $(document).on('keypress', function(event){
        HangMan.containsLetter(String.fromCharCode(event.keyCode).toLowerCase(), solution, underscores);
        if(HangMan.isSolved(solution, underscores)){
            alert("You Won!");
        }
        log('Solution: ' + solution + ' Underscores: ' + underscores.join('').replace(/\s/g, ''));
    }); 
});

var HangMan = {};

HangMan.words = ["acres","adult","advice","arrangement","attempt","August","Autumn","border","breeze","brick","calm","canal","Casey","cast","chose","claws","coach","constantly","contrast","cookies","customs","damage","Danny","deeply","depth","discussion","doll","donkey","Egypt","Ellen","essential","exchange","exist","explanation","facing","film","finest","fireplace","floating","folks","fort","garage","grabbed","grandmother","habit","happily","Harry","heading","hunter","Illinois","image","independent","instant","January","kids","label","Lee","lungs","manufacturing","Martin","mathematics","melted","memory","mill","mission","monkey","Mount","mysterious","neighborhood","Norway","nuts","occasionally","official","ourselves","palace","Pennsylvania","Philadelphia","plates","poetry","policeman","positive","possibly","practical","pride","promised","recall","relationship","remarkable","require","rhyme","rocky","rubbed","rush","sale","satellites","satisfied","scared","selection","shake","shaking","shallow","shout","silly","simplest","slight","slip","slope","soap","solar","species","spin","stiff","swung","tales","thumb","tobacco","toy","trap","treated","tune","University","vapor","vessels","wealth","wolf","zoo"];

HangMan.lettersLeft = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

HangMan.pickword = function(){
    return HangMan.words[Math.floor(Math.random() * 100)].toLowerCase();
};

HangMan.containsLetter = function(key, solution, underscores){
    if(solution.split('').indexOf(key) > -1){
        var indexes = [];
        solution.split('').forEach(function(letter, index){
            if(key === letter) 
                indexes.push(index);
        });
        HangMan.updateUnderscores(indexes, key, underscores);
    }
    HangMan.useLetter(key);
};

HangMan.isSolved = function(solution, underscores){
    return solution === underscores.join('').replace(/\s/g, '');
};

HangMan.updateUnderscores = function(indexes, key, underscores){
    indexes.forEach(function(index){
        underscores[index] = ' ' + key + ' ';
    });
    HangMan.setUnderscores(underscores);
};

HangMan.initUnderscores = function(solution){
    var underscores = [];
    
    solution.split('').forEach(function(){
        underscores.push(' _ ');
    });
    
    HangMan.setUnderscores(underscores);
    
    return underscores;
}

HangMan.setUnderscores = function(underscores){
    HangMan.updateDisplay(underscores.join(''));
};

HangMan.updateDisplay = function(display){
    $('#solution-space').html('<h1>' + display + '</h1>');
};

HangMan.useLetter = function(key){
    HangMan.lettersLeft = HangMan.lettersLeft.filter(function(letter){
        return key !== letter;
    });
    
    HangMan.updateLettersLeft();
};

HangMan.updateLettersLeft = function(){
    $('#letters-left').html('<p>' + HangMan.lettersLeft.join('').split(',').join('') + '</p>')
};

function log(param){
    console.log(param);
};