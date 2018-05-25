function MatchingDays() {
  var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var date1, date2;

  var weekdaysData = {
    weekdays: [{
        label: "Monday",
        value: "monday",
        style: "normal"
      },
      {
        label: "Tuesday",
        value: "tuesday",
        style: "normal"
      },
      {
        label: "Wednesday",
        value: "wednesday",
        style: "normal"
      },
      {
        label: "Thursday",
        value: "thursday",
        style: "normal"
      },
      {
        label: "Friday",
        value: "friday",
        style: "normal"
      },
      {
        label: "Saturday",
        value: "saturday",
        style: "normal"
      },
      {
        label: "Sunday",
        value: "sunday",
        style: "normal"
      }
    ]
  };

  function setDate1(date){
      date1 = new Date(date);
      date1 = date1.getDay();
   }
   function setDate2(date){
      date2 = new Date(date);
      date2 = date2.getDay();
   }

  function sameWeekday() {
    return weekDays[date1] == weekDays[date2];
  }

  function determineColour() {
    var weekdays = [];
    var weekdaysDataList = checkWeekdaysData().weekdays;
    for (var i = 0; i < weekdaysDataList.length; i++) {
      var temp = weekdaysDataList[i];
      weekdays.push(Object.create(temp));
    }
    var weekdaysData = {
      weekdays
    };

    if (sameWeekday()) {
      var updatedWeekdaysData = updateDayStyle(weekdaysData, checkDayName(date1), "green");
      return updatedWeekdaysData;
    } else {
      var updateDay1 = updateDayStyle(weekdaysData, checkDayName(date1), "cyan");
      var updateDay2 = updateDayStyle(updateDay1, checkDayName(date2), "red");
      return updateDay2;
    }
  }

  function checkWeekdays() {
    return weekDays;
  }

  function checkWeekdaysData() {
    return weekdaysData;
  }

  function checkDayName(date) {
    return weekDays[date];
  }

  function updateDayStyle(weekdaysList, day, style) {
    var list = weekdaysList.weekdays;
    for (var i = 0; i < list.length; i++) {
      if (list[i].label == day) {
        list[i].style = style;
      }
    }
    weekdaysList.weekdays = list;
    return weekdaysList;
  }

  return {
    settingDate1 : setDate1,
    settingDate2 : setDate2,
    isSameWeekday: sameWeekday,
    getWeekdays: checkWeekdays,
    getWeekdaysData: checkWeekdaysData,
    getWeekday: checkDayName,
    setDayStyle: updateDayStyle,
    whichColour: determineColour
  }
}
