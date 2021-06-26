

var message = "Welcome to my site"



if (localStorage) {
  
    var visits = localStorage.getItem('visits');
    
    if (visits == null) visits = 1;
  
    if (visits == 1) message=" Visit #1!";
    if (visits == 2) message=" Visit #2!";
    if (visits == 21) message=" Visit #3!";
    if (visits == 211) message=" Visit #4!";
    if (visits == 2111) message=" Visit #5!";
    if (visits == 21111) message=" Visit #6!";
    if (visits == 211111) message=" Visit #7!";
    if (visits == 2111111) message=" Visit #8!";
    if (visits == 21111111) message=" Visit #9!";
    if (visits == 211111111) message=" Visit #10!";
    if (visits == 2111111111) message=" Visit #11!";
    if (visits == 21111111111) message=" Visit #12!";
    if (visits == 21111111111111) message=" Visit #14!";
    else message="You must REALLY like the weather";
  
    var visits1 = visits + 1
    localStorage.setItem('visits', visits1);
  
  }




document.getElementById('message').textContent = message