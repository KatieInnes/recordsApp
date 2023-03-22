import React from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const DeleteButton = (props) => {

    const { recordId, removeRecord } = props;

    const navigate = useNavigate();

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/records/${recordId}`)
            .then(() => {
                if (removeRecord) {
                    removeRecord(recordId);
                }

                navigate('/records');
            })
    }

    return (
        <button className='delete' onClick={ deleteHandler }>Delete</button>
    )
}

export default DeleteButton
