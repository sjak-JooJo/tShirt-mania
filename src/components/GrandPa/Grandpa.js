import React from 'react';
import Uncle from '../Uncle/Uncle';
import Father from '../Father/Father';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'
import { useState } from 'react';
import { createContext } from 'react';

export const RingContext = createContext('ring');


const Grandpa = () => {
    const [house, setHouse] = useState(1);

    const ornament = 'Kada Matir Ring';


    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <RingContext.Provider value={ornament}>
            <div className='grandpa'>
                <h4>Grand Pa</h4>

                <p>House :
                    {house}
                    <button onClick={handleBuyAHouse}>Bua A House</button>
                </p>
                <section style={{ display: 'flex' }}>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;