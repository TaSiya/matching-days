describe('Matching days Tests', function(){
   describe('Are dates the same', function(){
      var match1 = MatchingDays();
      it('1 April 2017 - 20 May 2088', function(){
         assert.equal(match1.isSameWeekday('1 April 2017', '20 May 2088'), false);
      });
      it('2 May 2018 - 23 May 2018', function(){
         assert.equal(match1.isSameWeekday('2 May 2018','23 May 2018'), true);
      });
      it('1 January 1 - 1 January 3000',function(){
         assert.equal(match1.isSameWeekday('1 January 1', '1 January 3000'), false);
      });
   });
   describe('check day name', function(){
      var match2 = MatchingDays();
      it('2 May 2018', function(){
         assert.equal(match2.getWeekday('2 May 2018'), 'Wednesday');
      });
      it('26 April 2008', function(){
         assert.equal(match2.getWeekday('26 April 2008'), 'Saturday');
      });
      it('5 February 2038', function(){
         assert.equal(match2.getWeekday('5 February 2038'), 'Friday');
      });
   });
   
});
