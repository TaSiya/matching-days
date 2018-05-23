
function MatchingDays(){
   var dateList = [{weekDay:'Sunday'},{weekDay:'Monday'},{weekDay:'Tuesday'},{weekDay:'Wednesday'},{weekDay:'Thursday'},{weekDay:'Friday'},{weekDay:'Saturday'}];
   var colours = [{className:'green'},{className:'cyan'},{className:'red'}]
   var storedMap = [];
   var date1 = 0;
   var date2 = 0;

   function getList(){ return dateList;}
   function getColours(){ return colours;}

   function setDate1(first){
      var temp = new Date(first);
      date1 = temp.getDay();
   }

   function setDate2(second){
      var temp = new Date(second);
      date2 = temp.getDay();
   }

   function getDate1(){return date1;}
   function getDate2(){return date2;}

   function checkDate(date1, date2){
      for(var i = 0; i < dateList.length; i++){
         if(areSame()){
            storeMap[green] = 'green';
            storeMap[weekday] = dateList[date1];
         }
         else{
            storeMap[cyan] = 'cyan';


         }
      }
   }


   return {
      listData : getList,
      color : getColours,
      settingDate1 : setDate1,
      settingDate2 : setDate2,
      firstDate : getDate1,
      secondDate : getDate2,
      areDatesSame : areSame,
      dateChecker : checkDate,
   }
}
