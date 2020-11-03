import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import RegisterContainer from './register/RegisterContainer';
import LoginContainer from './login/LoginContainer';
import LoadContainer from './Load/LoadContainer';
import NavBarContainer from './navBar/NavBarContainer';
import PaymentContainer from './payment/PaymentContainer';
import ConfirmLoadContainer from './confirmations/ConfirmLoadContainer';
import PayValidationContainer from './validation/PayValidationContainer';
import ConfirmPaymentContainer from './confirmations/ConfirmPaymentContainer'
import MainContainer from './main/MainContainer'

const Main = () => {
	return (
		<>
			<NavBarContainer />
			<Switch>
				<Route path='/main' component={MainContainer}/>
				<Route path='/registrarse' component={RegisterContainer} />
				<Route path='/acceder' component={LoginContainer} />
				<Route path='/recargar' component={LoadContainer} />
				<Route path='/pagar' component={PaymentContainer} />
				<Route path='/validacion-pago' component={PayValidationContainer} />
				<Route path='/confirmar-recarga' component={ConfirmLoadContainer} />
				<Route path='/confirmar-pago' component={ConfirmPaymentContainer} />
				<Redirect to='/acceder'/>
			</Switch>
		</>
	);
};

export default Main;
