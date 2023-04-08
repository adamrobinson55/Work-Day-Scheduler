// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDayDisplay = $('#currentDay')
var scheduleArea = $('#schedule-area')
var liElement = $('li')
var buttons = $('.btn')
var textAreas = document.getElementsByTagName('textarea')
    localArray = []

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  liElement.on("click",function(event){
    var eventTarget = $(event.target)
    if(eventTarget.is(buttons)){
      var innerText = this.getElementsByTagName('textarea')[0].value
      var idVar = "#" + this.id
      localStorage.setItem(idVar, innerText)
    }
    return
  })



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time? 
  // isBefore() is built into dayjs
  //

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




  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  for(i=0; i<=20; i++) {
    var idVar = "#hour-" + (i+9)
    if(localStorage.getItem(idVar) != null) {
      textAreas[i].value = localStorage.getItem(idVar)
    }
  }




  // TODO: Add code to display the current date in the header of the page.
  currentDayDisplay.text(dayjs().format('MMM DD, YYYY'))
});
