import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function DetailsData() {
    const [data, setData] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        // Replace 'YOUR_API_URL' with the actual URL of your Django API endpoint
        axios.get(`http://localhost:8000/${id}/`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8000/${id}/`)
        navigate('/');
    }

    return (
        <div>
            {data ? (
                // Render the retrieved data here
                <div>
                    <h1>Data Details</h1>
                    <p>ID: {data.id}</p>
                    <p>Date: {data.date}</p>
                    <p>Date: {data.trade_code}</p>
                    <p>Date: {data.high}</p>
                    <p>Date: {data.low}</p>
                    <p>Date: {data.open}</p>
                    <p>Date: {data.close}</p>
                    <p>Date: {data.volume}</p>
                    {/* Include other fields as needed */}

                    <Link className="btn btn-outline-primary mr-2" to={`/${data.id}/update`}>Update</Link>
                    <Link className="btn btn-danger" onClick={() => deleteUser(data.id)}>Delete</Link>
                </div>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    )
}
