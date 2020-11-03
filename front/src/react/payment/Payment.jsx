import React from 'react';
import {
	Container,
	Content,
	SubContainer,
	TitleContainer,
	Title,
	Button,
	FormContainer,
	InputContainer,
	TitleInput,
	Input,
	InvalidInput,
	InputInfo,
	ErrorMsg
} from './Styles';

const Payment = ({ username, document, amount, submit, handleEnter, error }) => {
	console.log('error', error);
	return (
		<Container>
			<SubContainer>
				<Content>
					<TitleContainer>
						<Title>Pagar</Title>
					</TitleContainer>
					<FormContainer>
						<InputContainer>
							<TitleInput>usuario</TitleInput>
							{username.isValid ? (
								<Input
									placeholder={'ej: cristianluna'}
									type='text'
									value={username.value}
									onChange={username.handler}
									onKeyPress={handleEnter}
								/>
							) : (
								<>
									<InvalidInput
										placeholder={'ej: cristianluna'}
										type='text'
										value={username.value}
										onChange={username.handler}
										onKeyPress={handleEnter}
									/>
									<InputInfo>
										{'Usuario es requerido'}
									</InputInfo>
								</>
							)}
						</InputContainer>
						<InputContainer>
							<TitleInput>documento</TitleInput>
							{document.isValid ? (
								<Input
									placeholder={'ej: 95099898'}
									type='number'
									value={document.value}
									onChange={document.handler}
									onKeyPress={handleEnter}
								/>
							) : (
								<>
									<InvalidInput
										placeholder={'ej: 95099898'}
										type='number'
										value={document.value}
										onChange={document.handler}
										onKeyPress={handleEnter}
									/>
									<InputInfo>
										{!document.isValid ? 'Documento es requerido' : null}
									</InputInfo>
								</>
							)}
						</InputContainer>
						<InputContainer>
							<TitleInput>monto</TitleInput>
							{amount.isValid ? (
								<Input
									placeholder={'ej: 5000'}
									type='number'
									value={amount.value}
									onChange={amount.handler}
									onKeyPress={handleEnter}
								/>
							) : (
								<>
									<InvalidInput
										placeholder={'ej: 5000'}
										type='number'
										value={amount.value}
										onChange={amount.handler}
										onKeyPress={handleEnter}
									/>
									<InputInfo>
										{!amount.isValid ? 'Monto es requerido' : null}
									</InputInfo>
								</>
							)}
						</InputContainer>
							{ 
								error && 
								<ErrorMsg>{error}</ErrorMsg>
							}
						<Button onClick={submit}>enviar</Button>
					</FormContainer>
				</Content>
			</SubContainer>
		</Container>
	);
};

export default Payment;
