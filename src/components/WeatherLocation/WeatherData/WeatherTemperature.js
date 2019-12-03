import React from 'react';
import WeatherIcons from 'react-weathericons';
import {
    CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY,
} from '../../../constants/weathers';
import PropTypes from 'prop-types';

import './styles.css'

const sizeIcon = '4x';
const icons = {
    [CLOUD]: 'cloud',
    [CLOUDY]: 'cloudy',
    [SUN]: 'day-sunny',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [WINDY]: 'windy'
}

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];

    if (icon) {
        return <WeatherIcons className='wicon' name={icon} size={sizeIcon} />
    } else {
        return <WeatherIcons className='wicon' name={'day-sunny'} size={sizeIcon} />
    }

}
const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className='weatherTempetureCont'>
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperature">{` C°`}</span></div>
);

WeatherTemperature.prototype = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;