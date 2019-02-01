import React from 'react';
import './Weather.css'

const weather = props =>{


    //Convert time in second to normal time
    const sunrise = new Date(props.weather.sunrise*1000).toLocaleTimeString()
    const sunset = new Date(props.weather.sunset*1000).toLocaleTimeString()

    return (
        <table className="Weather">
            <caption><h2>Pogoda w mieście: <em>{props.weather.value}</em></h2></caption>
                <tbody>
                    <tr>
                        <th colSpan="2">Dzień i godzina</th>
                        <td>{props.weather.date}</td>
                    </tr>
                    <tr>
                        <th colSpan="2">Wschód słońca</th>
                        <td>{sunrise}</td>
                    </tr>
                    <tr>
                        <th colSpan="2">Zachód słońca</th>
                        <td>{sunset}</td>
                    </tr>
                    <tr>
                        <th colSpan="2">Warunki</th>
                        <td>{props.weather.main}</td>
                    </tr>
                    <tr className="Divider">
                        <th>Parametr</th>
                        <th>Jednostka</th>
                        <th>Wartość</th>
                    </tr>
                    <tr>
                        <th>temperatura</th>
                        <td>&deg;C</td>
                        <td>{props.weather.temperature}</td>
                    </tr>
                    <tr>
                        <th>wilgotność</th>
                        <td>g/m<sup>3</sup></td>
                        <td>{props.weather.humidity}</td>
                    </tr>
                    <tr>
                        <th>ciśnienie</th>
                        <td>hPa</td>
                        <td>{props.weather.pressure}</td>
                    </tr>
                    <tr>
                        <th>wiatr</th>
                        <td>m/godz.</td>
                        <td>{props.weather.wind}</td>
                    </tr>
                </tbody>
            </table>
    )
}

export default weather