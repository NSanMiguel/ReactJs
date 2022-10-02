import React from 'react';

export const MostrarOC = ({orden,buyer}) => {

    const {Nombre,Apellido,Email} = buyer
    
    return (
        <div>
            <h1><b>Comprobante de OC </b> </h1>
            <h4> {Nombre} {Apellido} </h4>
            <h4> Su numero de orden es: {orden}</h4>
            <h4> Se envio el comprobante al mail: {Email}</h4>
        </div>
    );
}

