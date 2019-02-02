import React, { Component } from 'react';
import './Weather.css'


class Weather extends Component {
   
    shouldComponentUpdate(nextProps,nextState){
        console.log("Should component updated")
        console.log(nextProps.weather.city,this.props.weather.city)
        return nextProps.weather.city!==this.props.weather.city
    }

    render(){
    console.log("render")
    let messageClass = ["Message"]
    const {date,main,temperature,sunrise,sunset,value,humidity,pressure,wind,city,error,errorStatus} = this.props.weather

    //Convert time in second to normal time
    const sunr = new Date(sunrise*1000).toLocaleTimeString()
    const suns = new Date(sunset*1000).toLocaleTimeString()

    let content = <div className={messageClass}>
    <p>Tutaj znajdzie się aktualna pogoda dla Twojego miasta.<br/><em>Podaj prawidłową nazwę miasta</em></p>
    </div>

    //Using this.state.value intead of this.state.city we
    //invoke onchange event and then show content although
    // we did not write full name city. We do not that, so have to use this.state.city and to display content if event submit occurs.

    if(!error && city) {    
        content = (
            <table className="Weather">
            <caption><h2>Pogoda w mieście: <em>{value.toUpperCase()}</em></h2></caption>
                <tbody>
                    <tr>
                        <th colSpan="2">Dzień i godzina</th>
                        <td>{date}</td>
                    </tr>
                    <tr>
                        <th colSpan="2">Wschód słońca</th>
                        <td>{sunr}</td>
                    </tr>
                    <tr>
                        <th colSpan="2">Zachód słońca</th>
                        <td>{suns}</td>
                    </tr>
                    <tr>
                        <th colSpan="2">Warunki</th>
                        <td>{main}</td>
                    </tr>
                    <tr className="Divider">
                        <th>Parametr</th>
                        <th>Jednostka</th>
                        <th>Wartość</th>
                    </tr>
                    <tr>
                        <th>temperatura</th>
                        <td>&deg;C</td>
                        <td>{temperature}</td>
                    </tr>
                    <tr>
                        <th>wilgotność</th>
                        <td>g/m<sup>3</sup></td>
                        <td>{humidity}</td>
                    </tr>
                    <tr>
                        <th>ciśnienie</th>
                        <td>hPa</td>
                        <td>{pressure}</td>
                    </tr>
                    <tr>
                        <th>wiatr</th>
                        <td>m/godz.</td>
                        <td>{wind}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
    else {
        if(errorStatus==="400"){
            messageClass = ["Message","ERR"+errorStatus]
            content = (
                <div className={messageClass.join(' ')}><p>
                <strong> ERROR {errorStatus} </strong>
                <br/>
                Miasto zawsze posiada nazwe, inną niż pusty łańcuch zanków.
                </p></div>
            )
            
        }
        else if(errorStatus==="404") {
            messageClass = ["Message","ERR"+errorStatus]
            content = (
                <div className={messageClass.join(' ')}><p>
                <strong> ERROR {errorStatus} </strong>
                <br/>
                Nie ma w bazie miasta o podanej nazwie.
                Wygoogluj to proszę :)
                </p></div>
            )
        }
    }
        return(
            <React.Fragment>
                {content}
            </React.Fragment>
        )
    }
}

export default Weather