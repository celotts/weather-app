import React, { Component } from 'react';
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress';
import transformWeather from './../../services/transformWeather';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';
import getUrlWeatherCity from '../../services/getUrlWeatherByCity';


class WeatherLocation extends Component {

    constructor(props) {
        super(props);

        const { city } = props;
        this.state = {
            city,
            data: null
        }
    }
    componentDidMount() {
        this.handleUpdateClick();
    }


    handleUpdateClick = () => {
        const api_weather = getUrlWeatherCity(this.state.city);

        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {

            const newWeather = transformWeather(data);
            console.log(data);

            this.setState({
                data: newWeather
            })
        });

    }

    render() {
        const { city, data } = this.state;
        return (
            <div className='weatherLocationCont'>
                <Location city={city} />
                {data ?
                    <WeatherData data={data} /> :
                    <CircularProgress></CircularProgress>
                }

            </div>
        )
    }
};

WeatherLocation.prototypes = {
    city: PropTypes.string.isRequired
}
export default WeatherLocation;