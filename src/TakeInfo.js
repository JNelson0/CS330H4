import {React, useState} from "react"
import "./TakeInfo.scss"
export default function TakeInfo({state, setState}){

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    return(
        <div className="takeInfo">
            <label>
                Enter Class Name: <input name="name" value={state.name} type="text"placeholder="Enter Class Name" onChange={handleChange}/>
            </label>
            <label>
                Enter Class Number: <input name="number" value={state.number}type="text" placeholder="Enter Class Number" onChange={handleChange}/>
            </label>
            <label>
                Enter Class Description: <input name="description" value={state.description} type="text" placeholder="Enter Class Description" onChange={handleChange} />
            </label>
            
                
                
        </div>
    )
}

