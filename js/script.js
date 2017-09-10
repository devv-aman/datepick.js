$(document).ready(function() {
    
    datepick({
        id: ['dob1', 'dob2'],
        format: ['dd/mm/yyyy', 'dd/mm/yyyy'],
        minDate: ['07/09/2017', '07/08/2017'],
        maxDate: ['14/10/2017', '14/09/2017']
    });
    
});