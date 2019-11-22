import React from 'react';
import "../Modal/Modal.css";
 

const Weather = ({ weathers }) => (    

    <div>
    { weathers.map(weather => 
        <div key={weather.headline}>
        <h3>{weather.display_title}</h3>
        </div>) }
    </div>
)

Weather.defaultProps = {
    weathers: []
  };
// defaultProps object to the component; when React renders the component, 
// the default props will be used unless the parent overrides them

export default Weather;

//<h3>{weather.main}</h3>

//https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22
//https://openweathermap.org/current