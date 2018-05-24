describe('Matching days Tests', function () {
    describe('Are dates the same', function () {
        var match1 = MatchingDays();
        it('1 April 2017 - 20 May 2088', function () {
            assert.equal(match1.isSameWeekday('1 April 2017', '20 May 2088'), false);
        });
        it('2 May 2018 - 23 May 2018', function () {
            assert.equal(match1.isSameWeekday('2 May 2018', '23 May 2018'), true);
        });
        it('1 January 1 - 1 January 3000', function () {
            assert.equal(match1.isSameWeekday('1 January 1', '1 January 3000'), false);
        });
    });
    describe('check day name', function () {
        var match2 = MatchingDays();
        it('2 May 2018', function () {
            assert.equal(match2.getWeekday('2 May 2018'), 'Wednesday');
        });
        it('26 April 2008', function () {
            assert.equal(match2.getWeekday('26 April 2008'), 'Saturday');
        });
        it('5 February 2038', function () {
            assert.equal(match2.getWeekday('5 February 2038'), 'Friday');
        });
    });
    describe('Are colours matching', function () {
        var match3 = MatchingDays();
        it('is colour green same day', function () {
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
            assert.deepEqual(match3.setDayStyle(weekdaysData, 0, 'green'), {
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
            });
        });
    });
});
