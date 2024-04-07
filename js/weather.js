const API = "8e118aa292bd9b8073eb7437c757205c"

function onGeoSuccess(location){
    const lat = location.coords.latitude;
    const long = location.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weatherStatus = document.querySelector("#weather span:nth-child(1)");
        const weatherTemp = document.querySelector("#weather span:nth-child(2)");
        const weatherloc = document.querySelector("#weather span:nth-child(3)");

        weatherloc.innerText = data.name;
        weatherStatus.innerText = data.weather[0].main;
        weatherTemp.innerText = `${data.main.temp} ℃`;
    });    

};
function onGeoError(){
    alert("can't find you. No weather for you.")
};

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);