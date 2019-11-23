import React, { Component } from 'react';
import 'isomorphic-fetch';
import Weather from './Weather'
import { Form , Col , Button } from 'react-bootstrap'

const APPID = '&APPID=d27474c19e1a0bfab83b593ae5598cd3';
const URL = "https://api.openweathermap.org/data/2.5/weather?q="

class SearchableWeathersContainer extends React.Component {
  state = {
      weathers: [],
      searchTerm: ""
  }; 

  handleSubmit = event => {
    event.preventDefault()
    this.fetchWeather(this.state.searchTerm) 
    this.setState({ searchTerm: "" })
}


fetchWeather = (searchTerm) => {
  fetch(URL.concat(searchTerm).concat(APPID))
    .then(res => res.json())
    .then(data => this.setState({ weathers: data })); // array of objects

}

  render() {
      return (
        <div>

        <Form onSubmit={this.handleSubmit}>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Check your city's Weather</Form.Label>
            <Form.Control 
              style={{width: "130px"}}
              type="text"
              value={this.state.searchTerm}
              onChange={event => this.setState({searchTerm: event.target.value})}/>
            </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>

        </Form>
        
        <Weather weathers={this.state.weathers} />  
      </div>
      // onChange sets State to input value
      // submit fires onSubmit(handleSubmit) and Fetches data using onChange new state
      // return() uses Weather component to show data with new state
      )
    }
}

export default SearchableWeathersContainer;