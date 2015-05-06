function countFunction(){
    var textValue = document.getElementById("myText").value;
    var wordCount = textValue.split(' ').length;
    var characterCount = textValue.length;

    var regex = /[A-Za-z]*/g;
    var spaceCount = textValue.replace(regex, '').length;

    var charCount = 0;
    var words = textValue.split(' ');
    for (i = 0; i < words.length -1; i++) { 
        charCount += words[i].length;
    }
    var averageCharacters = charCount / words.length;

    var objectToReturn = {
        textValue: textValue,
        wordCount: wordCount,
        characterCount: characterCount,
        spaceCount: spaceCount,
        averageCharacters: averageCharacters
    };
    return objectToReturn;
}