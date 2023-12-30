const API_KEY = `36a568ba83e3f56a377c3ca39a578c69`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getWeather = async (city) => {
  weather.innerHTML = `<h2> Loding... </h2>`;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const response = await fetch(URL);
  const data = await response.json();

  return showWeather(data);
};

const showWeather = (data) => {
  if (data.cod == "404") {
    weather.innerHTML = swal(
      "City Is Not Found!",
      "...Plz Enter A Right Location!"
    );
    return;
  }
  weather.innerHTML = `<div>
  <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
  </div>

  <div>
    <h2>${data.main.temp} °C</h2>
    <h4>${data.weather[0].main}</h4>
  </div>`;
};

form.addEventListener(
    'submit' , (event) => {
    getWeather(search.value);
    event.preventDefault();
}
)
