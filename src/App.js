import React, { useState } from 'react';
import MainLayout from './components/MainLayout';
import PersonalDetails from './components/screens/PersonalDetails';

function App() {

	const [step, setStep] = useState(0)

	const screens = [
		<PersonalDetails />
	]

	return (
		<MainLayout activeStep={step} >
			{screens[step]}
		</MainLayout>
	);
}

export default App;
