import React, { useState } from 'react'
import RecordForm from '../components/RecordForm';
import AllRecords from '../components/AllRecords';


const Main = (props) => {

    const [record, setRecord] = useState([]);

    return (
        <>
            <RecordForm formData={record} setFormData={setRecord} />
            <AllRecords formData={record} setFormData={setRecord} />
        </>
    )
}

export default Main;

