
function Matching_days(){
   var dateMap = {'Sunday':0, 'Monday':1, 'Tuesday':2, 'Wednesday':3, 'Thursday':4, 'Friday':5, 'Saturday':6};
   var date1 = 0;
   var date2 = 0;

   function setDate1(first){
      if(first !== undefined){
         date1 = first.getDay();
      }
   }

   function setDate2(second){
      if(second !== undefined){
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
      settingDate1 : setDate1,
      settingDate2 : setDate2,
      firstDate : getDate1,
      secondDate : getDate2,
      areDatesSame : areSame,
      dateArray : dateList
   }
}
