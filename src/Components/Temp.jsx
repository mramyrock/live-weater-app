// https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=602b466bd6dde7cd7739a9980c438c3e

// https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=602b466bd6dde7cd7739a9980c438c3e&&units=metric

// https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=602b466bd6dde7cd7739a9980c438c3e

import React, { useEffect, useState } from 'react'
import "../Components/weather/style.css"
import Weathercard from './Weathercard';

const Temp = () => {

    const [searchValue, setSearchValue] = useState("delhi");
    const [tempInfo, setTempInfo] = useState({

    });

    const getWeaterInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=602b466bd6dde7cd7739a9980c438c3e `;

            let res = await fetch(url);
            let data = await res.json();
            const { temp, humidity, pressure } = data.main;
            const { main: weathermood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            // console.log(country,sunset);
            // console.log(speed);
            // console.log(name);
            // console.log(weathermood);
            // console.log(humidity);

            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset

            };

            setTempInfo(myNewWeatherInfo);
        } catch (error) {
            console.log(error)

        }
    };

    useEffect(() => {
        getWeaterInfo();
    }, []);

    return (
        <>
            <div className='wrap'>
                <div className='search'>
                    <input
                        type="text"
                        placeholder='search...'
                        autoFocus
                        id='search'
                        className='searchTerm'
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />

                    <button className='searchButton btn btn-outline-primary' type='button' onClick={getWeaterInfo}>
                        Search
                    </button>
                </div>
            </div>

            {/* our temp card */}

            {/* <Weathercard tempInfo={tempInfo} /> */}
            <Weathercard {...tempInfo} />





        </>
    )
}

export default Temp;
