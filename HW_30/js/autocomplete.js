let weatherDesc = document.querySelector('.weather-desc');
let locationDesc = document.querySelector('.weather-location');
let latitude, longtitude;
let latitudeLS, longtitudeLS;
function initMap () {
   let element = document.querySelector("#map");
   let valueInput = document.getElementById('inputAuto');
   let options = {
       zoom: 10,
       center: {lat: 50.431782, lng: 30.516382}
   };
   let map = new google.maps.Map(element, options);
   let infoWindow = new google.maps.InfoWindow();
   let marker = new google.maps.Marker({
       map: map
   });
   let autocomplete = new google.maps.places.Autocomplete(valueInput);
   google.maps.event.addListener(autocomplete, 'place_changed', function () {
        marker.setVisible(false);
        infoWindow.close();
        let place = autocomplete.getPlace();
        if (place && place.geometry) {
           setInfoToLS(place);
           locationDesc.innerHTML = `${place.name}`;
        } else {
           locationDesc.innerHTML = `Введите город:`;
           weatherDesc.innerHTML = '';
        }
        //viewport - можно использ для центрирования карты
       //fitBounds() - привязка к карте конкретного места
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            alert('Error!');
        }
        marker.setIcon ({
            url: place.icon, //тут может быть любая картинка, пока кастомное из place
            scaledSize: new google.maps.Size(35, 35)
        });
        //ставим метку на область с выбранными координатами
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);

       let address = '';
       //address_components - обработанные составные части выбранного адреса
       if (place.address_components) {
           address = [
               (place.address_components[0] && place.address_components[0].short_name || ''),
               (place.address_components[1] && place.address_components[1].short_name || ''),
               (place.address_components[2] && place.address_components[2].short_name || '')
           ].join(' ');
       }
       infoWindow.setContent('<div><b>' + place.name + '</b><br>' + address + '</div>');
        //точка надо которой будет подсказка с названием города и тд
       infoWindow.open(map, marker);

       if (place.geometry.location.lat().toFixed(2) === latitudeLS && place.geometry.location.lng().toFixed(2) === longtitudeLS) {
           latitude = latitudeLS;
           longtitude = longtitudeLS;
       } else {
           latitude = place.geometry.location.lat();
           longtitude = place.geometry.location.lng();
       }
       let link = 'https://api.openweathermap.org/data/2.5/weather?lat=';
       let api = 'appid=4282fb6027f0df9c99e24508c3e1f5ee';
       fetch(`${link}${latitude}&lon=${longtitude}&${api}&units=metric`)
           .then(response => {
               if (!response.ok) {
                   throw new Error(`Запрос отклонен со статусом ${response.status} : ${response.statusText}`);
               }
               return response.json();
           })
           .then(weather => {
               console.log(weather);
               renderWeather(weather);
           })
           .catch(error => {
               console.log(error.message);
           });
   });
}
window.onload = getInfoFromLS;
function setInfoToLS(place) {
    let storage = window.localStorage;
    let item = {
            "lat": place.geometry.location.lat().toFixed(2),
            "lon": place.geometry.location.lng().toFixed(2)
    };
    let sItem = JSON.stringify(item);
    localStorage.setItem('place',sItem);
}
function getInfoFromLS() {
    let objPlace = JSON.parse(localStorage.getItem('place'));
    latitudeLS = objPlace['lat'];
    longtitudeLS = objPlace['lon'];
}
function renderWeather (weather) {
    let iconСode = weather.weather[0].icon;
    let descrIcon = weather.weather[0].description;
    let weatherTemp = weather.main.temp;
    let weatherHum = weather.main.humidity;
    weatherDesc.innerHTML = '<img src=http://openweathermap.org/img/w/' + iconСode + '.png class="weather-city__icon" align="center">' + descrIcon + ', ' + weatherTemp + ' C°, ' + weatherHum + "%";
}


