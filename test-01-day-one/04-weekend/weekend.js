var Weekend = {};

Date.prototype.isTodayAWeekend = function(){
    return (this.getDay() > 0 && this.getDay() < 6) ? false : true;
};

result = new Date().isTodayAWeekend();
console.log(result);