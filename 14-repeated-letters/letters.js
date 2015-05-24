var WordAnalyzer = {};

WordAnalyzer.wordsWithRepeatedLetters = {hightestCount: 0, words: []};

WordAnalyzer.wordSelector = function(stringToParse){
    var words = stringToParse.split(' ');
    
    words.map(WordAnalyzer.hasRepeatedLetters);
    
    return WordAnalyzer.wordsWithRepeatedLetters.words;
};

WordAnalyzer.hasRepeatedLetters = function(word){
    var letters = word.split('');
    var dict = {};
    letters.forEach(function(letter){
        dict[letter] ? dict[letter]++ : dict[letter] = 1;
    });
    
    Object.keys(dict).forEach(function(letter){
        if(dict[letter] >= WordAnalyzer.wordsWithRepeatedLetters.hightestCount){
            WordAnalyzer.resetIfLargerCount(dict, letter);
            WordAnalyzer.wordsWithRepeatedLetters.hightestCount = dict[letter];
            WordAnalyzer.pushIfLargest(word);
        }
    });
};

WordAnalyzer.resetIfLargerCount = function(dict, letter){
    if(dict[letter] > WordAnalyzer.wordsWithRepeatedLetters.hightestCount)
        WordAnalyzer.wordsWithRepeatedLetters.words = [];
};

WordAnalyzer.pushIfLargest = function(word){
    if(!(WordAnalyzer.wordsWithRepeatedLetters.words.indexOf(word) > -1))
        WordAnalyzer.wordsWithRepeatedLetters.words.push(word);
};