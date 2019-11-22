import React, { Component } from 'react';
import 'isomorphic-fetch';
import Weather from './Weather'

const NYT_API_KEY = 'Pf2z1uTtMAwdSsefhofGywWzMAAxdjbz';

const URL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?"
            + `api-key=${NYT_API_KEY}&query=`;





//const URL = "https://api.openweathermap.org/data/2.5/weather?q="
//            + `api-key=${NYT_API_KEY}&query=`;
//const APPID = 'd27474c19e1a0bfab83b593ae5598cd3';



//const URL = "https://api.openweathermap.org/data/2.5/weather?q=London,uk"
//             + `&APPID=${APPID}`;
//            + `api-key=${NYT_API_KEY}&query=`;

//api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d27474c19e1a0bfab83b593ae5598cd3

class SearchableWeathersContainer extends React.Component {
  state = {
      weathers: [],
      searchTerm: ""
  }; 

  handleSubmit = event => {
    event.preventDefault()
    this.fetchWeather(this.state.searchTerm) 
}

fetchWeather = (searchTerm) => {
  fetch(URL.concat(searchTerm))
    .then(res => res.json())
    .then(data => this.setState({ weathers: data.results })); // array of objects
}

  render() {
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <input
          type="text"
          value={this.state.searchTerm}
          onChange={event => this.setState({searchTerm: event.target.value})}/>
        
        <button type="submit">Submit</button>
        </form>
        <Weather weathers={this.state.weathers} />  
      </div>
      // onChange sets State to input value
      // submit fires onSubmit(handleSubmit) and Fetches data using onChange new state
      // return() uses Weather component to show data with new state
      )
    }
}

export default SearchableWeathersContainer;