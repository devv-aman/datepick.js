var datePickObject;

var datepick = function(object) {
    datePickObject = object;
    
    if(object['id'].length == object['format'].length && object['id'].length == object['minDate'].length && object['id'].length == object['maxDate'].length) {
        var noOfDatePickInput = object['id'].length;
        
        for(var i = 0; i < noOfDatePickInput; i++) {
            var elId = object['id'][i];
            var format = object['format'][i];
            var minDate = object['minDate'][i];
            var maxDate = object['maxDate'][i];

            $('#' + elId).attr('data-format', format);
            $('#' + elId).attr('data-min-date', minDate);
            $('#' + elId).attr('data-max-date', maxDate);
        }
    } else {
        console.warn('arrays passed in each attribute must be of same length');
    }
};

$(function() {
    
    var FULL_DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var SHORT_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
    $('body').on('change', '.dp-calendar .dp-month-year-row #month-selector', function() {
        var month = $(this).children('option:selected').attr('value');
        var year = $(this).siblings('#year-selector').children('option:selected').attr('value');
        createCalendar(month, year);
    });
    
    var calendarDes = '<div class="dp-calendar dp-hidden"><div class="dp-month-year-row">'
            + '<span class="left"><</span>'
            + '<span>'
                + '<select id="month-selector">'
                    + '<option value="1" selected>January</option>'
                    + '<option value="2">February</option>'
                    + '<option value="3">March</option>'
                    + '<option value="4">April</option>'
                    + '<option value="5">May</option>'
                    + '<option value="6">June</option>'
                    + '<option value="7">July</option>'
                    + '<option value="8">August</option>'
                    + '<option value="9">September</option>'
                    + '<option value="10">October</option>'
                    + '<option value="11">November</option>'
                    + '<option value="12">December</option>'
                + '</select>'
                + '<select id="year-selector">'
                    + '<option value="2014">2014</option>'
                    + '<option value="2015">2015</option>'
                    + '<option value="2016" selected>2016</option>'
                    + '<option value="2017">2017</option>'
                    + '<option value="2018">2018</option>'
                + '</select>'
            + '</span>'
            + '<span class="right">></span>'
        + '</div>'
        + '<div>'
           + '<table>'
               + '<tbody>'
                   + '<tr class="dp-days-row">'
                       + '<th>Mon</th>'
                       + '<th>Tue</th>'
                       + '<th>Wed</th>'
                       + '<th>Thu</th>'
                       + '<th>Fri</th>'
                       + '<th>Sat</th>'
                       + '<th>Sun</th>'
                   + '</tr>';

            for(var i = 1; i <= 31; i++) {            
                if(i % 7 == 1) {
                    calendarDes += '<tr class="dp-date-row">';
                }

                calendarDes += '<td>' + i + '</td>';

                if(i % 7 == 0) {
                    calendarDes += '</tr>';
                }
            }
            calendarDes += '</tr>'
               + '</tbody>'
           + '</table>'
        + '</div>'
    + '</div>';
    
    function createCalendar(month, year) {
        var noOfDays = new Date(year, month, 0).getDate();
        var firstDay = new Date(year, month - 1, 1).getDay();
        var noOfDaysInPreviousMonth = new Date(year, month-1, 0).getDate();
        
        var calendarInnerHtml = '<tr class="dp-days-row"><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th></tr>';
        var i = 1;
        var d = 1;
        var noOftd = 1;
        if(firstDay == 0) {
            firstDay = 7;
        }
        var last = noOfDaysInPreviousMonth - firstDay + 2;
        for(; d <= noOfDays; i++) {
            
            if(i % 7 == 1) {
                calendarInnerHtml += '<tr class="dp-date-row">';
            }
            
            if(i >= firstDay) {
                calendarInnerHtml += '<td class="current">' + (d++) + '</td>';
            } else {
                calendarInnerHtml += '<td class="previous">' + (last++) + '</td>';
            }
            
            if(i % 7 == 0) {
                calendarInnerHtml += '</tr>';
                noOftd  = 1;
            } else {
                noOftd++;
            }
            
        }
        
        d = 1;
        if(noOftd != 1) {
            for(; noOftd <=7; noOftd++) {
                calendarInnerHtml += '<td class="next">' + (d++) + '</td>';
            }
            calendarInnerHtml += '</tr>'
        }
        $('.dp-calendar table tbody').html(calendarInnerHtml);
    }
    
    if($('.datepick')) {
        $('.datepick').each(function() {
            var datepickContHtml = $(this).wrap('<div class="datepick-cont">').parent().html() + calendarDes;
            $(this).parent().html(datepickContHtml);
        });
    }
    
    $('body').on('focus', 'input.datepick', function() {
        var left = $(this).position().left;
        var top = $(this).position().top;
        var height = $(this).height();
        
        $(this).siblings('.dp-calendar').css({
            left: left,
            top: top + height + 5
        });
        $(this).siblings('.dp-calendar').removeClass('dp-hidden');
    });
    
    $('body').on('blur', 'input.datepick', function() {
        $(this).siblings('.dp-calendar').addClass('dp-hidden');
    });
    
    $('body').on('mousedown', '.dp-calendar table td', function() {
        
        var $comParEl = $(this).parent().parent().parent().parent();
        var $input = $comParEl.parent().siblings('input.datepick');
        
        var date = $(this).text();
        var month = $comParEl.siblings('.dp-month-year-row').children().children('#month-selector').children('option:selected').attr('value');
        var year = $comParEl.siblings('.dp-month-year-row').children().children('#year-selector').children('option:selected').attr('value');
        
        var selectedDate = new Date(year, month-1, date);
        
        var dateFormat = $input.attr('data-format');
        var minDate = $input.attr('data-min-date');
        var maxDate = $input.attr('data-max-date');
        
        
    });
    
    
    
});