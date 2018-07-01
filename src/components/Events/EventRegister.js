import React from 'react';

const EventRegister = ({onRouteChange}) => {

	return(
		<div>
			<h1>Register for Events</h1>

			<div>
				<h2>Event List:   SELECT * FROM event WHERE date > currentDate </h2>

			</div>

			<div>
				<h2>Above field is the variable 'field1', describing event_id</h2>

			</div>

			<div>
				<h2>Register Button:   INSERT INTO event_registration (event_id, participant_username) VALUES (field1, currentUsername)</h2>

			</div>

		</div>



		);
}

export default EventRegister;