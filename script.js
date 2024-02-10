

var inputvalue = document.querySelector('#cityinput');
var cityOutput = document.querySelector('#cityoutput');
var description = document.querySelector("#description");
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');

const apiKey = "c6b01c2d4c89e670a836fd78442c71e6";

function convertion(val) {
    return (val - 273).toFixed(2);
}

document.querySelector('#add').addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apiKey)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var descrp = data['weather'][0]['description'];
            var temperature = data['main']['temp'];
            var windSpeed = data['wind']['speed'];

            cityOutput.innerHTML = `<img src="images/02d.svg" alt="" class="img1">Weather of <span>${nameval}</span>`;
            temp.innerHTML = `<img src="images/feels-like.svg" alt="" class="img2">Temp: <span>${convertion(temperature)}°C</span>`;
            description.innerHTML = ` <img src="images/cloud.png" alt="">Sky conditions: <span>${descrp}</span>`;
            wind.innerHTML = `<img src="images/wind.svg" alt="" class="img3"> Wind Speed:<span>${windSpeed} m/s</span>`;
        })
        .catch(err => {
            console.error(err);
            alert('An error occurred. Please check your city name and try again.');
        });
});


function start(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apiKey)
    .then(res => res.json())
    .then(data => {
        var nameval = data['name'];
        var descrp = data['weather'][0]['description'];
        var temperature = data['main']['temp'];
        var windSpeed = data['wind']['speed'];

        cityOutput.innerHTML = `<img src="images/02d.svg" alt="" class="img1">Weather of <span>${nameval}</span>`;
        temp.innerHTML = `<img src="images/feels-like.svg" alt="" class="img2">Temp: <span>${convertion(temperature)}°C</span>`;
        description.innerHTML = ` <img src="images/cloud.png" alt="">Sky conditions: <span>${descrp}</span>`;
        wind.innerHTML = `<img src="images/wind.svg" alt="" class="img3"> Wind Speed:<span>${windSpeed} m/s</span>`;
    })
    .catch(err => {
        console.error(err);
        alert('An error occurred. Please check your city name and try again.');
    });
}
document.querySelector('.inputs').addEventListener('keypress',function(){

    if(keypress.value=='Enter'){
        start();
    }
});


start();
