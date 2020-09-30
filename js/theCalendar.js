$(function myCalendar() {
    $("#laCalendar, #spCalendar").datepicker({
        //showWeek: true, // used to determine which week and day to highlight correctly
        //minDate: "-1M",
        //maxDate: "+14M",
        firstDay: 1,
        changeMonth: true,
        changeYear: true,
        onSelect: function (date) {
            var datepicked = new Date(date);
            var specialeventDate = new Date("9/11/2013"); // special event date

            if (datepicked.getMonth() == 5 && this.id == "laCalendar") {
                window.open("SpecialEvents2", "_blank");
            };

            if (datepicked.toLocaleDateString() == specialeventDate.toLocaleDateString() && this.id == "spCalendar") {
                window.open("http://www.google.com", "_blank");
            };
        },
        beforeShowDay: function (date) {
            $(".ui-datepicker").css('font-size', 25);
            var month = date.getMonth();
            var day = date.getDay();
            var week = (!date ? 0 : $.datepicker.iso8601Week(date));

            if (day == 1 && this.id == "laCalendar") {
                switch (week) {
                    case 52:
                        return [true, 'HighlightedRed', date]; // 'HighlightedRed is a css attribute in site.css
                        break;
                    case 48:
                    case 44:
                    case 40:
                    case 35:
                    case 31:
                    case 27:
                    case 22:
                    case 18:
                    case 14:
                    case 9:
                    case 5:
                    case 1:
						if (month == 5 && week == 26 ) { // 0 is jan so 5 is june and 26 week
                            //return [true, 'SpecialEvent', date]; // special event days
							return [true, 'HighlightedRed', date];
                        }
                        else {
                            return [true, 'HighlightedBlue', date];
                        }
                        break;

                    default:
                        if (month == 5 && week == 23 || week == 24 || week == 25) { // 0 is jan so 5 is june and 23, 24, 25 week
                            //return [true, 'SpecialEvent', date]; // special event days
							return [true, 'HighlightedRed', date];
                        }
                        else {
                            return [true, 'HighlightedRed', date];
                        }
                }

            }
			else if ( day == 3 && month == 0 && week == 1) { // 3 day, 0 is jan so 5 is june and 26 week
                            //return [true, 'SpecialEvent', date]; // special event days
							//return [true, 'HighlightedGreen', date];
							return [false,date];
                        }
            // ignores 12-25 and 1-1 days
            //else if ( day == 3 && month != 12 && week != 52 && week != 1)
			else if (day == 4 && this.id == "stocktonCalendar") {
				switch ( week )
				{
					//case 1:
					case 52:
						//return [true, 'HighlightedGreen', date];
						return [true, '', ''];
					default:
             			return [true, '', ''];
				}
			
			}
            else if (day == 3 && this.id == "spCalendar") {
                switch (week) {
                    case 50:
                    case 52:
                    case 48:
                    case 46:
                    case 44:
                    case 41:
                    case 37:
                    case 39:
                    case 33:
                    case 35:
                    case 31:
                    case 28:
                    case 26:
                    case 24:
                    case 22:
                    case 19:
                    case 17:
                    case 15:
                    case 11:
                    case 13:
                    case 9:
                    case 7:
                    case 5:
                    case 2:
					case 1:
                        if (month == 11 && week == 52) { // 3 day, 0 is jan so 5 is june and 26 week
                            //return [true, 'SpecialEvent', date]; // special event days
							//return [true, 'HighlightedGreen', date];
							return [false,date];
                        }
						else if  ( month == 0 && week == 1) {
							return [false,date];
						}
                        else {
                            //return [true, 'HighlightedYellow', date];
							return [true, 'HighlightedGreen', date];
                        }
                        break;
                    case 0:
                        return [true, 'HighlightedBlue', date];
                        break;

                    default:
                        return [true, 'HighlightedGreen', date];
                }
            }
            else {
                return [true, '', ''];
            }

            /*
            switch (week)
            {
            case 52:
            return [true, 'HighlightedRed', date];
            break;
            default:
            return [true, '', ''];
            }
            */
        }

    });
});      // end of myCalendar

/*
// html code used to have it show up correctly in content management system - 5-3-2013 at3
<table>
<tbody>
<tr><th>
<h1>Los Angeles</h1>
</th><th>
<h1>San Pedro</h1>
</th></tr>
<tr>
<td>
<div id="laCalendar"></div>
</td>
<td>
<div id="spCalendar"></div>
</td>
</tr>
</tbody>
</table>
*/