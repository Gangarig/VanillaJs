function displayTime(){
    var date = new Date(); 
    var hours = date.getHours();
    var minuts = date.getMinutes();
    var seconds = date.getSeconds();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var weekDay = date.getDay();
    if ( weekDay == 1) {
        weekDay = 'Monday';
    } else if ( weekDay == 2 ) {
        weekDay = 'Tuesday';
    } else if ( weekDay == 3 ) {
        weekDay = 'Wednesday';
    } else if ( weekDay == 4 ) {
        weekDay = 'Thursday';
    } else if ( weekDay == 5 ) {
        weekDay = 'Friday';
    } else if ( weekDay == 6 ) {
        weekDay = 'Saturday';
    } else {
        weekDay = 'Sunday';
    }

    // if ( hours >= 12)
    // {
    //     hours = hours - 12;
    // }
    if ( hours >= 12){
        document.getElementById('session').innerHTML = 'PM';
    }  else {
        document.getElementById('session').innerHTML = 'AM';
    }




    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minuts').innerHTML = minuts;
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById('year').innerHTML = year;
    document.getElementById('month').innerHTML = month;
    document.getElementById('day').innerHTML = day;
    document.getElementById('weekday').innerHTML = weekDay;


}

setInterval( displayTime , 10 ) 
