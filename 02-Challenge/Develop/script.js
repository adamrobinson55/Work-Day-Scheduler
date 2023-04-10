
var currentDayDisplay = $('#currentDay')
var scheduleArea = $('#schedule-area')
var liElement = $('li')
var buttons = $('.btn')
var textAreas = document.getElementsByTagName('textarea')
    localArray = []

$(function () {

  liElement.on("click",function(event){
    var eventTarget = $(event.target)
    if(eventTarget.is(buttons)){
      var innerText = this.getElementsByTagName('textarea')[0].value
      var idVar = "#" + this.id
      localStorage.setItem(idVar, innerText)
    }
    return
  })

  for(i=9; i<=17; i++) {
    var idVar = "#hour-" + (i)
    var currentHourId = $(idVar)
    if(dayjs().format('H') == i) {
      currentHourId.addClass('present')
    }
    if(dayjs().format('H')<i) {
      currentHourId.addClass('past')
    }
    if(dayjs().format('H')>i){
      currentHourId.addClass('future')
    }
  }

  for(i=0; i<=20; i++) {
    var idVar = "#hour-" + (i+9)
    if(localStorage.getItem(idVar) != null) {
      textAreas[i].value = localStorage.getItem(idVar)
    }
  }


  currentDayDisplay.text(dayjs().format('MMM DD, YYYY'))
});
