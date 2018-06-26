import React from 'react';

const OrdersSubmitNew = ({onRouteChange}) => {

	return(
		<div>
			<div>
				<h1>Submit New Order</h1>
			</div>
			<div>
				<h2>HTML Field 1 populated by: SELECT item_id FROM store_item</h2>
			</div>
			<div>
				<h2>Note: order_id set to SERIAL</h2>
			</div>


			<div>
				<h2>var instructor = result of SELECT instructor FROM student WHERE student_username=current_user</h2>
			</div>

			<div>
				<h2>Button: INSERT INTO equip_orders (buyer_username, instructor_username, order_status, item_id) VALUES (current_user, instructor, 'incomplete', field1)</h2>
			</div>

		</div>

		);
}

export default OrdersSubmitNew;