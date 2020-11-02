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
	InputInfo,
	InvalidInput
} from './Styles';

const Load = ({ username, document, amount, submit }) => {
	return (
		<Container>
			<SubContainer>
				<Content>
					<TitleContainer>
						<Title>Recarga</Title>
					</TitleContainer>
					<FormContainer>
						<InputContainer>
							<TitleInput>usuario</TitleInput>
							{username.isValid && !username.message ? (
								<Input
									placeholder={'ej: cristianluna'}
									type='text'
									value={username.value}
									onChange={username.handler}
								/>
							) : (
								<>
									<InvalidInput
										placeholder={'ej: cristianluna'}
										type='text'
										value={username.value}
										onChange={username.handler}
									/>
									<InputInfo>
										{!username.isValid
											? 'Usuario es requerido'
											: username.message}
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
								/>
							) : (
								<>
									<InvalidInput
										placeholder={'ej: 95099898'}
										type='number'
										value={document.value}
										onChange={document.handler}
									/>
									<InputInfo>
										{!username.isValid ? 'Document es requerido' : null}
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
								/>
							) : (
								<>
									<InvalidInput
										placeholder={'ej: 5000'}
										type='number'
										value={amount.value}
										onChange={amount.handler}
									/>
									<InputInfo>
										{!username.isValid ? 'Monto es requerido' : null}
									</InputInfo>
								</>
							)}
						</InputContainer>
						<Button onClick={submit}>enviar</Button>
					</FormContainer>
				</Content>
			</SubContainer>
		</Container>
	);
};

export default Load;
