// import "../scss/app.scss";

window.addEventListener('DOMContentLoaded', () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector('ul');

  let url = 'https://pokeapi.co/api/v2/pokemon/?limit=10';

  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }

  function toJSON(response) {
    return response.json();
  }

  fetch(url)
    .then(checkStatus)
    .then(toJSON)
    .then((data) => {
      for (let i = 0; i < data.results.length; i++) {
        const li = document.createElement('li');
        li.innerText = data.results[i].name;
        ul.appendChild(li);
      }
    });

  // fetch(url).then((response) => {
  //   if (response.status !== 200) {
  //     console.log(response.status);
  //     return;
  //   }

  //   response.json().then((data) => {
  //     console.log(data);
  //   });
  // });
});
