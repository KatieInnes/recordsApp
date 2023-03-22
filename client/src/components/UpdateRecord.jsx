import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate, } from "react-router-dom";

const Update = (props) => {
    const {id} = useParams();

    const [albumName, setAlbumName] = useState("");
    const [artist, setArtist] = useState("");
    const [releaseYear, setReleaseYear] = useState(""); 
    const [genre, setGenre] = useState("");
    const [explicit, setExplicit] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/records/" + id)
            .then(res => {
                setAlbumName(res.data.albumName);
                setArtist(res.data.artist);
                setReleaseYear(res.data.releaseYear);
                setGenre(res.data.genre);
                setExplicit(res.data.explicit);
            }) 
            .catch( err => console.log(err) );
    }, [id]);

    const updateRecord = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/records/" + id, {
            albumName,
            artist,
            releaseYear,
            genre,
            explicit
        })
        .then(res => {
            navigate("/records");
        })
        .catch(err => console.log(err))
    }

    return(
        <>
        <h1>Record Update</h1>
        <form onSubmit={ updateRecord }>
            <div>
                <label>Album Name: </label> 
                <input type="text" name="albumName" value={albumName} onChange={ (e) => setAlbumName(e.target.value) } />
            </div>
            <div>
                <label>Artist: </label> 
                <input type="text" name="artist" value={artist} onChange={ (e) => setArtist(e.target.value) } />
            </div>
            <div>
                <label>Release Year: </label> 
                <input type="number" name="releaseYear" value={releaseYear} onChange={ (e) => setReleaseYear(e.target.value) } />
            </div>
            <div>
                <label>Release Year: </label> 
                <input type="text" name="genre" value={genre} onChange={ (e) => setGenre(e.target.value) } />
            </div>
            <div>
                <label>Explicit: </label> 
                {explicit
                    ? <input type="checkbox" checked onChange={(e) => setExplicit(e.target.checked)}/>
                    : <input type="checkbox" onChange={(e) => setExplicit(e.target.checked)}/>
                }
            </div>
            <input type = "submit" value = "Update" />
        </form>

        </>

    );

};

export default Update;
