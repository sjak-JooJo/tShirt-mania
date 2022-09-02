import React from 'react';
import { useContext } from 'react';
import { RingContext } from '../GrandPa/Grandpa';

const Aunty = ({house}) => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h4>Aunty</h4>
            <p>House :{house}</p>
            <p><span>Ring: {ring}</span></p>
        </div>
    );
};

export default Aunty;