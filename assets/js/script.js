let cityInput = document.getElementById("city-Input");
let searchButton = document.getElementById("search-button");
let day1 = document.getElementById("day-1");
let day2 = document.getElementById("day-2");
let day3 = document.getElementById("day-3");
let day4 = document.getElementById("day-4");
let day5 = document.getElementById("day-5");
let Input = document.getElementById("city");

function callF () {
    convertCity (Input.value);
}

function convertCity (name) {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=1&appid=cfcbb2233907967cf35b711dcb32a448`)
    .then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                let lat = data[0].lat;
                let lon = data[0].lon;
                showCity(name, lat, lon)
            })
        } else {
            alert('Error: ' + response.statusText);
        }
    })    
}

function showCity (name, latitude, longitude) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=Imperial&appid=cfcbb2233907967cf35b711dcb32a448`)
    .then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                const city = document.createElement('div');
                city.setAttribute("id", "city-Details");
                cityInput.appendChild(city);
                $('#city-Details').text(name + " (" + data.list[0].dt_txt.substring(0,10) + ")");
                const icon = document.createElement('img');
                icon.setAttribute("src", 'https://openweathermap.org/img/wn/' + data.list[0].weather[0].icon + '@2x.png');
                document.getElementById('city-Details').appendChild(icon);
                showAttributes (data);
                dayOneF (data);
                dayTwoF (data);
                dayThreeF (data);
                dayFourF (data);
                dayFiveF (data);
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
    $("#humidity").text("Humidity : " + data.list[0].main.humidity + "%");
}

function dayOneF (data) {
    const time1 = document.createElement('div');
    time1.setAttribute("id", "time-1");
    day1.appendChild(time1);
    $("#time-1").text(data.list[7].dt_txt.substring(0,10));
    const iconDay1 = document.createElement('img');
    iconDay1.setAttribute("src", 'https://openweathermap.org/img/wn/' + data.list[8].weather[0].icon + '@2x.png');
    day1.appendChild(iconDay1);
    const temp1 = document.createElement("div");
    temp1.setAttribute("id", "tempDay1");
    day1.appendChild(temp1);
    $("#tempDay1").text("Temp : " + data.list[7].main.temp + "F");
    const wind1 = document.createElement("div");
    wind1.setAttribute("id", "windDay1");
    day1.appendChild(wind1);
    $("#windDay1").text("Wind : " + data.list[7].wind.speed + " MPH");
    const humid1 = document.createElement("div");
    humid1.setAttribute("id", "humidDay1");
    day1.appendChild(humid1);
    $("#humidDay1").text("Humidity : " + data.list[7].main.humidity + "%");
}

function dayTwoF (data) {
    const time2 = document.createElement('div');
    time2.setAttribute("id", "time-2");
    day2.appendChild(time2);
    $("#time-2").text(data.list[15].dt_txt.substring(0,10));
    const iconDay2 = document.createElement('img');
    iconDay2.setAttribute("src", 'https://openweathermap.org/img/wn/' + data.list[16].weather[0].icon + '@2x.png');
    day2.appendChild(iconDay2);
    const temp2 = document.createElement("div");
    temp2.setAttribute("id", "tempDay2");
    day2.appendChild(temp2);
    $("#tempDay2").text("Temp : " + data.list[15].main.temp + "F");
    const wind2 = document.createElement("div");
    wind2.setAttribute("id", "windDay2");
    day2.appendChild(wind2);
    $("#windDay2").text("Wind : " + data.list[15].wind.speed + " MPH");
    const humid2 = document.createElement("div");
    humid2.setAttribute("id", "humidDay2");
    day2.appendChild(humid2);
    $("#humidDay2").text("Humidity : " + data.list[15].main.humidity + "%");
}

function dayThreeF (data) {
    const time3 = document.createElement('div');
    time3.setAttribute("id", "time-3");
    day3.appendChild(time3);
    $("#time-3").text(data.list[23].dt_txt.substring(0,10));
    const iconDay3 = document.createElement('img');
    iconDay3.setAttribute("src", 'https://openweathermap.org/img/wn/' + data.list[24].weather[0].icon + '@2x.png');
    day3.appendChild(iconDay3);
    const temp3 = document.createElement("div");
    temp3.setAttribute("id", "tempDay3");
    day3.appendChild(temp3);
    $("#tempDay3").text("Temp : " + data.list[23].main.temp + "F");
    const wind3 = document.createElement("div");
    wind3.setAttribute("id", "windDay3");
    day3.appendChild(wind3);
    $("#windDay3").text("Wind : " + data.list[23].wind.speed + " MPH");
    const humid3 = document.createElement("div");
    humid3.setAttribute("id", "humidDay3");
    day3.appendChild(humid3);
    $("#humidDay3").text("Humidity : " + data.list[23].main.humidity + "%");
}

function dayFourF (data) {
    const time4 = document.createElement('div');
    time4.setAttribute("id", "time-4");
    day4.appendChild(time4);
    $("#time-4").text(data.list[31].dt_txt.substring(0,10));
    const iconDay4 = document.createElement('img');
    iconDay4.setAttribute("src", 'https://openweathermap.org/img/wn/' + data.list[32].weather[0].icon + '@2x.png');
    day4.appendChild(iconDay4);
    const temp4 = document.createElement("div");
    temp4.setAttribute("id", "tempDay4");
    day4.appendChild(temp4);
    $("#tempDay4").text("Temp : " + data.list[31].main.temp + "F");
    const wind4 = document.createElement("div");
    wind4.setAttribute("id", "windDay4");
    day4.appendChild(wind4);
    $("#windDay4").text("Wind : " + data.list[31].wind.speed + " MPH");
    const humid4 = document.createElement("div");
    humid4.setAttribute("id", "humidDay4");
    day4.appendChild(humid4);
    $("#humidDay4").text("Humidity : " + data.list[31].main.humidity + "%");
}

function dayFiveF (data) {
    const time5 = document.createElement('div');
    time5.setAttribute("id", "time-5");
    day5.appendChild(time5);
    $("#time-5").text(data.list[39].dt_txt.substring(0,10));
    const iconDay5 = document.createElement('img');
    iconDay5.setAttribute("src", 'https://openweathermap.org/img/wn/' + data.list[39].weather[0].icon + '@2x.png');
    day5.appendChild(iconDay5);
    const temp5 = document.createElement("div");
    temp5.setAttribute("id", "tempDay5");
    day5.appendChild(temp5);
    $("#tempDay5").text("Temp : " + data.list[39].main.temp + "F");
    const wind5 = document.createElement("div");
    wind5.setAttribute("id", "windDay5");
    day5.appendChild(wind5);
    $("#windDay5").text("Wind : " + data.list[39].wind.speed + " MPH");
    const humid5 = document.createElement("div");
    humid5.setAttribute("id", "humidDay5");
    day5.appendChild(humid5);
    $("#humidDay5").text("Humidity : " + data.list[39].main.humidity + "%");
}