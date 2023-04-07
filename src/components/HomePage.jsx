import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const HomePage=(props)=>{


    let[citySearched,setCitySearched]=useState('')
    let[cityName,setCityName]=useState('')
    let[weather,setWeather]=useState([])
    let[weatherI,setWeatherI]=useState([])

    const eseguifetch = (lon,lat) => {

            return(
                fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,rain,visibility,uv_index&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&current_weather=true&timezone=auto`)
            .then((response) => {
                return (response.json())
            })
            .then(dati => {
                setWeather([dati])
                props.weatherDC(dati)
            })
            )
    }



const fetchWeather=(City)=>{
    return(
        fetch(`https://geocode.maps.co/search?q=${City}`)
    .then((response) => {
        return (response.json())
    })
    .then(dati => {
        eseguifetch(parseFloat(dati[0].lon),parseFloat(dati[0].lat))

    })
    )
}


//


    return(
        <>
        <Row className='row-cols-1 justify-content-center'>
            <Col xs={12} md={8} lg={6} >
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search City...."
                className="me-2"
                aria-label="Search "
                value={citySearched}
                onChange={(e)=>{
                    setCitySearched(e.target.value)
                }}
              />
              <Button variant="outline-success" onClick={()=>{
               setCityName(citySearched)
               props.setCityName(citySearched)
               fetchWeather(citySearched);
                }}>Search</Button>
            </Form>
            </Col>

            
        </Row>

        {
               weather.map((element,i)=>{
                
                return(
                    <Col key={i}>
                        <h1 className='mb-0 titolo'>{cityName}</h1>
                        <p id='deg'>{element.current_weather.temperature}°<i className="bi bi-thermometer fs-2"></i></p>
                        <p >Max: {element.daily.temperature_2m_max[0]}° - Min: {element.daily.temperature_2m_min[0]}°<br/>
                        </p>
                        <Link to='/details'className='btn btn-primary mt-2'>Details</Link>
                    </Col>
                   
                
                )
               }) 
            }
        </>
    )
}

export default HomePage