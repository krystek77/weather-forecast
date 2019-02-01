import React, { Component } from 'react';
import './WeatherForecast.css';
import WeatherForm from './WeatherForm/WeatherForm';
import Weather from './Weather/Weather'


const APPID = '8dbe00c7e7feb140202cb4fd7e1a80b4'
const API = `http://api.openweathermap.org/data/2.5/weather?q=Kielce&units=metric&APPID=${APPID}`

class WeatherForecast extends Component {

    constructor(props){
        super(props)
        this.state = {
            value:""
        }
    }

    submitForecastHandler = (e)=>{
        e.preventDefault();
        // console.log("Wysyłamy formularz o pogodę dla miasta")
    }
    inputValueHandler = (e)=>{
        // console.log("Zmieniamy miasto w obiekcie state")
        this.setState({
            value:e.target.value
        })
    }

    componentDidUpdate(prevProps,prevState){
        console.log({prevProps})
        console.log({prevState})
    }

    render(){
        console.log('render')
        return (
            <div className="WeatherForecast">
                <WeatherForm 
                    submit={this.submitForecastHandler}
                    value={this.state.value}
                    change={this.inputValueHandler}
                />
                <Weather/>
            </div>
        )
    }
}

export default WeatherForecast