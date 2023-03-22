import './App.css'
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AllRecords from './components/AllRecords';
import RecordForm from './components/RecordForm';
import OneRecord from './components/OneRecord';
import UpdateRecord from './components/UpdateRecord';
import Navbar from './components/Navbar';

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={ <RecordForm /> } />
                    <Route path="/records" element={ <AllRecords /> } />
                    <Route path="/record/:id" element={ <OneRecord /> }  />
                    <Route path="/record/edit/:id" element={<UpdateRecord />}  /> 
                </Routes>
            </div>
        </BrowserRouter>
    );

}

export default App;
