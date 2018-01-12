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
    days = a.diff(b, 'days');

    return days;
}


function day_title(day_name) {
    document.write("<TD ALIGN=center WIDTH=150>" + day_name + "</TD>")
}

function hilite_today(day, mm) {
    if ((this_day == day) && (this_month == mm)) {
        document.write("<TD class='alert-info' ALIGN=center>")
        //document.write("<FONT class='text-danger'>");
    }
    else {
        document.write("<TD  ALIGN=center>")
    }
}