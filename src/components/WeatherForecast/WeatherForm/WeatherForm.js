import React from 'react';
import './WeatherForm.css';
import Button from '../../Button/Button';

const weatherForm = props => {

    return (
        <form submit=""className="WeatherForm">
            <input type="text" placeholder="Wpisz miasto..."/>
            <Button btnClass="CheckWeather">Sprawdź pogodę</Button>
        </form>
    )
}

export default weatherForm