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

  function sameWeekday(dat1, dat2) {
    date1 = new Date(dat1);
    date2 = new Date(dat2);
    return weekDays[date1.getDay()] == weekDays[date2.getDay()];
  };

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

    if (sameWeekday(date1, date2)) {
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
    return weekDays[new Date(date).getDay()];
  }

  function updateDayStyle(weekdaysList, day, style) {
    var list = weekdaysList.weekdays;
    for (var i = 0; i < list.length; i++) {
      if (list[i].label == day) {
        console.log(list[i].style);
        list[i].label = day;
        list[i].style = style;
        console.log(list[i].style);
      }
    }
    console.log(list);
    console.log(weekdaysList);
    weekdaysList.weekdays = list;
    console.log('another weekdaysList data');
    console.log(weekdaysList);
    return weekdaysList;
  }

  return {
    isSameWeekday: sameWeekday,
    getWeekdays: checkWeekdays,
    getWeekdaysData: checkWeekdaysData,
    getWeekday: checkDayName,
    setDayStyle: updateDayStyle,
    whichColour: determineColour
  }
}
