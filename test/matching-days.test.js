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
      it('17 September 2017 <=> 7 October 2011', function(){
         var match3 = MatchingDays();

      });
   })
    describe('Are colours matching', function() {
        var match4 = MatchingDays();
        var weekdaysData = {
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
        it('Is colour green same day', function () {
            var weekdaysData1 = {
                weekdays: [{
                        label: "Monday",
                        value: "monday",
                        style: "green"
                    },
                    {
                        label: "Tuesday",
                        value: "tuesday",
                        style: "normal"
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
            assert.deepEqual(weekdaysData1,match4.setDayStyle(weekdaysData, 'Monday', 'green'));
        });
        it('Different days.  Tuesday <=> Thursday', function(){
           var weekdaysData = {
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
           var weekdaysData2 = {
               weekdays: [{
                       label: "Monday",
                       value: "monday",
                       style: "normal"
                   },
                   {
                       label: "Tuesday",
                       value: "tuesday",
                       style: "cyan"
                   },
                   {
                       label: "Wednesday",
                       value: "wednesday",
                       style: "normal"
                   },
                   {
                       label: "Thursday",
                       value: "thursday",
                       style: "red"
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
           var colour1 = match4.setDayStyle(weekdaysData, 'Tuesday', 'cyan');
           assert.deepEqual(weekdaysData2, match4.setDayStyle(colour1, 'Thursday', 'red'))
        });
        it('Different days. Sunday <=> Thursday', function(){
           var match4 = MatchingDays()
           var weekdaysData = {
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
           var weekdaysData3 = {
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
                       style: "normal"
                   },
                   {
                       label: "Thursday",
                       value: "thursday",
                       style: "red"
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
                       style: "cyan"
                   }
               ]
           };
           var colour2 = match4.setDayStyle(weekdaysData, 'Sunday', 'cyan');
           assert.deepEqual(weekdaysData3, match4.setDayStyle(colour2, 'Thursday', 'red'))
        });
    });

});
