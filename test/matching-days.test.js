describe('Matching days web App', function(){
   describe('test if the dates are correct', function(){
      var match1 = MatchingDays();
      it('Is sunday equal zero(0)', function(){

         match1.settingDate1('20 May 2018');
         assert.equal(match1.firstDate(), 0);
      });
      it('Is Friday equal five(5)', function(){
         match1.settingDate2('25 May 2018');
         assert.equal(match1.secondDate(), 5);
      });
      it('Is Wednesday equal three(3)', function(){
         match1.settingDate2('2 May 2018');
         assert.equal(match1.secondDate(), 3);
      });
   });
   describe('Are the dates the same', function(){
      var match2 = MatchingDays();
      it('is 2 May 2018 and 28 May 2018 in same day', function(){
         match2.settingDate1('2 May 2018');
         match2.settingDate2('28 May 2018');
         assert.equal(match2.areDatesSame(), false);
      });
      it('is 10 June 2013 and 8 May 2020 in same day', function(){
         match2.settingDate1('10 June 2013');
         match2.settingDate2('8 May 2020');
         assert.equal(match2.areDatesSame(), false);
      });
      it('is 5 February 1994 and 5 February 2020 in same day', function(){
         match2.settingDate1('5 February 1994');
         match2.settingDate2('5 February 2022');
         assert.equal(match2.areDatesSame(), true);
      });
   });
   
});
