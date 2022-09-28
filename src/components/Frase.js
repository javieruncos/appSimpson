import React from 'react';
import '../style/Frase.css'

const Frase = () => {
    return (
        <div className='cardHomero row my-3'>
            <div className='col-12 col-md-3 my-3'>
                <img src={require('../img/Homero.png')} alt="homero simpson" className='w-100'/>
            </div>
            <div className='col-12 col-md-8 text-center my-3'>
              <h1>Homero Simpson</h1>
              <p>Facts are meaningless.You could use facts to prove anything thats even remptely true </p>
            </div>
        </div>
    );
};

export default Frase;