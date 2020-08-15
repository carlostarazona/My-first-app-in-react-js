import React from 'react';
import WeatherIcons from 'react-weathericons';

const icons = {
    sunny :"date-sunny",
    fog   :"date-fog",
};

const getweatherIcon  = weatherState =>{
    const icon = icons[weatherState];
    if (icon) 
        return <WeatherIcons name={icon} size="2x"/>;
    else
        return <WeatherIcons name={"day-sunny"} size="2x"/>;

}
const WeatherTemperature = ({temperature, weatherState}) => (
    <div>
        {getweatherIcon(weatherState)}
        <span>{`${temperature} C°`}</span>
    </div>
);

export default WeatherTemperature;