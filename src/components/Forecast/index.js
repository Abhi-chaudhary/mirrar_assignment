import React from 'react'
import style from './index.module.css'
import cx from 'classnames'
import { useSelector } from 'react-redux';

const Forecast = () => {
    const forecastdata=useSelector((state)=>state.search.forecast);
    const value=useSelector((state)=>state.toggle.value)

    function changeToF(temp){
     const val=((temp)*9/5+32).toFixed(2);
     
      return val;
 }
  return (
    <div className={style.container}>
        <div className={style.heading}>5 Days Forecast</div>
        <div className={cx(style.forecastCard,style.card1)}>
             <div className={style.date}>{(forecastdata?.list?.[1]?.dt_txt)?.substring(0,10)}</div>
             <div className={style.temp}>{((value===true && changeToF(forecastdata?.list?.[1]?.main?.temp)) || (forecastdata?.list?.[1]?.main?.temp))}°</div>
             <div className={style.desc}>{forecastdata?.list?.[1]?.weather?.[0]?.description}</div>
             <img src={`https://openweathermap.org/img/wn/${forecastdata?.list?.[1]?.weather?.[0]?.icon}@2x.png`} className={style.icon} alt='icon'></img>
        </div>
        <div className={cx(style.forecastCard,style.card2)}>
        <div className={style.date}>{(forecastdata?.list?.[9]?.dt_txt)?.substring(0,10)}</div>
             <div className={style.temp}>{((value===true && changeToF(forecastdata?.list?.[9]?.main?.temp)) || (forecastdata?.list?.[9]?.main?.temp))}°</div>
             <div className={style.desc}>{forecastdata?.list?.[9]?.weather?.[0]?.description}</div>
             <img src={`https://openweathermap.org/img/wn/${forecastdata?.list?.[9]?.weather?.[0]?.icon}@2x.png`} className={style.icon} alt='icon'></img>
        </div>
        <div className={cx(style.forecastCard,style.card3)}>
        <div className={style.date}>{(forecastdata?.list?.[17]?.dt_txt)?.substring(0,10)}</div>
             <div className={style.temp}>{((value===true && changeToF(forecastdata?.list?.[17]?.main?.temp)) || (forecastdata?.list?.[17]?.main?.temp))}°</div>
             <div className={style.desc}>{forecastdata?.list?.[17]?.weather?.[0]?.description}</div>
             <img src={`https://openweathermap.org/img/wn/${forecastdata?.list?.[17]?.weather?.[0]?.icon}@2x.png`} className={style.icon} alt='icon'></img>
        </div>
        <div className={cx(style.forecastCard,style.card4)}>
        <div className={style.date}>{(forecastdata?.list?.[25]?.dt_txt)?.substring(0,10)}</div>
             <div className={style.temp}>{((value===true && changeToF(forecastdata?.list?.[25]?.main?.temp)) || (forecastdata?.list?.[25]?.main?.temp))}°</div>
             <div className={style.desc}>{forecastdata?.list?.[25]?.weather?.[0]?.description}</div>
             <img src={`https://openweathermap.org/img/wn/${forecastdata?.list?.[25]?.weather?.[0]?.icon}@2x.png`} className={style.icon} alt='icon'></img>
        </div>
        <div className={cx(style.forecastCard,style.card5)}>
        <div className={style.date}>{(forecastdata?.list?.[33]?.dt_txt)?.substring(0,10)}</div>
             <div className={style.temp}>{((value===true && changeToF(forecastdata?.list?.[33]?.main?.temp)) || (forecastdata?.list?.[33]?.main?.temp))}°</div>
             <div className={style.desc}>{forecastdata?.list?.[33]?.weather?.[0]?.description}</div>
             <img src={`https://openweathermap.org/img/wn/${forecastdata?.list?.[33]?.weather?.[0]?.icon}@2x.png`} className={style.icon} alt='icon'></img>
        </div>
    </div>
  )
}

export default Forecast