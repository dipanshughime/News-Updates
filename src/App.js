
import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News'
import Header from './Components/Header/Header';
import Map from './Components/Map/Map';
import List from './Components/List/List';
import PlaceDetails from './Components/PlaceDetails/PlaceDetails';
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div className="background">

<BrowserRouter>
<NavBar/>
         <Routes>

          <Route exact path='/' element={<News category="general"/>  }/> 
          <Route exact  path='/entertainment' element={<News category="entertainment"/>  }/> 
          <Route exact path='/general' element={<News category="general"/> }/> 
          <Route exact path='/health' element={<News category="health"/>  }/> 
          <Route exact path='/science' element={<News category="science"/>  }/> 
           <Route exact path='/sport' element={<News category="sports"/> }/>
           <Route exact path='/techonology' element={<News category="techonology"/> }/>
         </Routes>

    </BrowserRouter>
  
     {/* <NavBar/>
     <News category="sports"/> */}
      </div>
    )
  }
}



