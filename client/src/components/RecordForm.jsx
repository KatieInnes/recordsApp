import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, } from "react-router-dom";

const RecordForm = () => {
    const [albumName, setAlbumName] = useState("");
    const [artist, setArtist] = useState("");
    const [releaseYear, setReleaseYear] = useState(""); 
    const [genre, setGenre] = useState("");
    const [explicit, setExplicit] = useState(false);

    const [errors, setErrors] = useState({})

    const navigate = useNavigate();

    const recordValidation = (e) => {

        let isValid = true;
        const errorMessages = {};

        if (albumName.length < 3) {
            errorMessages.albumName = "Album name must be at least 3 characters";
            isValid = false;
        }

        if (artist.length < 3) {
            errorMessages.artist = "Artist name must be at least 3 characters";
            isValid = false;
        }

        if (releaseYear < 1925) {
            errorMessages.releaseYear =  "Release year must be after 1925";
            isValid = false;
        }

        if (genre.length < 3) {
            errorMessages.genre = "Genre must be at least three characters";
            isValid = false;
        }

        setErrors(errorMessages);

        return isValid;

    }

    const createRecord = (e) => {
        e.preventDefault();
        if (recordValidation()){
            axios.post('http://localhost:8000/api/records', {
            albumName,
            artist,
            releaseYear,
            genre,
            explicit
            })
                .then(res => {
                    setAlbumName("");
                    setArtist("");
                    setReleaseYear("");
                    setGenre("");
                    setExplicit(false);
                })
                .catch(e => {
                    console.log("error", e);
                })
        
            navigate("/records")
        }
    };

    return(
        <div className='card'>
            <h1> Records Dot Com </h1>
            <form onSubmit = { createRecord }>
                <div className="formField">
                    {errors.albumName ? <p style={{ color: 'red',}}>{errors.albumName}</p> : ""}
                    <label>Album Name: </label>
                    <input type="text" value={albumName} onChange={(e) => setAlbumName(e.target.value)}/>
                </div>
                <div className="formField">
                    {errors.artist ? <p style={{ color: 'red',}}>{errors.artist}</p> : ""}
                    <label>Artist: </label>
                    <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)}/>
                </div>
                <div className="formField">
                    {errors.releaseYear ? <p style={{ color: 'red',}}>{errors.releaseYear}</p> : ""}
                    <label>Release Year: </label>
                    <input type="number" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)}/>
                </div>
                <div className="formField">
                    {errors.genre ? <p style={{ color: 'red',}}>{errors.genre}</p> : ""}
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