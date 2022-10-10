import React from 'react';

export const MostrarOC = ({orden}) => {

    return (
        <div className='card'>
            <h1><b>Comprobante de OC </b> </h1>
            <h4> Su numero de orden es: {orden} </h4>
        </div>
    );
}

