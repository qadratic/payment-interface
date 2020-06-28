import React from 'react'
import { TextField, Typography, Button } from '@material-ui/core'

export default function PersonalDetails({ nextStep }) {
	return (
		<div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 40, }} >
			<Typography variant='h5' >Personal Details</Typography>
			<br /><br />
			<form>
				<TextField
					required
					label='Full Name'
					fullWidth
					variant='outlined'
				/>
				<br /><br />
				<TextField
					required
					label='Address'
					fullWidth
					variant='outlined'
				/>
				<br /><br />
				<br /><br />
				<Button variant='contained' color='primary' onClick={nextStep} >Next</Button>
			</form>
		</div>
	)
}
