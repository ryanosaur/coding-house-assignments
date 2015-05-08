function countFunction(){
    var textValue = document.getElementById("myText").value;
    var wordCount = textValue.split(' ').length;
    var characterCount = textValue.length;

    var regex = /[A-Za-z]*/g;
    var spaceCount = textValue.replace(regex, '').length;

    var averageCharacters = 0;
    if(wordCount != 0)
    {
        averageCharacters = (characterCount - spaceCount) / wordCount;    
    }
    else
    {
        averageCharacters = textValue.length;
    }

    var objectToReturn = {
        textValue: textValue,
        wordCount: wordCount,
        characterCount: characterCount,
        spaceCount: spaceCount,
        averageCharacters: averageCharacters
    };
    return objectToReturn;
}