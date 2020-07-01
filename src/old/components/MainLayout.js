import React from 'react'
import { Stepper, Step, StepLabel, Paper, Divider } from '@material-ui/core'

export default function MainLayout({ children, activeStep }) {
	return (
		<Paper elevation={2} style={styles.container} >
			<div style={styles.stepperContainer} >
				<Stepper activeStep={activeStep} >
					<Step>
						<StepLabel>Personal Details</StepLabel>
					</Step>
					<Step>
						<StepLabel>Payment Information</StepLabel>
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
		// border: 'solid black 1px',
	},
	stepperContainer: {
		width: '100%',
		// border: 'solid black 1px',
		flex: 1,
	},
}