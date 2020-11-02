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

	const handleUsername = (e) => {
		const value = e.target.value;
		setUsername(value);
	};

	const handlePassword = (e) => {
		const value = e.target.value;
		setPassword(value);
	};

	const handleSubmit = () => {
		const next = () => history.push('/pagar')
		dispatch(loginUser(username, password, next))
	};

	return (
		<Login
			username={{
				value: username,
				handler: handleUsername,
				message: error
			}}
			password={{
				value: password,
				handler: handlePassword,
			}}
			submit={handleSubmit}
		/>
	);
};

export default LoginContainer;
