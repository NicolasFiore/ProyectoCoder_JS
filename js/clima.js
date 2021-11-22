window.addEventListener('load', ()=>{
    let longitud;
    let latitud;
    let temperatura = document.getElementById('temperatura');
    let climaDescripcion = document.getElementById('climaDescripcion');

// Traigo la ubicacion
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(posicion =>{
            longitud = posicion.coords.longitude;
            latitud = posicion.coords.latitude;

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&lang=es&units=metric&appid=5d47e9996d184aa6efa8589c482a08d3`;

            // Llamo a la API usando fetch
            fetch(url)
            .then (response => {return response.json() })
            .then (data => {
                let temperaturaValor = Math.round(data.main.temp);
                temperatura.textContent = `${temperaturaValor}°C`;
                let clima = data.weather[0].description;
                climaDescripcion.textContent = clima.toUpperCase();
            })
            .catch(error => {
                console.log(error);
            })

        })
    }
})