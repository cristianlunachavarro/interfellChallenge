import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Register from './Register';
import {
	validateUserField,
	registUser,
} from '../../redux/actions/user-actions';
import { useHistory } from 'react-router-dom';

const RegisterContainer = () => {
	const dispatch = useDispatch();
	let history = useHistory();

	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [document, setDocument] = useState('');
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const [isValid, setIsValid] = useState({
		username: true,
		email: true,
		document: true,
	});
	const [emptyFields, setEmptyFields] = useState(false);

	const validateFields = () => {
		const val = (
			username !== '' &&
			document !== '' &&
			email !== '' &&
			phone !== '' &&
			password !== ''
		);
		setEmptyFields(!val);
		
		return val;
	};

	const [timer, setTimer] = useState(null);

	const usernameRef = useRef();
	const emailRef = useRef();
	const documentRef = useRef();

	const handleUsername = (e) => {
		const value = e.target.value;
		setUsername(value);
		if (timer) {
			clearTimeout(timer);
		}
		setTimer(
			setTimeout(
				() =>
					validateUserField(
						value,
						isValid,
						setIsValid,
						usernameRef,
						'username'
					),
				500
			)
		);
	};

	const handleEmail = (e) => {
		const value = e.target.value;
		setEmail(value);
		if (timer) {
			clearTimeout(timer);
		}
		setTimer(
			setTimeout(() =>
				validateUserField(value, isValid, setIsValid, emailRef, 'email')
			)
		);
	};

	const handleDocument = (e) => {
		const value = e.target.value;
		setDocument(value);
		if (timer) {
			clearTimeout(timer);
		}
		setTimer(
			setTimeout(() =>
				validateUserField(value, isValid, setIsValid, documentRef, 'document')
			)
		);
	};

	const handlePhone = (e) => {
		const value = e.target.value;
		setPhone(value);
	};

	const handlePassword = (e) => {
		const value = e.target.value;
		setPassword(value);
	};

	const handleSubmit = () => {
		const next = () => history.push('/acceder');
		if (validateFields()) {
			dispatch(
				registUser(
					username,
					email,
					String(document),
					String(phone),
					password,
					next
				)
			);
		}
	};

	const handleEnter = (e) => {
		if (e.key == 'Enter') {
			handleSubmit();
		}
	};
	
	return (
		<Register
			username={{
				value: username,
				handler: handleUsername,
				valid: isValid.username,
				reference: usernameRef,
			}}
			email={{
				value: email,
				handler: handleEmail,
				valid: isValid.email,
				reference: emailRef,
			}}
			document={{
				value: document,
				handler: handleDocument,
				valid: isValid.document,
				reference: documentRef,
			}}
			phone={{
				value: phone,
				handler: handlePhone,
			}}
			password={{
				value: password,
				handler: handlePassword,
			}}
			emptyFields={emptyFields}
			submit={handleSubmit}
			handleEnter={handleEnter}
		/>
	);
};

export default RegisterContainer;
