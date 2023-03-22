import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

const AllRecords = (props) => {

    const { formData, setFormData } = props;

    useEffect(()=>{
        axios.get("http://localhost:8000/api/records")
        .then((res)=>{
            
            if (res && res.data && res.data.records) {
                setFormData(res.data.records);
            }
    })
        .catch((err)=>{
            console.log(err);
        })
    }, [setFormData]);

    const deleteRecord = (recordId) => {
        axios.delete('http://localhost:8000/api/records/' + recordId)
            .then(() => {
                removeFromDom(recordId)
            })
            .catch(err => console.log(err))
    }

    const removeFromDom = (recordId) => {
        setFormData(formData.filter(p => p._id !== recordId))
    }

    return (
        // <div className='card'>
        <div>
            {
                formData.map((record, index) => (
                    <div key={index}>
                        <div className='card'>
                            <h2><Link to={`/record/${record._id}`}>{record.albumName}</Link></h2>
                            <p>Artist: {record.artist}</p>
                            <p>Release Year: {record.releaseYear}</p>
                            <p>Genre: {record.genre}</p>
                            
                            <button className='delete' onClick = { () => deleteRecord(record._id) }>Delete</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};
export default AllRecords;