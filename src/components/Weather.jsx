import React from 'react'
import './Weather.css'
import { SearchOutlined } from '@ant-design/icons'
import clear from '../assets/sunny.png'
import humidity from '../assets/humidity.png'
import wind from '../assets/windy.png'
const Weather = () => {
    return (
        <>
            <h1 className='head'>Weather App</h1>
            <br />
            <div className="whole-box">
            <div className="inp-wrap">
                <input type="text" placeholder='Search' title='Enter City name' className='inp' />
                <div className="search">
                    <SearchOutlined />
                </div>
            </div>

            <div className="img">
                <img src={clear} alt="" width={120} />
                <p className='temp'>16°C</p>
                <p className='city'>London</p>
            </div>

            <div className="bottom">
                <div className="col">
                    <img src={humidity} alt="" width={30}/>
                    <div className="data">
                        <p>91%</p>
                        <span>Humidity</span>
                    </div>
                </div>
                

                <div className="col">
                    <img src={wind} alt="" width={30} />
                    <div className="data">
                        <p>3.6</p>
                        <span>Wind speed</span>
                    </div>
                </div>

            </div>
            </div>
        </>
    )
}

export default Weather