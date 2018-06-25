import React from 'react';

const NavigationStore = ({ onRouteChange, isSignedIn }) => {
	return (
		<nav style={{display: 'flex', justifyContent: 'center'}}>
			<p onClick={() => onRouteChange('viewAllOrders')} className='f3 link dim black underline pa3 pointer'>View All Orders</p>
			<p onClick={() => onRouteChange('newOrder')} className='f3 link dim black underline pa3 pointer'>Submit New Order</p>
		</nav>
		)
}

export default NavigationStore;