import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function UpdateData() {
    const [inputValues, setInputValues] = useState({
        date: "",
        trade_code: "",
        high: "",
        low: "",
        open: "",
        close: "",
        volume: "",
    });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        const result = await axios.get(`http://localhost:8000/${id}`)
        // Assuming the fetched data structure matches the state keys
        console.log('..............', result);
        setInputValues({
            date: result.data.date,
            trade_code: result.data.trade_code,
            high: result.data.high,
            low: result.data.low,
            open: result.data.open,
            close: result.data.close,
            volume: result.data.volume,
        });
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputValues((preValues) => ({
            ...preValues,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('.....inputValues.....', inputValues);

        const response = await axios.put(`http://localhost:8000/${id}`, inputValues);

        console.log('Data Added Successfully:', response.data);

        if (response) {
            navigate("/");
        }
        // Reset all input fields after submission
        setInputValues({
            date: "",
            trade_code: "",
            high: "",
            low: "",
            open: "",
            close: "",
            volume: "",
        });
    };

    return (
        <div className="form-group">
            <form onSubmit={handleSubmit}>
                <h1>Update Data</h1>
                <div className="mb-3">
                    <input
                        className="form-control"
                        type="date"
                        name="date"
                        value={inputValues.date || ''}
                        onChange={handleInputChange}
                        placeholder="Enter Date"
                    />
                </div>
                <div className="mb-3">
                    <input
                        className="form-control"
                        type="text"
                        name="trade_code"
                        value={inputValues.trade_code}
                        onChange={handleInputChange}
                        placeholder="Enter Trade Code"
                    />
                </div>
                <div className="mb-3">
                    <input
                        className="form-control"
                        type="number"
                        name="high"
                        value={inputValues.high}
                        onChange={handleInputChange}
                        placeholder="Enter High Value"
                    />
                </div>
                <div className="mb-3">
                    <input
                        className="form-control"
                        type="number"
                        name="low"
                        value={inputValues.low}
                        onChange={handleInputChange}
                        placeholder="Enter The Low Value"
                    />
                </div>
                <div className="mb-3">
                    <input
                        className="form-control"
                        type="number"
                        name="open"
                        value={inputValues.open}
                        onChange={handleInputChange}
                        placeholder="Enter The Open Value"
                    />
                </div>
                <div className="mb-3">
                    <input
                        className="form-control"
                        type="number"
                        name="close"
                        value={inputValues.close}
                        onChange={handleInputChange}
                        placeholder="Enter The Close Value"
                    />
                </div>
                <div className="mb-3">
                    <input
                        className="form-control"
                        type="number"
                        name="volume"
                        value={inputValues.volume}
                        onChange={handleInputChange}
                        placeholder="Enter The Volume Value"
                    />
                </div>
                <button className="btn btn-primary" type="submit">
                    Update Data
                </button>
            </form>
        </div>

    )
}
