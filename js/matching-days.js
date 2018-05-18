var days = document.querySelector('.days');
var date1 = document.querySelector('.date1');
var date2 = document.querySelector('.date2');
var daysTemplate = document.querySelector('.daysTemplate').innerHTML;


var dateCompiler = Handlebars.compile(daysTemplate);

var matcher =  Matching_days();

document.addEventListener('DOMContentLoaded', function(){
   var compiledDate = dateCompiler({
      dates : matcher.dateArray()
   });
   days.innerHTML = compiledDate;
});

date1.addEventListener('change', function(){

});
date2.addEventListener('change', function(){

});
