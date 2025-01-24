// Define the API URL

const userInp = document.querySelector('input');

const btn = document.querySelector('.btn');

const outputEl = document.querySelector('.output');

btn.addEventListener('click', (e) => {
  e.preventDefault();

  const city = userInp.value;

  outputEl.innerHTML = '';

  const apiURL = `https://api.weatherapi.com/v1/current.json?key=5a45e05a6c084a3f969120500252301&q=${city}&aqi=yes`;

  fetch(apiURL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const newEl = document.createElement('div');
      newEl.classList.add('py-6');
      newEl.innerHTML = `


            <p class=" fade-in text-white font-bold text-xl mt-4">Location:  <span class="font-semibold">${
              data.location.name
            } [${data.location.region}- ${data.location.country}] </span></p>
            <p class=" fade-in text-white font-bold text-xl mt-4">Date:  <span class="font-semibold">${data.location.localtime.slice(
              0,
              10
            )}  </span></p>
            <p class=" fade-in text-white font-bold text-xl mt-4">Temperature:  <span class="font-semibold">${
              data.current['temp_c']
            }</span></p>
            <p class=" fade-in text-white font-bold text-xl mt-4 flex items-center">Condition:&nbsp  <span class="font-semibold flex items-center"> ${
              data.current.condition.text
            } <img src="${data.current.condition.icon}" alt="Weather">
            </span></p>

`;
      outputEl.append(newEl);
    })
    .catch((err) => {
      const newEl = document.createElement('div');
      newEl.classList.add(
        'py-6',
        'fade-in',
        'text-white',
        'font-bold',
        'text-xl',
        'mt-4',
        'text-center'
      );
      newEl.innerHTML = 'Not Found for the above location';

      outputEl.append(newEl);
    });

  userInp.value = '';
});
