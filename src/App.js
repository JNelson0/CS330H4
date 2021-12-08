import {React, useState} from "react"
import ClassController from "./ClassController.js"
import MainClass from "./MainClass.js"
import ViewClass from "./ViewClass.js"
import TakeInfo from "./TakeInfo.js"

import "./App.scss"
export default function App() {
  const[state, setState] = useState({
    name: "",
    number: "",
    description: "",
  })
  const[Classes, setClasses] = useState([])
  
  let view = new ViewClass();
  
  const resetState = () => {
    setState({
      name: "",
      number: "",
      description: ""
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setClasses(Classes.concat(new ClassController(new MainClass(state.name, state.number, state.description), view)))
    resetState()
  }
  
  return (
    <div className="App">
      {console.log(Classes)}
      <form onSubmit={handleSubmit}>
        <TakeInfo state={state} setState={setState}/>
        <button type="submit">Submit</button>
      </form>
      <ul>
        {
          Classes.map(e => (
            e.getView()
          )) 
        }
      </ul>
    </div>
  );
}

