function btnPrevious_Click() {
    if (dateValues.month == 1) {
        dateValues.year--
        dateValues.month = 12
        dateValues.Month = new Date(dateValues.year, dateValues.month, 0).toLocaleString("pt-BR", { month: "long" })
    }
    else {
        dateValues.month--
        dateValues.Month = new Date(dateValues.year, dateValues.month, 0).toLocaleString("pt-BR", { month: "long" })
    }
    mapping()
    setDaysPrevioustMonth()
    setDaysCurrentMonth()
    setDaysNextMonth()

}

function btnNext_Click() {
    if (dateValues.month == 12) {
        dateValues.year++
        dateValues.month = 1
        dateValues.Month = new Date(dateValues.year, dateValues.month, 0).toLocaleString("pt-BR", { month: "long" })
    }
    else {
        dateValues.month++
        dateValues.Month = new Date(dateValues.year, dateValues.month, 0).toLocaleString("pt-BR", { month: "long" })
    }
    mapping()
    setDaysPrevioustMonth()
    setDaysCurrentMonth()
    setDaysNextMonth()

}

var Day
var Month
var Year

function tableButton_Click(day, btn) {
    Day = day
    if (day > 7 && btn <= 7) {
        previousMonth_Click()
    }
    else if (day < 15 && btn >= 29) {
        nextMonth_Click()
    }
    else {
        currentMonth_Click()
    }
    document.getElementById('teste').innerHTML = Day + "/" + Month + "/" + Year
}

function previousMonth_Click() {
    //new Date(year, month, day) -> month deve ser contado a partir do 0 (ex: janeiro - 0 <-> dezembro - 11)

    if (dateValues.month == 1) {
        Year = dateValues.year - 1
        Month = 12
    }
    else {
        Month = dateValues.month - 1 
        Year = dateValues.year
    }    
}
function currentMonth_Click() {
    Month = dateValues.month 
    Year = dateValues.year
}

function nextMonth_Click() {
    if (dateValues.month == 12) {
        Year = dateValues.year + 1
        Month = 1
    }
    else {
        Month = dateValues.month + 1
        Year = dateValues.year
    }
}

function deleteEvent_Click(button) {
    var element = button.parentElement.parentElement    
    element.getElementsByTagName('h4')[0].innerHTML
    element.remove()
    document.getElementById('teste').innerHTML = "" + button
}


