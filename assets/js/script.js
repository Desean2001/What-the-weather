let cityInput = document.getElementById("city-Input");
let searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", showCity);

function showCity () {
    const city = document.createElement('div');
    city.setAttribute("id", "city-Details");
    cityInput.appendChild(city);
    $('#city-Details').text("City (" + dayjs().format('MMM D, YYYY') + ")");
    showIcon ();
}

function showIcon () {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&units=Imperial&appid=cfcbb2233907967cf35b711dcb32a448')
    .then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                const icon = document.createElement('img');
                icon.setAttribute("src", 'https://openweathermap.org/img/wn/' + data.list[0].weather[0].icon + '@2x.png');
                document.getElementById('city-Details').appendChild(icon);
                showAttributes (data);
            })
        } else {
            alert('Error: ' + response.statusText);
        }
    });
}

function showAttributes (data) {
    const attritbutes = document.createElement('div');
    attritbutes.setAttribute("id", "weather-Att");
    cityInput.appendChild(attritbutes);
    const temp = document.createElement("div");
    temp.setAttribute("id", "temperature");
    attritbutes.appendChild(temp);
    $("#temperature").text("Temp : " + data.list[0].main.temp + "F");
    const wind = document.createElement("div");
    wind.setAttribute("id", "wind-Speed");
    attritbutes.appendChild(wind);
    $("#wind-Speed").text("Wind : " + data.list[0].wind.speed + " MPH");
    const humid = document.createElement("div");
    humid.setAttribute("id", "humidity");
    attritbutes.appendChild(humid);
    $("#humidity").text("Humidity : " + data.list[0].main.humidity + "%")
}

function fiveDay (data) {

}
