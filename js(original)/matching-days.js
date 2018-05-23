var days = document.querySelector('.days');
var date1 = document.querySelector('.date1');
var date2 = document.querySelector('.date2');
var daysTemplate = document.querySelector('.daysTemplate').innerHTML;


var dateCompiler = Handlebars.compile(daysTemplate);

var matcher =  MatchingDays();

document.addEventListener('DOMContentLoaded', function(){
   var compiledDate = dateCompiler({
      dates :[
            {weekDay:'Monday'},
            {weekDay:'Tuesday'},
            {weekDay:'Wednesday'},
            {weekDay:'Thursday'},
            {weekDay:'Friday'},
            {weekDay:'Saturday'},
            {weekDay:'Sunday'},
            {className:'green'},
            {className:'cyan'},
            {className:'red'}
      ]
   });
   days.innerHTML = compiledDate;
});

date1.addEventListener('change', function(){
   removeColour();
   referenceWeekdays();
   matcher.settingDate1(date1.value);
   if(matcher.areDatesSame()){
      firstDateReference.classList.add('green');
   }
   else{
      if(matcher.secondDate() != 0){
         firstDateReference.classList.add('cyan');
         secondDateReference.classList.add('red');
      }
      else{
         firstDateReference.classList.add('cyan');
      }
   }
});

date2.addEventListener('change', function(){
   removeColour();
   referenceWeekdays();
   matcher.settingDate2(date2.value);
   if(matcher.areDatesSame()){
      secondDateReference.classList.add('green');
   }
   else{
      if(matcher.firstDate()){
         firstDateReference.classList.add('cyan');
         secondDateReference.classList.add('red');
      }
      else{
         secondDateReference.classList.add('red');
      }


   }
});

function referenceWeekdays(){
   Monday = document.querySelector('.Monday');
   Tuesday = document.querySelector('.Tuesday');
   Wednesday = document.querySelector('.Wednesday');
   Thursday = document.querySelector('.Thursday');
   Friday = document.querySelector('.Friday');
   Saturday = document.querySelector('.Saturday');
   Sunday = document.querySelector('.Sunday');

   var firstTemp = matcher.dateChecker(matcher.firstDate());
   firstDateReference = document.querySelector('.'+firstTemp);
   var secondTemp = matcher.dateChecker(matcher.secondDate());
   secondDateReference = document.querySelector('.'+secondTemp);
}

function removeColour(){
   Sunday.classList.remove('red', 'green', 'cyan');
   Monday.classList.remove('red', 'green', 'cyan');
   Tuesday.classList.remove('red', 'green', 'cyan');
   Wednesday.classList.remove('red', 'green', 'cyan');
   Thursday.classList.remove('red', 'green', 'cyan');
   Friday.classList.remove('red', 'green', 'cyan');
   Saturday.classList.remove('red', 'green', 'cyan');

}
