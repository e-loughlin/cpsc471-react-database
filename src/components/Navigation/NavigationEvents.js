import React from 'react';

const NavigationEvents = ({ onRouteChange, isSignedIn }) => {
	return (
		<nav style={{display: 'flex', justifyContent: 'center'}}>
			<p onClick={() => onRouteChange('eventRegister')} className='f3 link dim black underline pa3 pointer'>Register for Events</p>
			<p onClick={() => onRouteChange('eventEdit')} className='f3 link dim black underline pa3 pointer'>Edit Events</p>
		</nav>
		)
}

export default NavigationEvents;