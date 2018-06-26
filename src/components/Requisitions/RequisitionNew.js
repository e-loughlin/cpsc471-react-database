import React from 'react';

const RequisitionNew = ({onRouteChange}) => {

	return(
		<div>
			<h1>Submit New Requisition Form</h1>



		<div>
			<h2>Instructors / Admin ONLY</h2>
		</div>


		<div>
			<h2>Table to View all incomplete orders: </h2>
		</div>

		<div>
			<h2>SELECT * FROM equip_orders WHERE instructor_username=current_user AND order_status='incomplete' </h2>
		</div>

		<div>
			<h3>From above: put a check-box beside each item</h3>
		</div>
		



		<div>
			<h2>Submit button: For each of the checked checkboxes:</h2>
		</div>

		<div>
			<h2>INSERT INTO requisition_form (order_id, instructor_username, 'incomplete')</h2>
		</div>

		<div>
			<h2>For ADMIN: View all requisitions (by dropdown menu of instructor):</h2>
		</div>

		<div>
			<h2>SELECT * FROM requisition WHERE instructor_username=field1</h2>
		</div>

		<div>
			<h2>To complete orders, have a checkbox beside each. Button will say:</h2>
		</div>

		<div>
			<h2>UPDATE requisition SET requisition_status='complete' WHERE order_id=(checkedButton)</h2>
		</div>


		</div>

		);
}

export default RequisitionNew;