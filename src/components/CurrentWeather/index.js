import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import style from './index.module.css'
import ToggleButton from '../ToggleButton/index'
const CurrentWeather=()=> {
  const currentdata=useSelector((state)=>state.search.current);
  const value=useSelector((state)=>state.toggle.value)
  
 
  function changeToF(temp){
      const val=((temp)*9/5+32).toFixed(2);
      
       return val;
  }

  
  
  return (
    <div className={style.container}>
        <h1 className={style.name}>{currentdata.name}</h1>
       <div className={style.tempImg}>
       <h1 className={style.temp}>{((value===true && changeToF(currentdata?.main?.temp)) || (currentdata?.main?.temp))}°</h1>
        <ToggleButton/>
        <img src={`https://openweathermap.org/img/wn/${currentdata?.weather?.[0]?.icon}@2x.png`} className={style.icon}></img>
       
       </div>
        <div className={style.attributes}>
        <div className={style.minTemp}>Min Temp : {((value===true && changeToF(currentdata?.main?.temp_min)) || (currentdata?.main?.temp_min))}°</div>
        <div className={style.maxTemp}>Max Temp : {((value===true && changeToF(currentdata?.main?.temp_max)) || (currentdata?.main?.temp_max))}°</div>
        <div className={style.wind}>Wind Speed and Dir : {currentdata?.wind?.speed}kmph & {currentdata?.wind?.deg}°</div>
        
        <div className={style.humidity}>Humidity : {currentdata?.main?.humidity}%</div>
        <div className={style.desc}>Description : {currentdata?.weather?.[0]?.description}</div>
        </div>
        
    </div>
  )
}

export default CurrentWeather