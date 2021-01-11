var button = document.querySelector('.button');
var locationButton = document.querySelector('.locationButton');
var inputValue = document.querySelector('.inputValue');
var namecity = document.querySelector('.namecity');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function () {
    console.log('Button clicked');
    console.log(inputValue.value);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=96faa58a65872d058e866a79a6561dbc`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var descValue = data['weather'][0]['description'];

            namecity.innerHTML = nameValue;
            temp.innerHTML = tempValue;
            desc.innerHTML = descValue;
        })
        .catch(err => alert("Wrong city name"))
})

locationButton.addEventListener('click', function () {
    fetch('https://api.ipgeolocation.io/ipgeo?apiKey=c2329dcefa284eeb9d7c826b8b8f65e1&fields=country_capital')
        .then(response => response.json())
        .then(data => {
            var location = data['country_capital'];
            console.log(data);
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=96faa58a65872d058e866a79a6561dbc`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    var nameValue = data['name'];
                    var tempValue = data['main']['temp'];
                    var descValue = data['weather'][0]['description'];

                    namecity.innerHTML = nameValue;
                    temp.innerHTML = tempValue;
                    desc.innerHTML = descValue;
                })
                .catch(err => alert("Wrong city name"))
        })
})

