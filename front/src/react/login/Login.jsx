import React from 'react';
import logo from '../../assets/Logo.png';
import { InvalidInput } from '../payment/Styles';
import { Link } from 'react-router-dom';

import {
	Container,
	Left,
	Content,
	TitleContainer,
	Title,
	Button,
	FormContainer,
	Right,
	InputContainer,
	TitleInput,
	Input,
	LogoContainer,
	InputInfo,
	Logo,
} from './Styles';

const Login = ({ username, password, submit, handleEnter }) => {
	return (
		<Container>
			<Left>
				<Content>
					<TitleContainer>
						<Title>Acceder</Title>
					</TitleContainer>
					<FormContainer>
						<InputContainer>
							<TitleInput>usuario</TitleInput>
							<Input
								type='text'
								placeholder='cristianluna'
								onChange={username.handler}
								onKeyPress={handleEnter}
								value={username.value}
							/>
						</InputContainer>
						<InputContainer>
							<TitleInput>password</TitleInput>
							<Input
								type='password'
								placeholder='Escriba su contraseña aquí'
								onChange={password.handler}
								onKeyPress={handleEnter}
								value={password.value}
							/>
						</InputContainer>
						<Button onClick={submit}>enviar</Button>
						<Link
							to={'registrarse'}
							style={{ color: 'white', margin: '2.5% 0', fontSize: '18px' }}
						>
							Crear Cuenta
						</Link>
						{username.message && <InputInfo>{username.message}</InputInfo>}
						{(!username.isValid || !password.isValid) && (
							<InputInfo>{'Usuario y contraseña son requeridos'}</InputInfo>
						)}
					</FormContainer>
				</Content>
			</Left>
			<Right>
				<LogoContainer>
					<Logo src={logo} />
				</LogoContainer>
			</Right>
		</Container>
	);
};

export default Login;
