import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, } from "react-router-dom";

const RecordForm = () => {
    const [albumName, setAlbumName] = useState("");
    const [artist, setArtist] = useState("");
    const [releaseYear, setReleaseYear] = useState(""); 
    const [genre, setGenre] = useState("");
    const [explicit, setExplicit] = useState(false);
    
    const navigate = useNavigate();

    const createRecord = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/records', {
            albumName,
            artist,
            releaseYear,
            genre,
            explicit
        }).then(res => {
            setAlbumName("");
            setArtist("");
            setReleaseYear("");
            setGenre("");
            setExplicit(false);

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
                <div className="formField">
                    <label>Explicit: </label>
                    {explicit
                        ? <input type="checkbox" checked onChange={(e) => setExplicit(e.target.checked)}/>
                        : <input type="checkbox" onChange={(e) => setExplicit(e.target.checked)}/>
                    }
                </div> 
                <div>
                    <input type = "submit" value = "Add Record" />
                </div>
            </form>
        </div>
    )
}
export default RecordForm;