import React from 'react';

import '../../styles/Content.css';

export default function Portfolio() {
    return (
        <> 
        <div className='aboutDiv'>
            <h2 className='aboutTitle'>Portfolio: </h2>
            <form>
            <button type="submit" id="SPA"
                formaction="https://403spanishjustinstone.justinstone2001.com/spa403.html">SPA 403 Project</button>
            <button type="submit" id="CSC"
                formaction="https://csc362.ralinvel.dcreate.domains/Landing%20Page%20(2).html">CSC 362 Project</button>

            <button type="submit" id="PROJ1"
                formaction="https://saislam10.github.io/group-project/">Trending Albums</button>
                
            <button type="submit" id="PROJ2"
                formaction="https://intense-fjord-45584.herokuapp.com/">Trailblazers</button>
        </form>
        </div>
        
        </>
    );
}

