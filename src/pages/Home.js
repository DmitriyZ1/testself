import React from 'react';

import './box.scss';

import Tasks from '../components/Tasks';
import Bar from '../components/Bar';

function Home () {
    return (
        <div className="box">
            <Bar />
            <Tasks/>
        </div>
    )
}

export default Home;