import React from 'react';

const NavigationStore = ({ onRouteChange, isSignedIn }) => {
	return (
		<nav style={{display: 'flex', justifyContent: 'center'}}>
			<p onClick={() => onRouteChange('store')} className='f3 link dim black underline pa3 pointer'>View Items</p>
			<p onClick={() => onRouteChange('editStore')} className='f3 link dim black underline pa3 pointer'>Edit Store</p>
		</nav>
		)
}

export default NavigationStore;