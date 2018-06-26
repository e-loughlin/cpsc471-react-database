import React from 'react';

const RequisitionHistory = ({onRouteChange}) => {

	return(
		<div>
			<h1>Requisition Form History</h1>


		<div>
			<h2>If current user is instructor: build HTML table based on:</h2>
		</div>


		<div>
			<h2>SELECT * FROM requisition_form WHERE instructor_username=current_user</h2>
		</div>


		<div>
			<h2>If admin: Same as above, but with drop-box field instead of current user, as well as "all" option</h2>
		</div>

		</div>

		);
}

export default RequisitionHistory;