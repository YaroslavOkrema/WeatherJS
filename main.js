const apiKey = '642c1ad128fd816bcb4ea30d07064974';

// Получаем название города
const header = document.querySelector('.header');
const form = document.querySelector('#form');
const input = document.querySelector('#input');
const cardValue = document.querySelector('#card-value');

// сабмит формы
form.addEventListener('submit', (event) => {
    // отмена поведения формы по умолчанию
    event.preventDefault();

    // получаем значение из инпута
    let city = input.value.trim();
    console.log(city);

    // запрос на сервер
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(api)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            const htmlCard = `
                <div class="card">
                    <h2 class="card-city">${data.name}<span>GB</span></h2>
                    <div class="card-weather">
                        <div id="card-value" class="card-value">${data.main.temp}</div>
                        <img class="card-img" src="./img/drizzle.png" alt="img">
                    </div>
                    <div class="card-description">Cloud</div>
                </div>`;

            header.insertAdjacentHTML('afterend', htmlCard);
        });
});

