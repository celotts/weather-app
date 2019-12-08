import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import transformWeather from './../../services/transformWeather';
import { api_weather } from './../../constants/api_url';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';


class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Buenos Aires',
            data: null
        }
    }
    componentDidMount() {
        this.handleUpdateClick();
    }


    handleUpdateClick = () => {
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

export default WeatherLocation;