var days = document.querySelector('.days');
var date1 = document.querySelector('.date1');
var date2 = document.querySelector('.date2');
var daysTemplate = document.querySelector('.daysTemplate').innerHTML;
var Monday = document.querySelector('.Monday');

var dateCompiler = Handlebars.compile(daysTemplate);

document.addEventListener('DOMContentLoaded', function(){
   var data = {
      'myList' : [
         {date : 'Monday'},
         {date : 'Tuesday'},
         {date : 'Wednesday'},
         {date : 'Thursday'},
         {date : 'Friday'}
      ]
   }
   days.innerHTML = dateCompiler(data);
});

date1.addEventListener('change', function(){
   
});
date2.addEventListener('change', function(){

});
