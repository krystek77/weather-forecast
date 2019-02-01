import React, { Component } from 'react';
import './WeatherForecast.css';
import WeatherForm from './WeatherForm/WeatherForm';
import Weather from './Weather/Weather'

//API KEY
const APPID = '8dbe00c7e7feb140202cb4fd7e1a80b4'

class WeatherForecast extends Component {

    constructor(props){
        super(props)
        this.state = {
            value:"",
            main:"",
            temperature:"",
            humidity:"",
            wind:"",
            sunrise:"",
            sunset:"",
            pressure:"",
            date:"",
            city:"",
            error:""
        }
    }

    submitForecastHandler = (e)=>{
        e.preventDefault();
        // console.log("Wysyłamy formularz o pogodę dla miasta")
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&units=metric&APPID=${APPID}`)
        .then(response=>{
            // console.log(response)
            if(response.ok){
                return response
            }
            throw Error("Something went wrong. KOD "+response.status)
        })
        .then(data=>data.json())
        .then(data=>{
            console.log(data)
            const time = new Date().toLocaleString()
            // console.log(time)
            this.setState({
                date:time,
                main:data.weather[0].main,
                temperature:data.main.temp,
                humidity:data.main.humidity,
                wind:data.wind.speed,
                sunrise:data.sys.sunrise,
                sunset:data.sys.sunset,
                pressure:data.main.pressure,
                city:data.name,
                error:false
            })
        })
        .catch(error=>{
            this.setState({
                error:true
            })
        })

    }
    inputValueHandler = (e)=>{
        // console.log("Zmieniamy miasto w obiekcie state")
        this.setState({
            value:e.target.value
        })
    }

    // componentDidUpdate(prevProps,prevState){
    //     console.log({prevProps})
    //     console.log({prevState})
    // }

    render(){
        // console.log('render')
        return (
            
            <div className="WeatherForecast">
                <WeatherForm 
                    submit={this.submitForecastHandler}
                    value={this.state.value}
                    change={this.inputValueHandler}
                />
                <Weather weather={this.state}/>
                {String("Did the error occur? "+this.state.error)}
            </div>
        )
    }
}

export default WeatherForecast