import React from 'react';
import './Weather.css'

const weather = props =>{

    return (
        <table className="Weather">
            <caption>Pogoda w mieście: Kielce</caption>
                <tbody>
                    <tr>
                        <th colSpan="2">Dzień i godzina</th>
                        <td>wtorek 10:00:11</td>
                    </tr>
                    <tr>
                        <th colSpan="2">Warunki</th>
                        <td>clouds</td>
                    </tr>
                    <tr>
                        <td>Parametr</td>
                        <td>Jednostka</td>
                        <td>Wartość</td>
                    </tr>
                    <tr>
                        <th>temperatura</th>
                        <td>&deg;C</td>
                        <td>34</td>
                    </tr>
                    <tr>
                        <th>wilgotność</th>
                        <td>g/m<sup>3</sup></td>
                        <td>34</td>
                    </tr>
                    <tr>
                        <th>ciśnienie</th>
                        <td>hPa</td>
                        <td>1008</td>
                    </tr>
                    <tr>
                        <th>wiatr</th>
                        <td>m/godz.</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <th>Wschód słońca</th>
                        <td>-</td>
                        <td>7:00:10</td>
                    </tr>
                    <tr>
                        <th>Zachód słońca</th>
                        <td>-</td>
                        <td>16:00:34</td>
                    </tr>
                </tbody>
            </table>
    )
}

export default weather