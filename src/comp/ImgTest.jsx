import React from 'react';
import { Image } from 'react-bootstrap';
import sample from '../img/sample.png';

export const ImgTest = props => {

    return(
        <div >
            <Image  className="Resize CenterImg " src={sample} rounded/>
            <h2 class="CenterText">The Above Is My Home</h2>
        </div>
        


    );
};
