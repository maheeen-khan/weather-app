import React, { useEffect, useState } from 'react'
import './Weather.css'
import { SearchOutlined } from '@ant-design/icons'
import humidity from '../assets/humidity.png'
import wind from '../assets/windy.png'
import cloud from '../assets/cloud.png'
import cloudy from '../assets/cloudy.png'
import sunny from '../assets/sunny.png'
import lRain from '../assets/rain.png'
import rain from '../assets/sRain.png'
import axios from 'axios'
import Spinner from './Spinner.jsx'
const Weather = () => {

    let APIkey = "b346984158b548d3c96eda4ad77ca172";

    const allIcons = {
        "01d": sunny,
        "02d": cloudy,
        "03d": cloud,
        "04d": cloud,
        "09d": lRain,
        "10d": rain,
        "11d": rain,
        "50d": wind
    }
    const [cityName, setCityName] = useState('');
    const [weather, setWeather] = useState({});

    async function fetchData(city) {
        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`);

            console.log(res.data);
            console.log(res.data.name);

            const n_icon = allIcons[res.data.weather[0].icon] || wind
            // console.log(n_icon)
            setWeather({
                location: res.data.name,
                temperature: Math.floor(res.data.main.temp),
                windSpeed: res.data.wind.speed,
                humidity: res.data.main.humidity,
                icon: n_icon
            })
            console.log(weather)
        }
        catch (e) {
            console.log(e);
            setWeather(false)
        }
    }

    useEffect(() => {
        fetchData('Karachi')
    }, [])

    return (
        <>
            <h1 className='head'>Weather App</h1>
            <br />
            <div className="whole-box">
                <div className="inp-wrap">
                    <input type="text" placeholder='Search' title='Enter City name' className='inp' onChange={(e) => { setCityName(e.target.value) }} />
                    <div className="search" onClick={() => fetchData(cityName)}>
                        <SearchOutlined />
                    </div>
                </div>
                {weather.location ? <div className="render">
                    <div className="img">
                        <img src={weather.icon} alt="" width={100} />
                        {/* <p>{`http://openweathermap.org/img/w/${weather.icon}.png`}</p> */}
                        <p className='temp'>{weather.temperature}°C</p>
                        <p className='city'>{weather.location}</p>
                        {/* <p>{cityName}</p> */}
                    </div>

                    <div className="bottom">
                        <div className="col">
                            <img src={humidity} alt="" width={30} />
                            <div className="data">
                                <p>{weather.humidity}%</p>
                                <span>Humidity</span>
                            </div>
                        </div>


                        <div className="col">
                            <img src={wind} alt="" width={30} />
                            <div className="data">
                                <p>{weather.windSpeed}</p>
                                <span>Wind speed</span>
                            </div>
                        </div>

                    </div>

                </div>
                :
                // <h2>Loading</h2>
                <Spinner/>
                }
                
            </div>
        </>
    )
}

export default Weather