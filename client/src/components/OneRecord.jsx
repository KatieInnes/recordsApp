import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from "react-router-dom";
import DeleteButton from './DeleteButton';


const OneRecord = () => {
    const [oneRecord, setOneRecord] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/records/${id}`)
            .then(res => {
                setOneRecord(res.data);
            }) 
            .catch( err => console.log(err) );
    }, [id]);

    return (
        <div>
            <h3>{oneRecord.albumName}</h3>
            <p>Artist: {oneRecord.artist}</p>
            <p>Release Year: {oneRecord.releaseYear}</p>
            <p>Genre: {oneRecord.genre}</p>
            <p>{oneRecord.explicit ? "Explicit" : ""}</p>
            <Link to={`/record/edit/${oneRecord._id}`}>Update</Link>
            <DeleteButton recordId={id} />
        </div>
    );
};

export default OneRecord;
