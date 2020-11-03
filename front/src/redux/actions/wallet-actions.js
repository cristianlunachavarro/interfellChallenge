import axios from 'axios';
import { setMessage } from './user-actions';
import { MAKE_PAYMENT, LOAD_WALLET, ERROR_LOAD, ERROR_LOAD_CLEAR, VALIDATE_PAYMENT, LOAD_INFO } from '../constants';

const make_payment = (payment) => {
	return {
		type: MAKE_PAYMENT,
		payment,
	};
};

const load_wallet = (payment) => {
	return {
		type: LOAD_WALLET,
		payment,
	};
};

const validate_payment = (payment) => {
	return {
		type: VALIDATE_PAYMENT,
		payment

	}
}

const load_errors = (message) => {
    return{
        type: ERROR_LOAD,
        message: message
    }
}

const load_wallet_info = data => {
	return {
		type: LOAD_INFO,
		amount: data.amount,
		transactions: data.transactions
	}
}

export const clear_errors = () => {
    return{
        type: ERROR_LOAD_CLEAR,
    }
}

export const getWalletInfo = (username) => (dispatch) => {
	return axios.post('http://localhost:1337/api/wallet/info', {
		username
	})
	.then(res => res.data)
	.then(data => {
		dispatch(load_wallet_info(data));
	})
}

export const loadWallet = (username, document, amount, next) => (dispatch) => {
	return axios
		.post('http://localhost:1337/api/wallet/recargar', {
			username,
			document,
			amount,
		})
		.then((res) => res.data)
        .then((payment) => dispatch(load_wallet(payment)))
        .then(()=> {dispatch(clear_errors()); next(); })
		.catch((err) => {
			dispatch(load_errors());
		});
};

export const makePayment = (username, document, amount, next) => (dispatch) => {
	return axios
		.post('http://localhost:1337/api/wallet/pagar', {
			username,
			document,
			amount,
		})
		.then((res) => res.data)
		.then((payment) => dispatch(make_payment(payment)))
		// .then(() => {dispatch(setMessage('Revise su mail para confirmar el pago'))})
		.then(()=> {dispatch(clear_errors()); next(); })
		.catch((err) => {
			if (err.response) {
				const error = err.response.data;
				if (error.code === 410) {
					dispatch(load_errors('Fondos insuficientes'))
				} else if (error.code === 411) {
					dispatch(load_errors('Hay un error en el usuario/documento'))
				} else {
					dispatch(load_errors('Error al comunicarse con el servidor'))
				}
			} else {
				dispatch(load_errors('Error al comunicarse con el servidor'))
			}
		});
};

export const validatePayment = (codigo, eid, username, next) => (dispatch) => {
	return axios.post('http://localhost:1337/api/wallet/confirmar', {
		codigo: codigo,
		eid: eid,
		username: username,
	})
	.then(res => { console.log('RESDATA', res.data)
	return res.data})
	.then((payment) => {dispatch(validate_payment(payment)); next()})
};
