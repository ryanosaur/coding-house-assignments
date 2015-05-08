function caseSwap(textToSwap){
    var swappedText = "";
    for(var i = 0; i < textToSwap.length; i++)
    {
        if(textToSwap[i] === textToSwap[i].toLowerCase())
        {
            swappedText += textToSwap[i].toUpperCase();
        }
        else
        {
            swappedText += textToSwap[i].toLowerCase();
        }
    }
    return swappedText;
}