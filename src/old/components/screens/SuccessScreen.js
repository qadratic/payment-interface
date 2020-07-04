import React from 'react'
import { Button, Typography } from '@material-ui/core'

import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const methods = [
	'Debit Card',
	'Credit Card',
	'UPI',
]

export default function SuccessScreen({ details, prevStep }) {
	return (
		<div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 40, }} >
			<div style={{ backgroundColor: 'rgb(20,20,20)', borderRadius: 10, color: 'rgb(225, 154, 76)', padding: 20, margin: 20 }} >
					<Typography variant='h5' >25BKJNKNLJL58fjkdhfk26dnfds15</Typography>
				</div>
				<br />
				<div style={{ padding: 10, color: 'white', backgroundColor: 'rgb(120, 120, 120)', borderRadius: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
					<div style={{ display: 'flex', flexDirection: 'row', justifyContent: '', alignItems: 'center' }} >
						<ErrorOutlineIcon /> {' '}
						<Typography variant='body1' >Address Verified</Typography>
					</div>
				</div>
				<br />
			<Button variant='contained' color='primary' onClick={prevStep} >Re-verify</Button>
		</div>
	)
}
