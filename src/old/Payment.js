import React, { useState } from 'react';
import MainLayout from './components/MainLayout';
import PersonalDetails from './components/screens/PersonalDetails';
import PaymentDetails from './components/screens/PaymentDetails';
import SuccessScreen from './components/screens/SuccessScreen';

function Payment({setOpen}) {

	const [step, setStep] = useState(0)

	const nextStep = () => {
		setStep(step => step + 1)
	}
	const prevStep = () => {
		setStep(step => step - 1)
	}

	const modifyStep = () => {
		setStep(step => step - 1)
	}
	
	const oldStep = () => {
		setStep(step => step - 1)
	}
	
	const [details, setDetails] = useState({
		name: '',
		address: '',
		paymentMethod: '0'
	})

	const updateDetails = (newDetails) => {
		let tempDetails = details
		Object.keys(newDetails).forEach(key => {
			tempDetails[key] = newDetails[key]
		})
		setDetails(tempDetails)
		// console.log(details)
	}

	const screens = [
		<PersonalDetails nextStep={nextStep} details={details} updateDetails={updateDetails} />,
		<PaymentDetails nextStep={nextStep} prevStep={prevStep} details={details} updateDetails={updateDetails} />,
		<SuccessScreen prevStep={prevStep} details={details} />,
	]

	return (
		<MainLayout activeStep={step} setOpen={setOpen} >
			{screens[step]}
		</MainLayout>
	);
}

export default Payment;
