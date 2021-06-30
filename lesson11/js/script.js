const mydate = new Date();
document.getElementById("last-modified").textContent = mydate
const todayDayNumber = mydate.getDay();

const myweekday = new Array(7);
  myweekday[0] = "Sunday";
  myweekday[1] = "Monday";
  myweekday[2] = "Tuesday";
  myweekday[3] = "Wednesday";
  myweekday[4] = "Thursday";
  myweekday[5] = "Friday";
  myweekday[6] = "Saturday";



//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/forecast?q=Preston&appid=09d68ec646652118209db83452c9066d&units=imperial";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.


    //document.getElementById("townName").innerHTML = weatherinfo.name;
    document.getElementById('place').innerHTML=weatherInfo.city.name;

    let mylist = weatherInfo.list;
    

      let forecastDayNumber = todayDayNumber;
   
      for (i = 0; i < mylist.length; i++) {
        let time = mylist[i].dt_txt;
          if (time.includes("18:00:00")) {



            forecastDayNumber += 1;
            if (forecastDayNumber === 7) {
              forecastDayNumber = 0;
            }

            let theDayName = document.createElement("h5");
            theDayName.textContent = myweekday[forecastDayNumber];
          
            let theTemp = document.createElement("p");
            theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0";
          
            let iconcode = weatherInfo.list[i].weather[0].icon;
            let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
            let theIcon = document.createElement("img");
            theIcon.src=iconPath;
          
            let theDay = document.createElement("div");
            theDay.appendChild(theDayName);
            theDay.appendChild(theTemp);
            theDay.appendChild(theIcon);
          
            document.getElementById('forecast1').appendChild(theDay);
          

   
      }
    }
 }); 

 const apiURL2 = "//api.openweathermap.org/data/2.5/weather?zip=83263,us&appid=09d68ec646652118209db83452c9066d&units=imperial";

//Go fetch it and then wait for a response.
fetch(apiURL2)
  .then((response) => response.json())
  .then((weatherInfo2) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo2);
    document.getElementById('temper').innerHTML=weatherInfo2.main.temp;
    document.getElementById('speed').innerHTML=weatherInfo2.wind.speed;
    document.getElementById('humid').innerHTML=weatherInfo2.main.humidity;
    document.getElementById('condition').innerHTML=weatherInfo2.weather[0].description;


 }); 


 const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';



 fetch(requestURL)
   .then(function (response) {
     return response.json();
   })
   .then(function (jsonObject) {
 
     const towns = jsonObject['towns'];
     console.table(jsonObject); 
     for (let i = 0; i < towns.length; i++ ) {

      const townname = towns[6].name;
      
      if (towns[i].name == townname) {


       let events = document.createElement('p');

       events.textContent = towns[i].events;



       document.getElementById('message').appendChild(events);
      }
       
     }
 
 
   });
