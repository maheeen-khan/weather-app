import React from 'react'
import './Weather.css'
import { SearchOutlined } from '@ant-design/icons'
const Weather = () => {
    return (
        <>
            <h1 className='head'>Weather App</h1>
            <br />
            <div className="inp-wrap">
                <input type="text" placeholder='Search' title='Enter City name' className='inp' />
                <div className="search">
                    <SearchOutlined />
                </div>
            </div>
        </>
    )
}

export default Weather