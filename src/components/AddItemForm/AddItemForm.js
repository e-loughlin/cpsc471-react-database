import React from 'react';
import './AddItemForm.css';

const AddItemForm = ({onInputChange, onButtonSubmit}) => {

	return(
		<div>
			<p className='f3'>
			{'Add/Remove/Update Store Items'}
			</p>
			<div className='center'>
				<div className='form pa4 br3 shadow-5'>
					Item Name: <input className='f4 pa1 w-70 center' type='tex' required/>
					Price: <input className='f4 pa1 w-70 center' type='tex' onChange={onInputChange} required/>
					Instructor Bonus: <input className='f4 pa1 w-70 center' type='tex' required/>
					Type: <select className='f4 pa1 w-70 center' required>
						<option value="Kumite_Gear">Kumite Gear</option>
						<option value="Uniforms">Uniforms</option>
						<option value="Crests">Crests</option>

					</select>
					    Size: <select className="f4 pa1 w-70 center" required>
					        <option value="NULL">N/A</option>
					        <option value="Youth">Youth</option>
					        <option value="000">000</option>
					        <option value="00">00</option>
					        <option value="0">0</option>
					        <option value="1">1</option>
					        <option value="2">2</option>
					        <option value="3">3</option>
					        <option value="4">4</option>
					        <option value="5">5</option>
					        <option value="6">6</option>
					        <option value="7">7</option>
					        <option value="XS">XS</option>
					        <option value="S">S</option>
					        <option value="M">M</option>
					        <option value="L">L</option>
					        <option value="XL">XL</option>
					        <option value="XXL">XXL</option>
					    </select>
					<button className='w-60 grow f4 link ph3 pv2 dib white bg-black' onClick = {onButtonSubmit}>Add Item</button>
					<button className='w-60 grow f4 link ph3 pv2 dib white bg-black' onClick = {onButtonSubmit}>Remove Item</button>
					<button className='w-60 grow f4 link ph3 pv2 dib white bg-black' onClick = {onButtonSubmit}>Update Item</button>
				</div>
			</div>




		</div>
		);
}

export default AddItemForm;