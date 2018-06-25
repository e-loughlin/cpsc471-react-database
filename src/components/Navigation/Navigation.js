import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
	return (
		<nav style={{display: 'flex', justifyContent: 'center'}}>
			<p onClick={() => onRouteChange('store')} className='f3 link dim black underline pa3 pointer'>Store</p>
			<p onClick={() => onRouteChange('orders')} className='f3 link dim black underline pa3 pointer'>Orders</p>
			<p onClick={() => onRouteChange('requisitions')} className='f3 link dim black underline pa3 pointer'>Requisitions</p>
			<p onClick={() => onRouteChange('events')} className='f3 link dim black underline pa3 pointer'>Events</p>
			<p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
		</nav>
		)
}

export default Navigation;