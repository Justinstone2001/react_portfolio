import React from 'react';

import '../../styles/Content.css';

export default function Resume() {
    return (
        <> 
        <div className='aboutDiv'>
            <h2 className='aboutTitle'>Resume: </h2>
            <h3 className='aboutTxt'>Front-end Proficiencies</h3>
            <ul className='aboutTxt'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h3 className='aboutTxt'>Back-end Proficiencies</h3>
            <ul className='aboutTxt'>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>RESTt</li>
                <li>GraphQL</li>
            </ul>
        </div>
        </>
    );
}

