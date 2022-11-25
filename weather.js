let data

async function getWeather () {
    let weatherInfo = document.getElementById ('typeCity').value;
    const result = await fetch (`https://api.api-ninjas.com/v1/weather?city=${weatherInfo}`, {
        headers : {
            'X-Api-Key': 'VEONA4a3KntHKVKSGYzAfQ==za6wzjrvKNGhA9kh' 
        },
        method: 'GET'

    }); 

    const data = await result.json ();
   /*  console.log(data); */
    
   document.getElementById('weatherDetails1').innerHTML = `Temperature: ${data.temp} C`;
   document.getElementById('weatherDetails2').innerHTML = `Feels Like: ${data.feels_like} C`;
   document.getElementById('weatherDetails3').innerHTML = `Humidity: ${data.humidity}`;
   document.getElementById('weatherDetails4').innerHTML = `Cloudiness: ${data.cloud_pct}`;
   document.getElementById('weatherDetails5').innerHTML = `Wind Speed: ${data.wind_speed}`;

   var tempIcon = data.temp ;
   var windIcon = data.wind_speed;
   var rainIcon = data.humidity;
   var cloudIcon = data.cloud_pct;
   var snowflake = document.getElementById ('snowflake');
   var sun = document.getElementById ('sun');
   var wind = document.getElementById('wind');
   var rain = document.getElementById('rain');
   var cloud = document.getElementById ('cloud');

   if (tempIcon > 0) {
  snowflake.style.display = "none";
    } else {
  snowflake.style.display = "block";
}
  if (tempIcon < 0) {
 sun.style.display = "none";
  }
  else if (tempIcon ===0){
      sun.style.display = "none";
  } 
  else {
  sun.style.display = "block";
} 
  if (windIcon > 3 ) {
      wind.style.display = "block";
  } else {
      wind.style.display = "none";
}
 if (rainIcon  > 75 ) {
  rain.style.display = "block";
 } else {
  rain.style.display = "none";
 }
 if (cloudIcon > 75) {
  cloud.style.display = "block";
 } else {
  cloud.style.display = "none";
} 
 
}



async function getTime() {
    let timeInfo = document.getElementById ('typeCity').value;
    const timeResult = await fetch (`https://api.api-ninjas.com/v1/worldtime?city=${timeInfo}`, {
        headers : {
            'X-Api-Key': 'VEONA4a3KntHKVKSGYzAfQ==za6wzjrvKNGhA9kh' 
        },
        method: 'GET'
    });
    const timeData = await timeResult.json();
/*     console.log(timeData); */

    document.getElementById ('timeDetails').innerHTML = `Date & Time: ${timeData.datetime}`

 }
 
 function btnClick () {
    let clickResult = getWeather (); getTime();
    return clickResult;

 }


 
/* 
 function showIcon2 () {
    var divIcon = document.getElementById ('icon') 
    if (divIcon.style.display === "block") {
        divIcon.style.display = "none";
      } else {
        divIcon.style.display = "block";
      }

}  */

   
    
   
    