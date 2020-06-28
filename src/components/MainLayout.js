import React from 'react'
import { Stepper, Step, StepLabel } from '@material-ui/core'

export default function MainLayout({ children, activeStep }) {
	return (
		<div style={styles.container} >
			<div style={styles.stepperContainer} >
				<Stepper activeStep={activeStep} >
					<Step>
						<StepLabel>step1</StepLabel>
					</Step>
					<Step>
						<StepLabel>step2</StepLabel>
					</Step>
				</Stepper>
			</div>
			{children}
		</div>
	)
}

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		border: 'solid black 1px',
	},
	stepperContainer: {
		width: '30vw',
	},
}