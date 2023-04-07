

const DetailsPage=(props)=>{
    console.log(props.weather)

    
    return(
        <>
        <h1 className='titolo'>{props.cityW}</h1>
        <p>
            Actual temperature:{props.weather.current_weather.temperature}°<br/>
        windspeed:{props.weather.current_weather.windspeed} km/h<br/>
        Maximun: {props.weather.daily.temperature_2m_max[0]}° - Minimum: {props.weather.daily.temperature_2m_min[0]}°
        </p>
        </>
        
    )
}

export default DetailsPage