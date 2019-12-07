import React from 'react'; 

const Weather = ({ weathers }) => {    

    if (!weathers.main) {
        return null;
      }
    return (

    <div id="weatherStyle">
        <p>City: { weathers.name}</p>
        <p>Temperature: {Math.round(weathers.main.temp -273.15)}°C</p>
        <p>Humidity: {weathers.main.humidity}%</p>
        <p>Wind: {weathers.wind.speed}km/h</p>
        <p>Forecast: {weathers.weather.map(w=>w.main)}</p>
    </div>
    )}

Weather.defaultProps = {
    weathers: []
  };

export default Weather;
