import './App.css'
import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AllRecords from './components/AllRecords';
import RecordForm from './components/RecordForm';


function App() {

    const [record, setRecord] = useState([]);

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path= "/" element = {<RecordForm formData={record} setFormData={setRecord} />} />
                    <Route path="/records" element = {<AllRecords formData={record} setFormData={setRecord} />} />
                    {/* <Route path= "/record/:id" element = {<OneRecord />}  />
                    <Route path= "/record/edit/:id" element = {<UpdateRecord />}  /> */}
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;
