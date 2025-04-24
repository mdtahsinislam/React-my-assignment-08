import React from 'react';
import Banner from '../../commponents/Banner/Banner';
import Books from '../Books/Books';

const Home = () => {
    return (
        <div>
            {/* <h1>hello ami home</h1> */}
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;