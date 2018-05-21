describe('Matching days web App', function(){
   describe('test if the dates are correct', function(){
      it('Is sunday equal zero(0)', function(){
         var match1 = MatchingDays();
         match1.settingDate1('20 May 2018');
         assert.equal(match1.firstDate(), 0);
      });
   });
});
