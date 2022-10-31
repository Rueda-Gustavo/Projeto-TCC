// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
// Write your JavaScript code.

var dateValues = {
    'year': new Date().getFullYear(), //Ano atual 
    'month': new Date().getMonth() + 1, //Mes em número
    'Month': new Date().toLocaleString("pt-BR", { month: "long" }), //Mes em string para apresentação           
}

window.onload = function () {

    mapping()
    setDaysPrevioustMonth()
    setDaysCurrentMonth()
    setDaysNextMonth()

    clone()
}

function mapping() {
    dateValues.DayOfWeek = new Date(dateValues.year + "-" + dateValues.month + "-1").getDay() + 1
    dateValues.x = dateValues.DayOfWeek;
    dateValues.y = 1 //Número da linha
    changeMonthPresentation()
}

function changeMonthPresentation() {
    dateValues.Month = dateValues.Month[0].toUpperCase() + dateValues.Month.substr(1)
    document.getElementById("lblMonthYear").textContent = dateValues.Month + " de " + dateValues.year
}

function setDaysPrevioustMonth() {
    previousMonthYear = dateValues.year

    if (dateValues.month == 1) {
        previousMonth = 12
        previousMonthYear--
        dayCount = new Date(previousMonthYear, previousMonth, 0).getDate()
    }
    else {
        previousMonth = dateValues.month - 1
        dayCount = new Date(previousMonthYear, previousMonth, 0).getDate()
    }

    x = dateValues.x - 1

    for (dayPreviousMonth = dateValues.DayOfWeek - 1; dayPreviousMonth > 0; dayPreviousMonth--) {
        btn = 'btn' + x
        document.getElementById(btn).textContent = dayCount
        document.getElementById(btn).className = 'table-button btn-previous-and-next-month' //style-previous-month        

        x--
        dayCount--
    }
}

function isToday(dayCurrentMonth) {
    day = new Date().getDate()
    month = new Date().getMonth() + 1
    year = new Date().getFullYear()

    if (day == dayCurrentMonth && month == dateValues.month && year == dateValues.year)
        return true
    else
        return false
}

function setDaysCurrentMonth() {

    dayCount = new Date(dateValues.year, dateValues.month, 0).getDate()

    for (dayCurrentMonth = 1; dayCurrentMonth <= dayCount; dayCurrentMonth++) {

        btn = 'btn' + dateValues.x
        document.getElementById(btn).textContent = dayCurrentMonth

        if (isToday(dayCurrentMonth)) {

            document.getElementById(btn).className = 'table-button btn-current-day' //style-current-day

        }
        else {
            document.getElementById(btn).className = 'table-button btn-current-month' //style-current-month
        }

        dateValues.x++
        dateValues.DayOfWeek++

        if (dateValues.DayOfWeek > 7) {

            dateValues.DayOfWeek = 1
            dateValues.y++
        }
    }
}

function setDaysNextMonth() {
    nextMonthYear = dateValues.year

    if (dateValues.month == 12) {
        nextMonth = 1
        nextMonthYear++
    }
    else {
        nextMonth = dateValues.month + 1
    }

    while (dateValues.y <= 6) {
        var dayNextMonth = 1
        if (dateValues.DayOfWeek > 7) {
            dateValues.DayOfWeek = 1
            dateValues.y++
        }
        for (dayNumberNextMonth = dateValues.DayOfWeek; dayNumberNextMonth <= 7; dayNumberNextMonth++) {
            btn = 'btn' + dateValues.x
            document.getElementById(btn).textContent = dayNextMonth
            document.getElementById(btn).className = 'table-button btn-previous-and-next-month'
            //style-next-month

            dateValues.DayOfWeek++
            dayNextMonth++
            dateValues.x++
        }
        dateValues.y++

    }

    dateValues.x = 1
    dateValues.DayNumber = 1
    dateValues.y = 1
}




