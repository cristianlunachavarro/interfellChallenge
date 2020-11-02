import React, { useState } from 'react';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../../redux/actions/user-actions';

const LoginContainer = () => {
	const dispatch = useDispatch();
	let history = useHistory();

	const error = useSelector((state) => state.userReducer.error);

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isValid, setIsValid] = useState({
		username: true,
		password: true,
	});
	const validateFields = () => {
		let copy = { ...isValid };

		copy.username = username !== '';
		copy.password = password !== '';
		setIsValid(copy);

		return copy.username && copy.password;
	};

	const handleUsername = (e) => {
		const value = e.target.value;
		setUsername(value);
	};

	const handlePassword = (e) => {
		const value = e.target.value;
		setPassword(value);
	};

	const handleSubmit = () => {
		const next = () => history.push('/main');
		if (validateFields()) {
			dispatch(loginUser(username, password, next));
		}
	};

	const handleEnter = (e) => {
		if (e.key == 'Enter') {
			handleSubmit();
		}
	};

	return (
		<Login
			username={{
				value: username,
				handler: handleUsername,
				message: error,
				isValid: isValid.username
			}}
			password={{
				value: password,
				handler: handlePassword,
				isValid: isValid.password
			}}
			handleEnter={handleEnter}
			submit={handleSubmit}
		/>
	);
};

export default LoginContainer;
