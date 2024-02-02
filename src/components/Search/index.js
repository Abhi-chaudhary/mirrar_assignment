import React from 'react'
import style from './index.module.css'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { handleCurrentWeather, handleForecastWeather } from '../../Slice/searchSlice';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';




const Search=()=> {

    const [searchValue, setSearchValue] = useState("Ludhiana");
    //   const [currentWeather,setCurrentWeather]=useState("");
    //   const [forecastWeather,setForecastWeather]=useState("");
    const API_KEY = "d1845658f92b31c64bd94f06f7188c9c"
    const dispatch = useDispatch()
    const searchCurrentWeather = async () => {
        try {
            
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${API_KEY}&units=metric`);
            const jsonData = await data.json();
            if(jsonData.message==="city not found"){
                Swal.fire({
                    icon: 'error', 
                    title: 'No Such City Found',
                    showCloseButton: true,
                    timer: 5000, 
                  });
                return;
            }
            dispatch(handleCurrentWeather(jsonData))
           
            return jsonData;


        } catch (err) {
            return `error occured in fetching the weather data : ${err}`
        }
    }

    const searchForecast = async () => {
        try {
            
            const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&appid=${API_KEY}&units=metric`);
            const jsonData = await data.json();
            if(jsonData.message==="city not found"){
                return;
            }
            dispatch(handleForecastWeather(jsonData))
           
            return jsonData;


        } catch (err) {
            return `error occured in fetching the weather data : ${err}`
        }
    }

    useEffect(()=>{
        searchCurrentWeather();
        searchForecast();
    },[])

    const handleClick =(e) => {
        setSearchValue("")
        if(searchValue.trim()==="")return;
        
        searchCurrentWeather();
        searchForecast();
    }


    return (
        <div className={style.wrapper}>
             
            <input type='text'  value={searchValue} placeholder='Enter the city name.......' className={style.input} onChange={(e)=>{setSearchValue(e.target.value)}}></input>
            <button className={style.btn} onClick={handleClick}>Search</button>
            
        </div>
    )
}

export default Search