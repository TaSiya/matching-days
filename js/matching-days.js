///////////////////////////////////////////////////////////////////////////////
 //Referencing the dom elements
var daysDisplay = document.querySelector(".daysDisplay");
var date1 = document.querySelector(".date1");
var date2 = document.querySelector(".date2");
//Referencing the handle bar elements
var daysTemplate = document.querySelector(".daysTemplate").innerHTML;
var daysTemplateCompiler = Handlebars.compile(daysTemplate);
//Create instance of the Fasctory function
var matchingDays = MatchingDays();
///////////////////////////////////////////////////////////////////////////////
                     // All the event listeners created for the projects
document.addEventListener('DOMContentLoaded', function(){
   showWeekdays(matchingDays.getWeekdaysData());
});

date1.addEventListener('change', function(){
   handleDateChange();
});
date2.addEventListener('change', function(){
   handleDateChange();
});
///////////////////////////////////////////////////////////////////////////////
                        // Functions
//Displaying function
function showWeekdays(weekdaysObj){
  daysDisplay.innerHTML = daysTemplateCompiler(weekdaysObj);
}

//Changes the colour accordingly
function handleDateChange(){
  var first = date1.value;
  var second = date2.value;

  if(first !== "" && second !== ""){
     matchingDays.settingDate1(first);
     matchingDays.settingDate2(second);
      if(matchingDays.isSameWeekday()){
         showWeekdays(matchingDays.whichColour());
      }else {
       showWeekdays(matchingDays.whichColour());
     }
  }
}
///////////////////////////////////////////////////////////////////////////////
