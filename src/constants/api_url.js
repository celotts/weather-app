
const locations = 'Santiago,cl';
const api_key = 'ca270863e534427b71258c103d5df920';
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather';
export const api_weather = `${url_base_weather}?q=${locations}&appid=${api_key}`;