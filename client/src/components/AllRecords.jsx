import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import DeleteButton from './DeleteButton';

const AllRecords = () => {

    const [formData, setFormData] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/records")
        .then((res)=>{
            if (res && res.data) {
                setFormData(res.data);
            }
    })
        .catch((err)=>{
            console.log(err);
        })
    }, [setFormData]);

    const removeFromDom = (recordId) => {
        setFormData(formData.filter(r => r._id !== recordId))
    }

    return (
        <div>
            {
                formData.map((record, index) => (
                    <div key={index}>
                        <div className='card'>
                            <h2><Link to={`/record/${record._id}`}>{record.albumName}</Link></h2>
                            <p>Artist: {record.artist}</p>
                            <p>Release Year: {record.releaseYear}</p>
                            <p>Genre: {record.genre}</p>
                            <p>{record.explicit ? "Explicit" : ""}</p>
                            <DeleteButton recordId={record._id} removeRecord={removeFromDom} />
                        </div>
                    </div>
                ))
            }
        </div>
    );
};
export default AllRecords;