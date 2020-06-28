import React, { useState } from 'react';
import MainLayout from './components/MainLayout';
import PersonalDetails from './components/screens/PersonalDetails';
import PaymentDetails from './components/screens/PaymentDetails';

function App() {

	const [step, setStep] = useState(0)

	const nextStep = () => {
		setStep(step => step + 1)
	}
	const prevStep = () => {
		setStep(step => step - 1)
	}

	const [details, setDetails] = useState({})

	const updateDetails = (newDetails) => {
		let tempDetails = details
		Object.keys(newDetails).forEach(key => {
			tempDetails[key] = newDetails[key]
		})
		setDetails(tempDetails)
		console.log(details)
	}

	const screens = [
		<PersonalDetails nextStep={nextStep} details={details} updateDetails={updateDetails} />,
		<PaymentDetails nextStep={nextStep} details={details} updateDetails={updateDetails} prevStep={prevStep} />
	]

	return (
		<MainLayout activeStep={step} >
			{screens[step]}
		</MainLayout>
	);
}

export default App;
