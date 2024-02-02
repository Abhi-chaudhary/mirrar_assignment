import React, { useEffect } from "react";
import Style from './index.module.css'
import cx from 'classnames'
import { useState } from "react";
import {  useDispatch } from "react-redux";
import { handleValue } from "../../Slice/toggleSlice";

const ToggleButton=()=> {
    const [isToggled, setIsToggled] = useState(false);
    const dispatch=useDispatch();
    const handleChange =  () => {
       setIsToggled(!isToggled);
      
    };

    useEffect(()=>{
        dispatch(handleValue(isToggled));
    },[isToggled])
  
    return (<>
      
        <button onClick={handleChange} className={cx(Style.toggleButton,{[Style.C]:isToggled===true},{[Style.F]:isToggled===false}) }>
        {isToggled ? '°F' : '°C'}
      </button>
    </>
     
    );
  }

  export default ToggleButton;