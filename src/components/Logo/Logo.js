import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css' ;
import crest from './crest.png';

const Logo = () => {
	return (
			<div className='ma4 mt0' align='center'>
			<Tilt className="Tilt" options={{ max : 55 }} style={{ height: 250, width: 250 }} >
 			<div className="Tilt-inner"> <img alt="ACKU" src={crest}/> </div>
			</Tilt>
			</div>
		);
}

export default Logo;