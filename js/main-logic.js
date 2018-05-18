
function Matching_days(){
   var dateMap = {'Sunday':0, 'Monday':1, 'Tuesday':2, 'Wednesday':3, 'Thursday':4, 'Friday':5, 'Saturday':6};
   var date1 = new Date();
   var date2 = new Date();

   function setDates(first, second){
      if(first !== undefined && second !== undefined){
         date1 = first.getDay();
         date2 = second.getDay();
      }
   }

   function getDate1(){return date1;}
   function getDate2(){return date2;}

   function areSame(){
      if(date1 == date2){
         return true;
      }
      return false;
   }

   function dateList(){
      return Object.keys(dateMap);
   }

   return {
      settingDates : setDates,
      firstDate : getDate1,
      secondDate : getDate2,
      areDatesSame : areSame,
      dateArray : dateList
   }
}
