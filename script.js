const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b6f73fd675mshedd7452ac06c37fp1a3dd7jsn632f4b082065',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)

            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp

            feels_like.innerHTML = response.feels_like

            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity

            min_temp.innerHTML = response.min_temp

            max_temp.innerHTML = response.max_temp

            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed

            wind_degrees.innerHTML = response.wind_degrees

            sunrise.innerHTML = response.sunrise

            sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")

const getWeathers = (citys) => {

    cityName_1.innerHTML = citys
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=surat', options)
        .then(responses => responses.json())
        .then((responses) => {
            console.log(responses)
            cloud_pct.innerHTML = responses.cloud_pct
            temp3.innerHTML = responses.temp
            feels_like2.innerHTML = responses.feels_like
            humidity3.innerHTML = responses.humidity
            min_temp2.innerHTML = responses.min_temp
            max_temp2.innerHTML = responses.max_temp
            wind_speed3.innerHTML = responses.wind_speed
            wind_degrees2.innerHTML = responses.wind_degrees
            sunrise2.innerHTML = responses.sunrise
            sunset2.innerHTML = responses.sunset
        })
        .catch(err => console.error(err));
}

getWeathers("Surat")

const getweathers = (_citys1) => {

    cityName_2.innerHTML = _citys1
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=ahmedabad', options)
        .then(responses => responses.json())
        .then((responses) => {
            console.log(responses)
            cloud_pct2.innerHTML = responses.cloud_pct
            temp4.innerHTML = responses.temp
            feels_like3.innerHTML = responses.feels_like
            humidity4.innerHTML = responses.humidity
            min_temp3.innerHTML = responses.min_temp
            max_temp3.innerHTML = responses.max_temp
            wind_speed4.innerHTML = responses.wind_speed
            wind_degrees3.innerHTML = responses.wind_degrees
            sunrise3.innerHTML = responses.sunrise
            sunset3.innerHTML = responses.sunset
        })
        .catch(err => console.error(err)); 
}

getweathers("Ahmedabad")

const getBanglore = (bangalore) => {

    cityName_3.innerHTML = bangalore
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bangalore', options)
        .then(responses => responses.json())
        .then((responses) => {
            console.log(responses)
            cloud_pct3.innerHTML = responses.cloud_pct
            temp5.innerHTML = responses.temp
            feels_like4.innerHTML = responses.feels_like
            humidity5.innerHTML = responses.humidity
            min_temp4.innerHTML = responses.min_temp
            max_temp4.innerHTML = responses.max_temp
            wind_speed5.innerHTML = responses.wind_speed
            wind_degrees4.innerHTML = responses.wind_degrees
            sunrise4.innerHTML = responses.sunrise
            sunset4.innerHTML = responses.sunset
        })
        .catch(err => console.error(err));
}

getBanglore("Bangalore")

const gethyderabad = (hyderabad) => {

    cityName_4.innerHTML = hyderabad
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=hyderabad', options)
        .then(responses => responses.json())
        .then((responses) => {
            console.log(responses)
            cloud_pct4.innerHTML = responses.cloud_pct
            temp6.innerHTML = responses.temp
            feels_like5.innerHTML = responses.feels_like
            humidity6.innerHTML = responses.humidity
            min_temp5.innerHTML = responses.min_temp
            max_temp5.innerHTML = responses.max_temp
            wind_speed6.innerHTML = responses.wind_speed
            wind_degrees5.innerHTML = responses.wind_degrees
            sunrise5.innerHTML = responses.sunrise
            sunset5.innerHTML = responses.sunset
        })
        .catch(err => console.error(err));
}

gethyderabad("Hyderabad")