import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ShowData() {
    const [proData, setProData] = useState([])

    const fetchData = async () => {
        const result = await axios.get('http://localhost:8000');

        console.log(result.data)
        setProData(result.data)
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>
            <h1>Show All Data</h1>
            <div className="main-data-show">
                {
                    proData.map((proData, index) => (
                        <Card key={index} className="m-3 rounded shadow-lg main-students-show" style={{ width: '22em' }}>

                            <Card.Body>

                                <Card.Title>{proData.id}</Card.Title>
                                <Card.Title>{proData.date}</Card.Title>
                                <Card.Text> {proData.trade_code} </Card.Text>
                                <Card.Text> {proData.high} </Card.Text>
                                <Card.Text> {proData.low} </Card.Text>
                                <Card.Text> {proData.open} </Card.Text>
                                <Card.Text> {proData.volume} </Card.Text>
                                <Link className="btn btn-primary mr-2 gap-2" to={`/${proData.id}`}>Details</Link>

                            </Card.Body>
                        </Card>
                    ))

                }
            </div>
        </div>
    )
}
