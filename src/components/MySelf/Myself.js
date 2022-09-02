import React from 'react';
import Special from '../Special/Special';

const Myself = ({house}) => {
    return (
        <div>
            <h5>Me Self</h5>
            <p><small>House :{house}</small></p>
            <Special></Special>
        </div>
    );
};

export default Myself;