import React from 'react';

const NavigationRequisition = ({ onRouteChange, isSignedIn }) => {
	return (
		<nav style={{display: 'flex', justifyContent: 'center'}}>
			<p onClick={() => onRouteChange('reqHistory')} className='f3 link dim black underline pa3 pointer'>History</p>
			<p onClick={() => onRouteChange('reqNew')} className='f3 link dim black underline pa3 pointer'>Submit New</p>
		</nav>
		)
}

export default NavigationRequisition;