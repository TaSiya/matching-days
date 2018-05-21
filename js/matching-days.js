var days = document.querySelector('.days');
var date1 = document.querySelector('.date1');
var date2 = document.querySelector('.date2');
var daysTemplate = document.querySelector('.daysTemplate').innerHTML;

var Monday = '';
var Tuesday = '';
var Wednesday = '' ;
var Thursday = '';
var Friday = '';
var Saturday ='';
var Sunday ='';

var dateCompiler = Handlebars.compile(daysTemplate);

var matcher =  Matching_days();

document.addEventListener('DOMContentLoaded', function(){
   var compiledDate = dateCompiler({
      dates : matcher.dateArray()
   });
   days.innerHTML = compiledDate;
   referenceWeekdays();
   colour();
});

date1.addEventListener('change', function(){
   referenceWeekdays();
   matcher.settingDate1(date1.value);
   colour();
});
date2.addEventListener('change', function(){
   referenceWeekdays();
   matcher.settingDate2(date2.value);
   colour();
});

function referenceWeekdays(){
   Monday = document.querySelector('.Monday');
   Tuesday = document.querySelector('.Tuesday');
   Wednesday = document.querySelector('.Wednesday');
   Thursday = document.querySelector('.Thursday');
   Friday = document.querySelector('.Friday');
   Saturday = document.querySelector('.Saturday');
   Sunday = document.querySelector('.Sunday');
}

function colour(){
   
   if(matcher.firstDate() == matcher.secondDate()){
      switch(matcher.firstDate()){
      case 0:
           Sunday.classList.add('green')
           break;
      case 1:
           Monday.classList.add('green')
           break;
      case 2:
           Tuesday.classList.add('green')
           break;
      case 3:
           Wednesday.classList.add('green')
           break;
      case 4:
           Thursday.classList.add('green')
           break;
      case 5:
           Friday.classList.add('green')
           break;
      case 6:
           Saturday.classList.add('green')
      }
   }
}
