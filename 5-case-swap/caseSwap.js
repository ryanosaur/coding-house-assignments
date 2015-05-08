function caseSwap(textToSwap){
    var swappedText = "";
    for(var i = 0; i < textToSwap.length; i++)
    {
        swappedText += textToSwap[i] === textToSwap[i].toLowerCase() ? textToSwap[i].toUpperCase() : textToSwap[i].toLowerCase();
    }
    return swappedText;
}