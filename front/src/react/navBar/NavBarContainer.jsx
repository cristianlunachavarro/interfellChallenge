import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './NavBar';
import { useHistory } from 'react-router-dom';
import { logoutUser } from '../../redux/actions/user-actions';

const NavBarContainer = () => {
    const dispatch = useDispatch();
    const history = useHistory()

	const user = useSelector((state) => state.userReducer.user);

	const handleLogout = () => {
        const next = () => history.push('acceder')
		dispatch(logoutUser(next));
    };
    const handleLogin = () => {
		history.push('/acceder')
	};

	const handleRegist = () => {
		history.push('/registrarse')
	}
	return <NavBar logout={handleLogout} user={user} login={handleLogin} regist={handleRegist}/>;
};

export default NavBarContainer;
