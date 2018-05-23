var daysDisplay = document.querySelector(".daysDisplay");
var date1 = document.querySelector(".date1");
var date2 = document.querySelector(".date2");

var daysTemplate = document.querySelector(".daysTemplate").innerHTML;
var daysTemplateCompiler = Handlebars.compile(daysTemplate);

date1.addEventListener('change', handleDateChange);
date2.addEventListener('change', handleDateChange);

var matchingDays = MatchingDays();

showWeekdays(matchingDays.getWeekdaysData());

function showWeekdays(weekdaysObj){

  var weekdaysDataHTML = daysTemplateCompiler(weekdaysObj);
// put the resulting HTML into the target elements innerHTML

  daysDisplay.innerHTML = weekdaysDataHTML;

}

function handleDateChange(){


  var firstDateVal = date1.value;
  var secondDateVal = date2.value;

  if(firstDateVal !== "" && secondDateVal !== ""){

    var weekdaysDataSample = matchingDays.getWeekdaysData().weekdays;

    var weekdays = [];
    for(var i=0;i<weekdaysDataSample.length;i++){

      var currentWeek = weekdaysDataSample[i];
      weekdays.push(Object.create(currentWeek));

    }

    var weekdaysData = {weekdays};

     var isSameWeekday = matchingDays.isSameWeekday(firstDateVal, secondDateVal);
     var weekdays = matchingDays.getWeekdays(firstDateVal);

     if(isSameWeekday){
        var sameday = matchingDays.getWeekday(firstDateVal);
        var updatedWeekdaysData = matchingDays.setDayStyle(weekdaysData, sameday, "green");

         showWeekdays(updatedWeekdaysData);

     }else {
       var day1 = matchingDays.getWeekday(firstDateVal);
       var day2 = matchingDays.getWeekday(secondDateVal);

       var updatedWeekdaysData = matchingDays.setDayStyle(weekdaysData, day1, "blue");

       var latestUpdatedWeekdayData = matchingDays.setDayStyle(updatedWeekdaysData, day2, "red");

       showWeekdays(latestUpdatedWeekdayData);

     }

  }
}
