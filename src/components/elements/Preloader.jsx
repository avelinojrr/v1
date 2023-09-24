// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { Cube } from 'react-preloaders';

const Preloader = () => {
    useEffect(() => {
        setTimeout(() => {
        }, 2000);
    }, []);

    return (
        <div>
            <Cube background="#e1e4e9" animation="slide" 
            color="#282f43" time={2000} />
        </div>
    );
};

export default Preloader;
