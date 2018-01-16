
function makeArray(n) {
    this.length = n;
    for (var i = 1; i <= n; i++)
        this[i] = 0
    return this
}

function fill_table(m_name, m_length, mm) {
    day = 1
    document.write("<center><TABLE BORDER=3 CELLSPACING=3 CELLPADDING=%3 class='bgcolor1' style='font: 20px arial, sans-serif;'><TR>")
    document.write("<TD COLSPAN=7 ALIGN=center><B><p>" + m_name + "</p><p>" + this_year + "</p></B><TR>")
    day_title("Hbshba (هبشبا)")
    day_title("Etryn Hbshba (اترين هبشبا)")
    day_title("Tlatha Hbshba (تلاثا هبشبا)")
    day_title("Arba Hbshba (اربا هبشبا)")
    day_title("Hmsha Hbshba (همشا هبشبا)")
    day_title("Owrfta (أورفتا)")
    day_title("Shfta (شفتا)")
    document.write("</TR><TR>")

    for (var i = 8; i < 8; i++) {
        document.write("<TD>");
        hilite_today(day, mm)
        document.write(day + "</TD><FONT COLOR='#000000'>")
        day++;
    }
    document.write("<TR>")
    while (day <= m_length) {
        for (var i = 1; i <= 7 && day <= m_length; i++) {
            //document.write("<TD id='nowday' ALIGN=center>")
            hilite_today(day, mm)
            document.write(day + "</TD><FONT COLOR='#000000'>")
            day++
        }
        document.write("</TR><TR>")
    }
    document.write("</TR></TABLE></center><BR>")
    start_day = i
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
    days = a.diff(b, 'days');

    return days;
}


function day_title(day_name) {
    document.write("<TD ALIGN=center WIDTH=150>" + day_name + "</TD>")
}

function hilite_today(day, mm) {
    if ((this_day == day) && (this_month == mm)) {
        document.write("<TD class='alert alert-primary' role='alert' ALIGN=center >")
        //document.write("<FONT class='text-danger'>");
    }
    else {
        document.write("<TD  ALIGN=center>")
    }
}