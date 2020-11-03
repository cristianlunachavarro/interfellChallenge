import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './NavBar';
import { useHistory } from 'react-router-dom';
import { logoutUser } from '../../redux/actions/user-actions';

const NavBarContainer = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const [selectedPage, setSelectedPage] = useState('Home');

	const user = useSelector((state) => state.userReducer.user);

	const handleLogout = () => {
		const next = () => history.push('/acceder');
		dispatch(logoutUser(next));
		setSelectedPage('Home')
	};
	const handleLogin = () => {
		history.push('/acceder');
	};

	const handleRegist = () => {
		history.push('/registrarse');
	};

	const handleChangePage = (page) => {
		setSelectedPage(page);
	};

	return (
		<NavBar
			logout={handleLogout}
			user={user}
			login={handleLogin}
			regist={handleRegist}
			handlerPage={handleChangePage}
			page={selectedPage}
		/>
	);
};

export default NavBarContainer;
