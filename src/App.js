import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import MyNavbar from './components/MyNavbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import DetailsPage from './components/DetailsPage';
import { useState } from 'react';

function App() {
  const [weatherDetail,setWeatherDetail]=useState([])
  const[city,setCity]=useState('')
  return (
    <BrowserRouter>
    <div className="App">
      <MyNavbar/>
    <Routes>
      <Route path='/' element={<HomePage weatherDC={setWeatherDetail} setCityName={setCity}/>}> </Route>
      <Route path='/details' element={<DetailsPage cityW={city} weather={weatherDetail}/>}> </Route>
    </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
