
function age() {
    let day = document.getElementById('Day').value;
    let month = document.getElementById('Month').value;
    let year = document.getElementById('Year').value;
    let error_day = document.getElementById('error-day');
    let error_Month =document.getElementById('error-Month');
    let error_year=document.getElementById('error-Year');
    let text="";
    
    let date = new Date(); //full time
        let get_day = date.getDate(); //16
        let get_month = 1+ date.getMonth();//5
        let get_yaer = date.getFullYear();//2023
       
        let all_months=[31,28,31,30,31,30,31,31,20,31,30,31];
        
    if (day > get_day  && day > 31){
        get_day = get_day + all_months [get_month -1] ;
        get_day = get_day -1;
        text="please enter valid date";
        error_day.innerHTML=text;

        return false;
        

    }
    else {
       
        text="";
        error_day.innerHTML=text;

        

    }
    if (month> get_month  && month > 12){
        get_month = get_month + 12;
        text="please enter valid month";
        error_Month.innerHTML=text;

        return false;
        
    }
    else {
        text="";
        error_Month.innerHTML=text;

    }
        if ( year > get_yaer && year > 1990){
            get_yaer = get_yaer -1;
            text="please enter valid year";
        error_year.innerHTML=text;

        return false;
        

        }
        else {

            text="";
            error_year.innerHTML=text;
        }
       
        
       
    
    

    let d = get_day- day;
    let m = get_month- month;
    let y = get_yaer- year;

   



    document.getElementById('year-result').innerHTML= y;
    document.getElementById('month-result').innerHTML= m;
    document.getElementById('day-result').innerHTML= d;
   
    
}

