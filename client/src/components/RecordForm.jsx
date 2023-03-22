import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, } from "react-router-dom";

const RecordForm = (props) => {
    const [albumName, setAlbumName] = useState("");
    const [artist, setArtist] = useState("");
    const [releaseYear, setReleaseYear] = useState(""); 
    const [genre, setGenre] = useState("");
    
    const navigate = useNavigate();

    const { formData, setFormData} = props;

    const createRecord = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/records', {
            albumName,
            artist,
            releaseYear,
            genre,
            
        }).then(res => {
            setFormData([ ...formData, res.data.record]);
            
            setAlbumName("");
            setArtist("");
            setReleaseYear("");
            setGenre("");

            navigate("/records")
            
        }).catch(e => {
            console.log("error", e);
        })
    };

    return(
        <div className='card'>
            <h1> Records Dot Com </h1>
            <form onSubmit = { createRecord }>
                <div className="formField">
                    <label>Album Name: </label>
                    <input type="text" value={albumName} onChange={(e) => setAlbumName(e.target.value)}/>
                </div>
                <div className="formField">
                    <label>Artist: </label>
                    <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)}/>
                </div>
                <div className="formField">
                    <label>Release Year: </label>
                    <input type="number" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)}/>
                </div>
                <div className="formField">
                    <label>Genre: </label>
                    <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)}/>
                </div>
                <div>
                    <input type = "submit" value = "Add Record" />
                </div>
            </form>
        </div>
    )
}
export default RecordForm;