import React from 'react'
import { Typography, Button } from '@material-ui/core'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import CheckIcon from '@material-ui/icons/Check';

export default function PersonalDetails({ nextStep, details, updateDetails }) {
	return (
		<div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 40, }} >
			<Typography variant='body1' >Follow the instruction on device</Typography>
			<br /><br />
			<form onSubmit={(e) => { e.preventDefault(); nextStep(); }} >
				<div style={{ padding: 10, color: 'white', backgroundColor: 'rgb(120, 120, 120)', borderRadius: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
					<div style={{display: 'flex', flexDirection: 'row', justifyContent: '', alignItems: 'center'}} >
						<ArrowRightAltIcon />
						<Typography variant='body1' >Select the wallet on device</Typography>
					</div>
					<CheckIcon />
				</div>
				<br />
				<div style={{ padding: 10, color: 'white', backgroundColor: 'rgb(120, 120, 120)', borderRadius: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
					<div style={{display: 'flex', flexDirection: 'row', justifyContent: '', alignItems: 'center'}} >
						<ArrowRightAltIcon />
						<Typography variant='body1' >Select the wallet on device</Typography>
					</div>
					<CheckIcon />
				</div>
				<br />
				{/* <br /> */}
				<div style={{ padding: 10, color: 'white', backgroundColor: 'rgb(120, 120, 120)', borderRadius: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
					<div style={{display: 'flex', flexDirection: 'row', justifyContent: '', alignItems: 'center'}} >
						<ArrowRightAltIcon />
						<Typography variant='body1' >Select the wallet on device</Typography>
					</div>
					<CheckIcon />
				</div>
				<br /><br />
				<br /><br />
				<Button type='submit' variant='contained' color='primary' >Next</Button>
			</form>
		</div>
	)
}
