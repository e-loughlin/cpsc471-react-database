import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css' ;
import crest from './crest.png';

const Logo = () => {
	return (
			<div className='ma4 mt0'>
			<Tilt className="Tilt" options={{ max : 55 }} style={{ height: 200, width: 200 }} >
 			<div className="Tilt-inner"> <img alt="ACKU" src={crest}/> </div>
			</Tilt>
			</div>
		);
}

export default Logo;