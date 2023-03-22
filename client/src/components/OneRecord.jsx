import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from "react-router-dom";

const OneRecord = (props) => {
    const [oneRecord, setOneRecord] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/records/${id}`)
            .then(res => {
                setOneRecord(res.data);
            }) 
            .catch( err => console.log(err) );
    }, [id]);


    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/records/${id}`)
            .then((res) => {
                navigate('/')
            })
    }
    return (
        <div>
            <h3>{oneRecord.albumName}</h3>
            <p>Artist: ${oneRecord.artist}</p>
            <p>Release Year: {oneRecord.releaseYear}</p>
            <p>Genre: {oneRecord.genre}</p>
            <Link to={`/record/edit/${oneRecord._id}`}>Update</Link>
            <button className='delete' onClick = { deleteHandler }>Delete</button>
        </div>
    );
};

export default OneRecord;
