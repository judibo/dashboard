import React from 'react';
import './WeatherForm.css';


const WeatherForm = (props) => {
  return (
      <form onSubmit={props.loadWeather} className="WeatherForm">
        <input type="text" name="city" placeholder="City" />
        <input type="text" name="country" placeholder="Country" />
        <button className="BtnWeather">Get Weather</button>
      </form>
  )
}

export default WeatherForm;