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
	LinkD,
} from './Styles';

const NavBar = ({ logout, user, login, regist, handlerPage, page }) => {
	return (
		<Container>
			<LogoContainer>
				<Link to={'/main'} style={{ 'text-decoration': 'none' }}>
					<Logo onClick={() => handlerPage('Home')}>ePayCo</Logo>
				</Link>
			</LogoContainer>
			{user._id && (
				<LinksContainer>
					{page !== 'pagar' ? (
						<Link style={{ 'text-decoration': 'none' }} to={'/pagar'}>
							<LinkI onClick={() => handlerPage('pagar')}>Pagar</LinkI>
						</Link>
					) : (
						<Link style={{ 'text-decoration': 'none' }}>
							<LinkD>Pagar</LinkD>
						</Link>
					)}
					{page !== 'recargar' ? (
						<Link
							style={{ 'text-decoration': 'none', margin: '0,5% 2%' }}
							to={'/recargar'}
						>
							<LinkI onClick={() => handlerPage('recargar')}>Recargar</LinkI>
						</Link>
					) : (
						<Link style={{ 'text-decoration': 'none' }}>
							<LinkD>Recargar</LinkD>
						</Link>
					)}
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
