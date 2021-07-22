// CURRENT WEATHER

const apiURL2 = "https://api.openweathermap.org/data/2.5/onecall?lat=21.6483&lon=157.9226&units=imperial&appid=09d68ec646652118209db83452c9066d";

//Go fetch it and then wait for a response.
fetch(apiURL2)
  .then((response) => response.json())
  .then((weatherInfo2) => {
    //Once it comes back, display it to the console.
   
    

    document.getElementById('condition').innerHTML=weatherInfo2.current.weather[0].description;
    document.getElementById('humidity').innerHTML=weatherInfo2.current.humidity;
    document.getElementById('temp').innerHTML=weatherInfo2.current.temp + "\xB0";
    //document.getElementById('condition').innerHTML=weatherInfo2.weather[0].description;


 }); 


 // THREE DAY FORECAST

 const myweekday = new Array(7);
  myweekday[0] = "Sunday";
  myweekday[1] = "Monday";
  myweekday[2] = "Tuesday";
  myweekday[3] = "Wednesday";
  myweekday[4] = "Thursday";
  myweekday[5] = "Friday";
  myweekday[6] = "Saturday";


//ADD the key and change units to imperial
const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=21.6483&lon=157.9226&units=imperial&appid=09d68ec646652118209db83452c9066d";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.

    console.log(weatherInfo);
    //document.getElementById('place').innerHTML=weatherInfo.city.name;

    let mylist = weatherInfo.daily;

    

      let forecastDayNumber = todayDayNumber;
  
 
      for (i = 0; i < 3; i++) {
        let time = mylist[i].dt_txt;




            forecastDayNumber += 1;
            if (forecastDayNumber === 7) {
              forecastDayNumber = 0;
            }

            let theDayName = document.createElement("h5");
            theDayName.textContent = myweekday[forecastDayNumber];
            
          
            let theTemp = document.createElement("p");
            theTemp.textContent = "High: " + weatherInfo.daily[i].temp.max + "\xB0";
            
            let theTempMin = document.createElement("p");
            theTempMin.textContent = "Low: " + weatherInfo.daily[i].temp.min + "\xB0";
            
          
            let iconcode = weatherInfo.daily[i].weather[0].icon;
            let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
            let theIcon = document.createElement("img");
            theIcon.src=iconPath;
            
          
            let theDay = document.createElement("div");
  
            theDay.appendChild(theDayName);
            theDay.appendChild(theTemp);
            theDay.appendChild(theTempMin);
            theDay.appendChild(theIcon);

            theDiv = document.getElementById("forecastyo");
       
          
            theDiv.appendChild(theDay);
          


   
      }
    


 }); 

 // Alert

 fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {


    if (weatherInfo.alerts == undefined) {
        alert("No Weather Alerts Today!")
 
      }
    else {
    alert(weatherInfo.alerts.event); 
    }

  });
