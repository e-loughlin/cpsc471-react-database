import React from 'react';

const EventNew = ({onRouteChange}) => {

	return(
	
		<div>
			<h1>Edit Events</h1>

			<p className='f3'>
			<h1>Add/Remove/Update Events</h1>
			</p>
			<div className='center'>
				<div className='form pa4 br3 shadow-5'>
					Event Name: <input className='f4 pa1 w-70 center' type='tex' required/>
					Location: <input className='f4 pa1 w-70 center' type='tex' required/>
					Date: <input className='f4 pa1 w-70 center' type='date' required/>
					Time: <input className='f4 pa1 w-70 center' type='time' required/>
					Type: <select className='f4 pa1 w-70 center' required>
						<option value="Kumite_Gear">Tournament</option>
						<option value="Uniforms">Belt Grading</option>
						<option value="Crests">Ozawa Las Vegas</option>
						</select>

					<button className='w-60 grow f4 link ph3 pv2 dib white bg-black' >Add Item</button>
					<button className='w-60 grow f4 link ph3 pv2 dib white bg-black'>Remove Item</button>
				</div>
			</div>

			<div>
				<h2>Admin Only:</h2>
			</div>

				<div>
				<h2>Add Event: INSERT INTO event (event_id, location, date, time, event_type) VALUES (field1, field2, field3, field4, field5)</h2>
				</div>

				<div>
				<h2>Remove Item: DELETE FROM event WHERE (event_id = field1)</h2>
				</div>


		</div>


		);
}

export default EventNew;