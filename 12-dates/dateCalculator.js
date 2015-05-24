var DateCalc = {};

DateCalc.totalDaysLeft = 0;

DateCalc.calculate = function(dateToParse){
    DateCalc.init(dateToParse);
    return DateCalc.stringify(DateCalc.years(), DateCalc.months(), DateCalc.days());
};

DateCalc.init = function(dateToParse){
    var date = DateCalc.parseDate(dateToParse);
    var today = Date.now();
    var oneDay = 24*60*60*1000;
    DateCalc.totalDaysLeft = Math.floor((date - today) /oneDay);
};

DateCalc.parseDate = function(dateToParse){
    var dateVars = dateToParse.split(',').map(Number);
    return new Date(dateVars[0], dateVars[1]-1, dateVars[2]);
};

DateCalc.years = function(){
    var years = Math.floor(DateCalc.totalDaysLeft / 365);
    DateCalc.totalDaysLeft -= Math.floor(years * 365);
    return years;
};

DateCalc.months = function(){
    var months = Math.floor(DateCalc.totalDaysLeft / 30);
    DateCalc.totalDaysLeft -= Math.floor(months * 30);
    return months;
};

DateCalc.days = function(){
    return Math.floor(DateCalc.totalDaysLeft / 24);
};

DateCalc.stringify = function(years, months, days){
    var dateString = "";
    
    if (years !== 0)
        dateString += years + " years, ";
    if (months !== 0)
        dateString += months + " months, ";
    dateString += days + " day(s).";
        
    return dateString;
};