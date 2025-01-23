// Define the API URL

const userInp = document.querySelector('input');

const btn = document.querySelector('.btn');

const outputEl = document.querySelector('.output');

btn.addEventListener('click', () => {
  const city = userInp.value;
  console.log(city);

  const apiURL = `http://api.weatherapi.com/v1/current.json?key=5a45e05a6c084a3f969120500252301&q=${city}&aqi=yes`;

  fetch(apiURL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //   console.log(data.current);

      const newEl = document.createElement('div');
      newEl.innerHTML = `


            <p class=" text-white font-bold text-xl mt-4">Location:  <span>${data.location.name}</span></p>
            <p class=" text-white font-bold text-xl mt-4">Temperature:  <span>${data.current['temp_c']}</span></p>
            <p class=" text-white font-bold text-xl mt-4">Condition:  <span>${data.current.condition.text}</span></p>

`;
      outputEl.append(newEl);
    });
});
