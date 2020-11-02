import React from 'react';
import { Link } from 'react-router-dom';
import {
	Container,
	LogoContainer,
	Logo,
	LinksContainer,
	LogoutContainer,
	Logout,
	LinkI,
} from './Styles';

const NavBar = ({ logout, user, login, regist }) => {
	return (
		<Container>
			<LogoContainer>
				<Link to={'/acceder'} style={{ 'text-decoration': 'none' }}>
					<Logo>ePayCo</Logo>
				</Link>
			</LogoContainer>
			{user._id && (
				<LinksContainer>
					<Link style={{ 'text-decoration': 'none' }} to={'/pagar'}>
						<LinkI>Pagar</LinkI>
					</Link>
					<Link
						style={{ 'text-decoration': 'none', margin: '0,5% 2%' }}
						to={'/recargar'}
					>
						<LinkI>Recargar</LinkI>
					</Link>
				</LinksContainer>
			)}
			<LogoutContainer>
				{user._id ? (
					<Logout onClick={logout}>Logout</Logout>
				) : (
					<>
						<Logout onClick={login}>Login</Logout>
						<Logout onClick={regist}>Registrarse</Logout>
					</>
				)}
			</LogoutContainer>
		</Container>
	);
};

export default NavBar;
