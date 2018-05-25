describe('Matching days Tests', function () {
    describe('Are dates the same', function () {
        var match1 = MatchingDays();
        it('1 April 2017 - 20 May 2088', function () {
            match1.settingDate1('1 April 2017');
            match1.settingDate2('20 May 2088');
            assert.equal(match1.isSameWeekday(), false);
        });
        it('2 May 2018 - 23 May 2018', function () {
            match1.settingDate1('2 May 2018');
            match1.settingDate2('23 May 2018');
            assert.equal(match1.isSameWeekday(), true);
        });
        it('1 January 1 - 1 January 3000', function() {
            match1.settingDate1('1 January 1');
            match1.settingDate2('1 January 3000');
            assert.equal(match1.isSameWeekday(), false);
        });
    });
    describe('check day name using Numbers(0-6)', function () {
        var match2 = MatchingDays();
        it('Check day 2', function() {
            assert.equal(match2.getWeekday(2), 'Tuesday');
        });
        it('Check day 0', function() {
            assert.equal(match2.getWeekday(0), 'Sunday');
        });
        it('Check day 5', function() {
            assert.equal(match2.getWeekday(5), 'Friday');
        });
    });
    describe('Compare dates and assign colour', function(){
      it('2 May 2018 <=> 7 April 2018', function(){
         var match3 = MatchingDays();
         match3.settingDate1('2 May 2018');
         match3.settingDate2('7 April 2018');
         var weekdaysData0 = {
            weekdays: [{
                     label: "Monday",
                     value: "monday",
                     style: "normal"
                 },
                 {
                     label: "Tuesday",
                     value: "tuesday",
                     style: "normal"
                 },
                 {
                     label: "Wednesday",
                     value: "wednesday",
                     style: "cyan"
                 },
                 {
                     label: "Thursday",
                     value: "thursday",
                     style: "normal"
                 },
                 {
                     label: "Friday",
                     value: "friday",
                     style: "normal"
                 },
                 {
                     label: "Saturday",
                     value: "saturday",
                     style: "red"
                 },
                 {
                     label: "Sunday",
                     value: "sunday",
                     style: "normal"
                 }
            ]
         };
         assert.deepEqual(match3.whichColour(),weekdaysData0);
      });
      it('16 May 2018 <=> 30 May 2018', function(){
         var match3 = MatchingDays();
         match3.settingDate1('16 May 2018');
         match3.settingDate2('30 May 2018');
         var weekdaysData01 = {
            weekdays: [{
                     label: "Monday",
                     value: "monday",
                     style: "normal"
                 },
                 {
                     label: "Tuesday",
                     value: "tuesday",
                     style: "normal"
                 },
                 {
                     label: "Wednesday",
                     value: "wednesday",
                     style: "green"
                 },
                 {
                     label: "Thursday",
                     value: "thursday",
                     style: "normal"
                 },
                 {
                     label: "Friday",
                     value: "friday",
                     style: "normal"
                 },
                 {
                     label: "Saturday",
                     value: "saturday",
                     style: "normal"
                 },
                 {
                     label: "Sunday",
                     value: "sunday",
                     style: "normal"
                 }
            ]
         };
         assert.deepEqual(match3.whichColour(),weekdaysData01);
      });
      it('25 December 2017 <=> 25 December 2018', function(){
         var match3 = MatchingDays();
         match3.settingDate1('25 December 2017');
         match3.settingDate2('25 December 2018');
         var weekdaysData01 = {
            weekdays: [{
                     label: "Monday",
                     value: "monday",
                     style: "cyan"
                 },
                 {
                     label: "Tuesday",
                     value: "tuesday",
                     style: "red"
                 },
                 {
                     label: "Wednesday",
                     value: "wednesday",
                     style: "normal"
                 },
                 {
                     label: "Thursday",
                     value: "thursday",
                     style: "normal"
                 },
                 {
                     label: "Friday",
                     value: "friday",
                     style: "normal"
                 },
                 {
                     label: "Saturday",
                     value: "saturday",
                     style: "normal"
                 },
                 {
                     label: "Sunday",
                     value: "sunday",
                     style: "normal"
                 }
            ]
         };
         assert.deepEqual(match3.whichColour(),weekdaysData01);
      });
   });
});
