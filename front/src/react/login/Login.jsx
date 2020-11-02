import React from 'react';
import logo from '../../assets/Logo.png';

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

const Login = ({ username, password, submit }) => {
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
								value={username.value}
							/>
						</InputContainer>
						<InputContainer>
							<TitleInput>password</TitleInput>
							<Input
								type='password'
								placeholder='Escriba su contraseña aquí'
								onChange={password.handler}
								value={password.value}
							/>
						</InputContainer>
						<Button onClick={submit}>enviar</Button>
						{username.message && 
						<InputInfo>{username.message}</InputInfo>
						}
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
