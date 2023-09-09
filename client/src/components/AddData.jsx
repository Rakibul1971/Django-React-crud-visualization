import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "../App.css";

export default function AddData() {
    const [inputValues, setInputValues] = useState({
        date: "",
        trade_code: "",
        high: "",
        low: "",
        open: "",
        close: "",
        volume: "",
    });
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputValues((preValues) => ({
            ...preValues,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await axios.post('http://localhost:8000', inputValues);

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
                <h1>Input New Data</h1>
                <div className="mb-3">
                    <input
                        className="form-control"
                        type="date"
                        name="date"
                        value={inputValues.date}
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
                    ADD Data
                </button>
            </form>
        </div>

    );
}

