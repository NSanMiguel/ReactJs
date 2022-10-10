import React from 'react';
import './Spinner.css'

export const Spinner = () => {
    return (
            <div className="spinner-border text-primary spinner" role="status">
                <span className="visually-hidden ">Loading...</span>
            </div>
    );
}

