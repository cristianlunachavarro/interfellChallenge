import axios from 'axios';
import {LOGIN_USER, CLEAR_ERROR, ERROR_LOGIN, SET_MESSAGE} from '../constants'

 const login_user = (data) => { 
 return{
	 type: LOGIN_USER,
	 user: data.user,
	 info: {
		 saldo: data.saldo,
		 transactions: data.last_transactions
	 }
 }
}

const logout_user = () => ({
	type: LOGIN_USER,
	user: {},
	info: {
		saldo: 0,
		transactions: []
	}
})

 const error_login = () => { 
	return{
		type: ERROR_LOGIN,
		message: 'El usuario/contraseña es invalido'
	}
   }

   export const clear_error = () => { 
	return{
		type: CLEAR_ERROR,
	}
   }

   const set_message = (msg) => { 
	return{
		type: SET_MESSAGE,
	    message: msg
	}
   }

export const registUser = (username, email, document, phone, password, next) => (
	dispatch
) => {
	axios
		.post('http://localhost:1337/api/users/register', {
			username,
			email,
			document,
			phone,
			password
		}).then(() =>{
			next()
		})
};

export const loginUser = (username, password, next) => (dispatch) =>{
	dispatch(clear_error())
	axios.post('http://localhost:1337/api/users/login', {
		username,
		password
	})
	.then(res => res.data)
	.then(data => {dispatch(login_user(data)); next()})
	.catch(() =>{
		dispatch(error_login())
	})
}

export const logoutUser = (next) => (dispatch) =>
  axios
    .post(`http://localhost:1337/api/users/logout`)
    .then(() => {dispatch(logout_user({})); next()});

export const validateUserField = (
	value,
	isValid,
	setIsValid,
	reference,
	field
) => {
	axios
		.post('http://localhost:1337/api/users/validate', { [field]: value })
		.then(() => {
			setIsValid({ ...isValid, [field]: true });
			setTimeout(() => reference.current.focus(), 100);
		})
		.catch(() => {
			setIsValid({ ...isValid, [field]: false });
			setTimeout(() => reference.current.focus(), 100);
		});
};

export const setMessage = (message) => (dispatch) => {
	dispatch(set_message(message))
}