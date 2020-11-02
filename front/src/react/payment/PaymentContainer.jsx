import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makePayment } from '../../redux/actions/wallet-actions';
import { useHistory } from 'react-router-dom';
import Payment from './Payment';

const PaymentContainer = () => {
	const dispatch = useDispatch();
	let history = useHistory();

	const errors = useSelector((state) => state.walletReducer.errors);
	const user = useSelector((state) => state.userReducer.user);

	const [username, setUsername] = useState('');
	const [document, setDocument] = useState('');
	const [amount, setAmount] = useState('');
	const [isValid, setIsValid] = useState({
		username: true,
		document: true,
		amount: true,
	});
	const validateFields = () => {
		let copy = { ...isValid };

		copy.username = username !== '';
		copy.document = document !== '';
		copy.amount = amount !== '';

		setIsValid(copy);
		console.log(copy);

		return copy.username && copy.document && copy.amount;
	};

	useEffect(() => { if(!user._id ){
		history.push('/acceder')
	}});

	const handleUsername = (e) => {
		const value = e.target.value;
		setUsername(value);
	};
	const handleDocument = (e) => {
		const value = e.target.value;
		setDocument(value);
	};
	const handleAmount = (e) => {
		const value = e.target.value;
		setAmount(value);
	};
	const handleSubmit = () => {
		const next = () => history.push('/validacion-pago');
		if (validateFields()) {
			dispatch(makePayment(username, String(document), amount, next));
		}
	};

	return (
		<Payment
			username={{
				value: username,
				handler: handleUsername,
				isValid: isValid.username,
				message: errors.load,
			}}
			document={{
				value: document,
				handler: handleDocument,
				isValid: isValid.document,
				message: errors.load,
			}}
			amount={{
				value: amount,
				handler: handleAmount,
				isValid: isValid.amount,
				message: errors.load,
			}}
			submit={handleSubmit}
		/>
	);
};

export default PaymentContainer;
