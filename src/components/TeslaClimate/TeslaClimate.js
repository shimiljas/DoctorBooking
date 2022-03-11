import React from 'react';
import './TeslaClimate.css';

const TeslaClimate=(props)=>(
    <div className='tesla-climate'>
        <label className={`tesla-climate__item ${props.value} 'tesla-climate__item-active':''
     ${props.limit} ? 'tesla-heat:' ' }`}>
         <p>{props.limit ? 'ac': 'heat'} {props.value ? 'on': 'off'}</p>
         <i className='tesla-climate__icon'></i>
         <input type='checkbox' name='climate' checked={props.value} onChange={()=>
         {props.handleChangeClimate()}}/>
            </label></div>
);

TeslaClimate.propsTypes={
    value:React.PropType.bool,
    limit:React.PropType.bool,
    handleChangeClimate:React.PropType.func
}

export default TeslaClimate;