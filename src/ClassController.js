import ViewClass from "./ViewClass.js"
import {React} from "react"
import MainClass from "./MainClass.js"

export default class ClassController{
    c = new Object(); 
    view = new Object();
    constructor(c, view){
        this.c = c;
        this.view = view
    }

    setClassName(name){
        this.c.setName(name);
    }

    getClassName(){
        return this.c.getName();
    }
    
    setClassNumber(number){
        this.c.setNumber(number);
    }

    getClassNumber(){
        return this.c.getNumber();
    }

    setClassDescription(description){
        this.c.setDescription(description);
    }

    getClassDescription(){
        return this.c.getDescription();
    }

    handleDelete(){
        
    }

    getView(){
        return(
            <div className="classController">
                <li>
                    {this.view.showView(this.getClassName(), this.getClassNumber(), this.getClassDescription())}
                </li>
                <button onClick={() => this.handleDelete}>Delete</button>
            </div>
        )
    }
}
