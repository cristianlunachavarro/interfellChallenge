import React, { useState } from 'react';
import PayValidation from './PayValidation';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { validatePayment } from '../../redux/actions/wallet-actions';

const PayValidationContainer = () => {
	const dispatch = useDispatch();
	let history = useHistory();

	const user = useSelector((state) => state.userReducer.user)

	const [codigo, setCodigo] = useState('');
	const [eid, setEid] = useState('');

	const handleCodigo = (e) => {
		const value = e.target.value;
		setCodigo(value);
	};

	const handleEid = (e) => {
		const value = e.target.value;
		setEid(value);
	};

	const handleSubmit = () => {
		const next = () => history.push('/confirmar-pago')
		dispatch(validatePayment(String(codigo), eid, user.username, next))
	};

	return (
		<PayValidation
			codigo={{
				value: codigo,
				handler: handleCodigo,
			}}
			eid={{
				value: eid,
				handler: handleEid,
			}}
			submit={handleSubmit}
		/>
	);
};

export default PayValidationContainer;
