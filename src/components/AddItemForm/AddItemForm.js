import React from 'react';

const AddItemForm = () => {

	return(
		<div>
			<p className='f3'>
			{'Add New Items'}
			</p>
			<div>
				<input className='f4 pa2 w-70 center' type='tex' required/>
				<button className='w-30 grow f4 link ph3 pv2 dib white bg-black'>Add Item</button>
			</div>

		</div>
		);
}

export default AddItemForm;