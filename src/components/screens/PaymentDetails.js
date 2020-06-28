import React, { useState } from 'react'
import { TextField, Typography, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'

function CardInfo({ details, updateDetails }) {
	return (
		<div>
			<TextField
				required
				label='Card Number'
				fullWidth
				variant='outlined'
				placeholder='XXXX-XXXX-XXXX-XXXX'
				defaultValue={details.cardNo ? details.cardNo : ''}
				onChange={e => { updateDetails({ cardNo: e.target.value }) }}
			/>
			<br /><br />
			<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }} >
				<TextField
					required
					label='EXP'
					variant='outlined'
					placeholder='XX/XX'
					defaultValue={details.cardExp ? details.cardExp : ''}
					onChange={e => { updateDetails({ cardExp: e.target.value }) }}
				/>
				<TextField
					required
					label='CVV'
					type='password'
					variant='outlined'
					placeholder='XXX'
					defaultValue={details.cardCvv ? details.cardCvv : ''}
					onChange={e => { updateDetails({ cardCvv: e.target.value }) }}
				/>
			</div>
		</div>
	)
}

function UPIInfo({ details, updateDetails }) {
	return (
		<TextField
			required
			label='UPI ID'
			variant='outlined'
			defaultValue={details.upiId ? details.upiId : ''}
			onChange={e => { updateDetails({ upiId: e.target.value }) }}
		/>
	)
}

export default function PaymentDetails({ nextStep, prevStep, details, updateDetails }) {

	const [value, setValue] = useState('0');

	const handleChange = (event) => {
		updateDetails({ paymentMethod: event.target.value })
		setValue(event.target.value);
	};

	const paymentOptions = [
		<CardInfo details={details} updateDetails={updateDetails} />,
		<CardInfo details={details} updateDetails={updateDetails} />,
		<UPIInfo details={details} updateDetails={updateDetails} />,
	]

	return (
		<div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 40, }} >
			<Typography variant='h5' >Payment Information</Typography>
			<br /><br />
			<form>
				<FormControl component="fieldset">
					<FormLabel component="legend">Payment Method</FormLabel>
					<RadioGroup row aria-label="method" name="methods" value={value} onChange={handleChange}>
						<FormControlLabel value={'0'} control={<Radio />} label="Debit Card" />
						<FormControlLabel value={'1'} control={<Radio />} label="Credit Card" />
						<FormControlLabel value={'2'} control={<Radio />} label="UPI" />
						<FormControlLabel value={'3'} disabled control={<Radio />} label="COD" />
					</RadioGroup>
				</FormControl>
				<br /><br />
				{paymentOptions[value]}
				<br /><br />
				<br /><br />
				<Button variant='contained' color='primary' onClick={prevStep} >Prev</Button>
				{' '}
				<Button variant='contained' color='primary' onClick={nextStep} >Finish</Button>
			</form>
		</div>
	)
}