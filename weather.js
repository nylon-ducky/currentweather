window.addEventListener('load', ()=> {
let long;
let lat;
let temperatureDescription = document.querySelector('.temperatureDescription');
let temperatureDegree = document.querySelector('.temperatureDegree');
let locationTimezone = document.querySelector('.locationTimezone');
let feelsLike = document.querySelector('.feelsLike');



if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
        console.log(position);
        long = position.coords.longitude;
        lat = position.coords.latitude;
        
        const key = "4a2cbd92319bbd0aa9d9a86480652394";
        const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=imperial&appid=${key}`;
        const api2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${key}`; //current weather

        fetch(api2)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            const {temp, feels_like} = data.main;
            const {name} = data;
            const {description} = data.weather[0];

            temperatureDegree.textContent = temp;
            temperatureDescription.textContent = description;
            feelsLike.textContent = "Feels Like: " + feels_like + " " + "°F"; 
            locationTimezone.textContent = name;
            
        });

    });
}
});








