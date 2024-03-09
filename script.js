const result = document.querySelector(".details");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6a920181b2msh5537aaa19f19adep1efcabjsncbfde77db99b",
    "X-RapidAPI-Host": "cities-temperature.p.rapidapi.com",
  },
};

async function getWeather() {
  const city = document.querySelector("#city").value;
  const url = `https://cities-temperature.p.rapidapi.com/weather/v1?city=${city}`;

  let request = await fetch(url, options);
  let response = await request.json();
  console.log(response);
  const template = `<div class="temp">
<p>Temperature</p>
<p class="bold">${response.temperature}</p>
</div>
<div class="celsius">
<p>Celsius</p>
<p class="bold">${response.temperatureC} °C</p>
</div>
<div class="fahrenheit">
<p>Fahrenheit</p>
<p class="bold">${response.temperatureF} °F</p>
</div>`;
  result.innerHTML = template;
}
