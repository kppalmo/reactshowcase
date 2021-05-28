import React from 'react';
import sample from '../img/sample.png';

export const ImgTest = props => {

    return(
        <div>
            <img  class="Resize CenterImg " style="" src={sample}/>
            <h1 class="CenterText">The Above Is My Home</h1>
        </div>
        
    );
};
