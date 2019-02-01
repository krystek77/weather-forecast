import React, { Component } from 'react';
import './WeatherForecast.css';
import WeatherForm from './WeatherForm/WeatherForm';
import Weather from './Weather/Weather'


// const APPID = '8dbe00c7e7feb140202cb4fd7e1a80b4'
// const API = 'http://api.openweathermap.org/data/2.5/weather?q=Kielce&units=metric&APPID=8dbe00c7e7feb140202cb4fd7e1a80b4'

class WeatherForecast extends Component {

    render(){
        return (
            <div className="WeatherForecast">
                <WeatherForm/>
                <Weather/>
            </div>
        )
    }
}

export default WeatherForecast