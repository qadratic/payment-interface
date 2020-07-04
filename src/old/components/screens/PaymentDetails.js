import React, { useState } from 'react'
import { TextField, Typography, Button} from '@material-ui/core'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import CheckIcon from '@material-ui/icons/Check';


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

	// const [value, setValue] = useState('0');

	// const handleChange = (event) => {
	// 	updateDetails({ paymentMethod: event.target.value })
	// 	setValue(event.target.value);
	// };

	// const paymentOptions = [
	// 	<CardInfo details={details} updateDetails={updateDetails} />,
	// 	<CardInfo details={details} updateDetails={updateDetails} />,
	// 	<UPIInfo details={details} updateDetails={updateDetails} />,
	// ]

	return (
		<div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 40, }} >
			<form onSubmit={(e) => { e.preventDefault(); nextStep(); }} >
				<div style={{ backgroundColor: 'rgb(20,20,20)', borderRadius: 10, color: 'rgb(225, 154, 76)', padding: 20, margin: 20 }} >
					<Typography variant='h5' >25BKJNKNLJL58fjkdhfk26dnfds15</Typography>
				</div>
				<br />
				<div style={{ padding: 10, color: 'white', backgroundColor: 'rgb(120, 120, 120)', borderRadius: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
					<div style={{ display: 'flex', flexDirection: 'row', justifyContent: '', alignItems: 'center' }} >
						<ArrowRightAltIcon />
						<Typography variant='body1' >Select the wallet on device</Typography>
					</div>
					<CheckIcon />
				</div>
				<br />
				<Button type='submit' variant='contained' color='primary' >Finish</Button>
			</form>
		</div>
	)
}