import React from 'react'
import { TextField, Typography, Button } from '@material-ui/core'

export default function PersonalDetails({ nextStep, details, updateDetails }) {
	return (
		<div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 40, }} >
			<Typography variant='h5' >Personal Details</Typography>
			<br /><br />
			<form>
				<TextField
					defaultValue={details.name ? details.name : ''}
					required
					label='Full Name'
					fullWidth
					variant='outlined'
					onChange={e => { updateDetails({ name: e.target.value }) }}
					/>
				<br /><br />
				<TextField
					defaultValue={details.address ? details.address : ''}
					required
					label='Address'
					fullWidth
					variant='outlined'
					onChange={e => { updateDetails({ address: e.target.value }) }}
				/>
				<br /><br />
				<br /><br />
				<Button variant='contained' color='primary' onClick={nextStep} >Next</Button>
			</form>
		</div>
	)
}
