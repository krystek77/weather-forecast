import React from 'react';
import './WeatherForm.css';
import Button from '../../Button/Button';

const weatherForm = props => {

    return (
        <form onSubmit={props.submit} className="WeatherForm">
            <input 
                value={props.value}
                onChange={props.change}
                type="text" 
                placeholder="Wpisz miasto..."/>
            <Button btnClass="CheckWeather">Sprawdź pogodę</Button>
        </form>
    )
}

export default weatherForm