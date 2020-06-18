import React from 'react';
import './App.css';
import YouTubeForm from "./components/YouTubeForm";


const App = (props) => {
let onSubmit = values => {
  console.log("Form data", values)
}


  return (
    <div  className='app'>
      <YouTubeForm onSubmit={onSubmit}/>
      </div>
  );
}

export default App;
