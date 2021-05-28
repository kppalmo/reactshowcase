import React from 'react';
import sample from '../img/sample.png';

export const ImgTest = props => {

    return(
        <div class="bg">
            <img  class="Resize CenterImg " src={sample} alt="test"/>
            <h1 class="CenterText">The Above Is My Home</h1>
        </div>
        


    );
};
