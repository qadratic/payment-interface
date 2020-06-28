import React from 'react'

export default function MainLayout() {
	return (
		<div style={styles.container} >
			<div  >stepper</div>
			<div>screen</div>
		</div>
	)
}

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		border: 'solid black 1px',
	},
}