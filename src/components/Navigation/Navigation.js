import React from 'react';

const Navigation = ({ onRouteChange }) => {
	return (
		<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
			<p onClick={() => onRouteChange('store')} className='f3 link dim black underline pa3 pointer'>Store</p>
			<p onClick={() => onRouteChange('order')} className='f3 link dim black underline pa3 pointer'>Submit Order</p>
			<p onClick={() => onRouteChange('requisitions')} className='f3 link dim black underline pa3 pointer'>Submit Requisition</p>
			<p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
		</nav>
		)
}

export default Navigation;