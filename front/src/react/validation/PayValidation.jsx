import React from 'react';

import {
	Container,
	SubContainer,
	Content,
	TitleContainer,
	Title,
	FormContainer,
	InputContainer,
	TitleInput,
	Input,
	ButtonContainer,
	Button,
} from './Styles';

const PayValidation = ({ codigo, eid, submit }) => {
	return (
		<Container>
			<SubContainer>
				<Content>
					<TitleContainer>
						<Title>Confirmacion de transacción</Title>
					</TitleContainer>
					<FormContainer>
						<InputContainer>
							<TitleInput>Codigo</TitleInput>
							<Input
                                placeholder={'Digite acá el codigo que recibio en su mail'}
								type='number'
								required
								value={codigo.value}
								onChange={codigo.handler}
							/>
						</InputContainer>
						<InputContainer>
							<TitleInput>ID de sesion</TitleInput>
							<Input
                                placeholder={'Escriba acá el ID de sesión que recibio en su mail'}
								required
								type='text'
								value={eid.value}
								onChange={eid.handler}
							/>
						</InputContainer>
							<Button onClick={submit}>Confirmar</Button>
					</FormContainer>
				</Content>
			</SubContainer>
		</Container>
	);
};

export default PayValidation;
