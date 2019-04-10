import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherTitle from './WeatherTitle';
import WeatherDisplay from './WeatherDisplay';
import './Weather.css';



class Weather extends Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined, 
        humidity: undefined,
        description: undefined,
        error: undefined
    }
    
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=14e9280bd80c04ac9e22b05f6b1fd21e`);
        const response = await api_call.json();
        if (city && country) {
            this.setState({
                temperature: response.main.temp,
                city: response.name,
                country: response.sys.country,
                humidity: response.main.humidity,
                description: response.weather[0].description,
                error: ""
            })
        } else {
            this.setState({
                error: "Please enter the values..."
            })
        }
    }
    
    render() {
        return(
            <div>  
                <WeatherTitle />
                <WeatherForm loadWeather={this.getWeather} />
                <WeatherDisplay 
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                />            
            </div>
    )
}
}

export default Weather;