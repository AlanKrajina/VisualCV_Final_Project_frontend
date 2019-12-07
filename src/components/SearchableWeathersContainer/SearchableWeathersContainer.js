import React, { Component } from 'react';
import 'isomorphic-fetch';
import Weather from './Weather'
import { Form , Col , Button } from 'react-bootstrap'

const APPID = '&APPID=d27474c19e1a0bfab83b593ae5598cd3';
const URL = "https://api.openweathermap.org/data/2.5/weather?q="

class SearchableWeathersContainer extends Component {
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
      .then(data => this.setState({ weathers: data })); 
  }

  render() {
      return (
        <div id="sectionStyle2">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label >Weather Forecast:</Form.Label>
            <Form.Control 
              style={{width: "130px"}}
              type="text"
              placeholder="city name"
              value={this.state.searchTerm}
              onChange={event => this.setState({searchTerm: event.target.value})}/>
            </Form.Group>
          <Button style={{marginLeft: "7%"}} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Weather weathers={this.state.weathers} />  
      </div>
      )
    }
}

export default SearchableWeathersContainer;