import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => 
    <div className='wrapper'>
      <p>
        La página que intentas consultar no existe 
        <br /> 
        <Link to="/">Regresar</Link>
      </p>
    </div>

export default NotFound;