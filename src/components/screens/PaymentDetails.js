import React, { useState } from 'react'
import { TextField, Typography, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'

export default function PaymentDetails({ nextStep, prevStep }) {

	const [value, setValue] = useState('female');

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 40, }} >
			<Typography variant='h5' >Payment Information</Typography>
			<br /><br />
			<form>
				<FormControl component="fieldset">
					<FormLabel component="legend">Payment Method</FormLabel>
					<RadioGroup row aria-label="method" name="methods" value={value} onChange={handleChange}>
						<FormControlLabel value="debit" control={<Radio />} label="Debit Card" />
						<FormControlLabel value="credit" control={<Radio />} label="Credit Card" />
						<FormControlLabel value="upi" control={<Radio />} label="UPI" />
						<FormControlLabel value="cod" disabled control={<Radio />} label="COD" />
					</RadioGroup>
				</FormControl>
				<br /><br />
				<br /><br />
				<Button variant='contained' color='primary' onClick={nextStep} >Next</Button>
				<Button variant='contained' color='primary' onClick={prevStep} >Prev</Button>
			</form>
		</div>
	)
}