import React from "react"
import "./ViewClass.scss"
export default class ViewClass{

    showView(name, number, description){
        return(
            <div className="view">
                <span>Class Name: {name}</span>
                <span>Class Number: {number}</span>
                <span>Class Description: {description}</span>
            </div>
        )
    }
}

