import React from 'react';

const OrdersViewAll = ({onRouteChange}) => {

	return(
		<div>
			<div>
				<h1>View All Orders</h1>
			</div>

			<div>
			<h2>If student: SELECT * FROM equip_orders WHERE buyer_username=current_username</h2>
			</div>

			<div>
			<h2>If instructor: SELECT * FROM equip_orders WHERE seller_username=current_username</h2>
			</div>

			<div>
			<h2>If admin: 2 fields, and conduct search by buyer, and search by seller</h2>
			</div>
		</div>

		);
}

export default OrdersViewAll;