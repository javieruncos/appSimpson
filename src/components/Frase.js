import React from 'react';
import '../style/Frase.css'


const Frase = ({personaje}) => {
    return (
        <>
        <div className='cardHomero row my-3'>
            <div className='col-12 col-md-3 my-3'>
                <img src={personaje.image} alt={personaje.character} className='w-100'/>
            </div>
            <div className='col-12 col-md-8 text-center my-3'>
              <h1>{personaje.character}</h1>
              <p>{personaje.quote} </p>
            </div>
        </div>
        </>
    );
};

export default Frase;