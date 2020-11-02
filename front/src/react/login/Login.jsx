import React from 'react';
import logo from '../../assets/Logo.png';
import { InvalidInput } from '../payment/Styles';

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
						{username.message && <InputInfo>{username.message}</InputInfo>}
						{(!username.isValid || !password.isValid) && <InputInfo>{'Usuario y contraseña son requerido'}</InputInfo>}
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
