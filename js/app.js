// DO NOT sjow API key on ypur JS file

const API_KEY = `45ca8e48d28a83cffa3a3d2b77efcb9a`;

const loadTemperature = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};


const displayTemperature = data => {

    // const temperature = document.getElementById('temperature');
    // temperature.innerText= data.main.temp;

    setInnerTextById('temperature', data.main.temp);

    setInnerTextById('condition', data.weather[0].main);
}

const setInnerTextById = (id, text) => {
  const temperature = document.getElementById(id);
  temperature.innerText = text;
}

document.getElementById('button-search').addEventListener('click',function(){

const searchField = document.getElementById('search-field');
const city = searchField.value;

//set city 
document.getElementById('city').innerText = city.toUpperCase();

loadTemperature(city);

})


loadTemperature('dhaka');
