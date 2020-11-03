import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loadWallet, clear_errors } from '../../redux/actions/wallet-actions';
import Load from './Load';

const LoadContainer = () => {
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

	useEffect(() => {
		if (!user._id) {
			history.push('/acceder');
		}
	});

	useEffect(() => {
		dispatch(clear_errors());
	}, [])

	const validateFields = () => {
		let copy = { ...isValid };

		copy.username = username !== '';
		copy.document = document !== '';
		copy.amount = amount !== '';

		setIsValid(copy);

		return copy.username && copy.document && copy.amount;
	};

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
		const next = () => history.push('/confirmar-recarga');

		if (validateFields()) {
			dispatch(loadWallet(username, String(document), amount, next));
		}
	};

	const handleEnter = (e) =>{
		if(e.key == 'Enter'){
			handleSubmit()
		}
	}

	return (
		<Load
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
			handleEnter={handleEnter}
		/>
	);
};

export default LoadContainer;
