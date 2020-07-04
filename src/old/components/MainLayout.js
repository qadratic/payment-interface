import React from 'react'
import { Stepper, Step, StepLabel, Paper, Divider, Typography, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';

export default function MainLayout({ children, activeStep, setOpen }) {
	return (
		<Paper elevation={2} style={styles.container} >
			{/* <Typography variant='h4'  >Recieve</Typography> */}
			<div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'flex-end'}} >
				<IconButton onClick={()=>{setOpen(false)}} ><CloseIcon /></IconButton>
			</div>
			<div style={styles.stepperContainer} >
				<Stepper activeStep={activeStep} alternativeLabel >
					<Step>
						<StepLabel>Device</StepLabel>
					</Step>
					<Step>
						<StepLabel>Verification</StepLabel>
					</Step>
					<Step>
						<StepLabel>Recieve</StepLabel>
					</Step>
				</Stepper>
				<Divider />
			</div>
			{children}
		</Paper>
	)
}

const styles = {
	container: {
		display: 'flex',
		minWidth: '30vw',
		flexDirection: 'column',
		// backgroundColor:'rgb(19, 22, 25)'
		// border: 'solid black 1px',
		// textAlign:'center'
	},
	stepperContainer: {
		width: '100%',
		// border: 'solid black 1px',
		flex: 1,
		// backgroundColor:'rgb(19, 22, 25)'

	},
}