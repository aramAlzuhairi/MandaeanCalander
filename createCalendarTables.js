
function initCalander(is_1stcall) {
    if (is_1stcall)
        defaultdateToNow(); //forDatePicker
    month = new makeArray(12)
    month[1] = "Ambra - امبرا"
    month[2] = "Twra - تورا"
    month[3] = "Slmy - صلمي"
    month[4] = "SrTana - سرطانا"
    month[5] = "Arya - اريا"
    month[6] = "Shomblta - شمبلتا"
    month[7] = "Qyna - قينا"
    month[8] = "ArQwa - ارقوا"
    month[9] = "HTya - هطيا"
    month[10] = "Kdya - كديا"
    month[11] = "Dwla - دولا"
    month[12] = "Nwna - نونا"
    month_length = new makeArray(12)
    month_length[1] = 30
    month_length[2] = 30
    month_length[3] = 30
    month_length[4] = 30
    month_length[5] = 30
    month_length[6] = 35
    month_length[7] = 30
    month_length[8] = 30
    month_length[9] = 30
    month_length[10] = 30
    month_length[11] = 30
    month_length[12] = 30

    var dateCalanderCreated = new Date("7-18-2017")//new Date("1-8-2018") ;
    if (!isNaN(dateCalanderCreated.getTime())) // in Iphone ,Ipad, Mac
        dateCalanderCreated = new Date("7/18/2017")

    var mandaeanCalanderCreated = { month: 11, day: 1, year: 2052 };   //{month:4 , day:25 , year:2052}; // 4-25 (8-1-2018)

    var datePicker = $("#datepickerC").val().split('-');
    today = new Date(datePicker[1] + "-" + datePicker[2] + "-" + datePicker[0]); // "1-14-2017"

    if (!isNaN(today.getTime())) // in Iphone ,Ipad, Mac
        today = new Date(datePicker[1] + "/" + datePicker[2] + "/" + datePicker[0])

    var result = showDays(today, dateCalanderCreated); // find different in days

    years = parseInt(result / 365); // number of years
    daydeff = result % 365;


    var days = daydeff + 1; // 1 because we started from 1/1

    var m = 0;

    //alert($.datepicker.formatDate('mm-dd-yy', $("#datepickerC").val() ));
    //alert(daydeff + ">><<<" + m);

    var monthInOrder = [11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    while (true) {
        if (days > month_length[monthInOrder[m]]) {
            days = days - month_length[monthInOrder[m]];
            m++;
            //	alert(days +"----"+m+(days>month_length[m]));
        }
        else
        { break; }
    }
    //	alert(daydeff + ">><<<" + m);
    // problem with 30 day and 35 the last days
    this_day = days;//today.getDate();
    this_month = monthInOrder[m];// today.getMonth()+1;
    this_year = mandaeanCalanderCreated.year + years;// today.getFullYear();

    alert(this_day + " / " + this_month + " / " + this_year);
    //MM-DD-yyy
    //begin_date = new Date("1-1-"+this_year)
    //start_day = begin_date.getDay()+1
    //if (start_day == 1){
    //start_day = 8
    //}

    var HtmlScript = "";

    for (var m = 1; m <= 12; m++) {

        HtmlScript += fill_table(month[m], month_length[m], m);

    }


    $("#tables").html(HtmlScript);
    /* // used to but the tables side by side
    document.write("<table width='100%' height='100%'  border=0>");
    document.write("<tr><td>");
    document.write("</td><td>");
    fill_table(month[m+1],month_length[m+1],m+1);
    document.write("</td></tr>");
    document.write("</table>");
    */
    // End
}

function makeArray(n) {
    this.length = n;
    for (var i = 1; i <= n; i++)
        this[i] = 0
    return this
}

function fill_table(m_name, m_length, mm) {
    day = 1;
    var HtmlScript = "";

    HtmlScript += "<center><TABLE BORDER=3 class='table' style='font: 20px arial, sans-serif;'>";
    HtmlScript += "<thead class='head-color'>";
    HtmlScript += "<TR><TD COLSPAN=7 ALIGN=center><strong><p>" + m_name + "</p><p>" + this_year + "</p></strong></TD></TR>";

    HtmlScript += "<TR>";
    HtmlScript += day_title("Hbshba (هبشبا)")
    HtmlScript += day_title("Etryn Hbshba (اترين هبشبا)")
    HtmlScript += day_title("Tlatha Hbshba (تلاثا هبشبا)")
    HtmlScript += day_title("Arba Hbshba (اربا هبشبا)")
    HtmlScript += day_title("Hmsha Hbshba (همشا هبشبا)")
    HtmlScript += day_title("Owrfta (أورفتا)")
    HtmlScript += day_title("Shfta (شفتا)")
    HtmlScript += "</TR>";
    HtmlScript += "</thead>";

    HtmlScript += "<tbody class='body-color'>";
    /*
    HtmlScript += "<TR>";

    for (var i = 8; i < 8; i++) {
        HtmlScript += hilite_today(day, mm) ;
        day++;
    }
    HtmlScript += "</TR>";
    */
    // HtmlScript +=  "<TR>" ;
    while (day <= m_length) {
        HtmlScript += "<TR>";
        for (var i = 1; i <= 7 && day <= m_length; i++) {
            //document.write("<TD id='nowday' ALIGN=center>")
            HtmlScript += hilite_today(day, mm);
            // HtmlScript += (day + "</TD>") ;
            day++
        }
        HtmlScript += "</TR>";
    }
    HtmlScript += "</tbody>";
    HtmlScript += "</TABLE></center><BR><BR>";
    start_day = i;

    return HtmlScript;
}