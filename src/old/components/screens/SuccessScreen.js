import React from 'react'
import { Button, Typography } from '@material-ui/core'

const methods = [
	'Debit Card',
	'Credit Card',
	'UPI',
]

export default function SuccessScreen({ details, prevStep }) {
	return (
		<div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 40, }} >
			<Typography variant='h5' >Your details have been saved</Typography>
			<br /><br />
			<Typography variant='h6' >Name:</Typography>
			<Typography variant='body1' color='textSecondary' >{details.name}</Typography>
			<br /><br />
			<Typography variant='h6' >Address:</Typography>
			<Typography variant='body1' color='textSecondary' >{details.address}</Typography>
			<br /><br />
			<Typography variant='h6' >Payment Method:</Typography>
			<Typography variant='body1' color='textSecondary' >{methods[details.paymentMethod]}</Typography>
			<br /><br />
			<Button variant='contained' color='primary' onClick={prevStep} >Change</Button>
		</div>
	)
}
