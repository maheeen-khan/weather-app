import React, { useEffect, useState } from 'react'
import './Weather.css'
import { SearchOutlined } from '@ant-design/icons'
import clear from '../assets/sunny.png'
import humidity from '../assets/humidity.png'
import wind from '../assets/windy.png'
import axios from 'axios'
const Weather = () => {

    let APIkey = "b346984158b548d3c96eda4ad77ca172";

    const [cityName, setCityName] = useState('');
    const [weather, setWeather] = useState({
        location: '',
        temperature: '',
        windSpeed: '',
        humidity: ''
    });

        async function fetchData(city) {
            try {
                const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`);

                console.log(res.data);
                console.log(res.data.name);

                setWeather({
                    location: res.data.name,
                    temperature: Math.floor(res.data.main.temp),
                    windSpeed: res.data.wind.speed,
                    humidity: res.data.main.humidity,
                    icon:res.data.weather[0].icon
                })
                console.log(weather)
            }
            catch (e) {
                console.log(e);
                setWeather(false)
            }
        }
        
    useEffect(()=>{
        fetchData('Karachi')
    },[])    

    return (
        <>
            <h1 className='head'>Weather App</h1>
            <br />
            <div className="whole-box">
                <div className="inp-wrap">
                    <input type="text" placeholder='Search' title='Enter City name' className='inp' onChange={(e) => { setCityName(e.target.value) }} />
                    <div className="search" onClick={()=>fetchData(cityName)}>
                        <SearchOutlined />
                    </div>
                </div>

                <div className="img">
                    <img src={weather.icon} alt="" width={120} />
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
        </>
    )
}

export default Weather