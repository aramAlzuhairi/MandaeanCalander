function defaultdateToNow(){
$("#datepickerC").val($.datepicker.formatDate('yy-mm-dd', new Date()));
}

function showDays(firstDate, secondDate) {
    /* 
        var millisecondsPerDay = 1000 * 60 * 60 * 24;
        var firstShorten = new Date(firstDate.toLocaleDateString());
        var secondShorten = new Date(secondDate.toLocaleDateString());
        var millisBetween = firstShorten.getTime() - secondShorten.getTime();
        var days = millisBetween / millisecondsPerDay;
    */
    var a = moment(firstDate);
    var b = moment(secondDate);
   // days = a.diff(b, 'days');
   days = 180;
    return days;
}


function day_title(day_name) {
   return "<th ALIGN=center WIDTH=150>" + day_name + "</th>" ;
}

function hilite_today(day, mm) {
    if ((this_day == day) && (this_month == mm)) {
       return "<TD class='alert-info' ALIGN=center >" + day + "</TD>" ;
    }
    else {
        return "<TD  ALIGN=center>" + day + "</TD>" ;
    }
}