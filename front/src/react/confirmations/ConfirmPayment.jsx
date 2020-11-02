import React from 'react';
import {
	Container,
	SubContainer,
	Content,
	TitleContainer,
	Title,
	ConfirmContainer,
	InfoText,
	InfoContainer,
	InfoTitle,
} from './Styles';

const ConfirmPayment = ({ payment }) => {
	return (
		<Container>
			<SubContainer>
				<Content>
					<TitleContainer>
						<Title>Confirmación de pago</Title>
					</TitleContainer>
					<ConfirmContainer>
						<InfoContainer>
							<InfoTitle>{'Saldo en la cuenta'}</InfoTitle>
							<InfoText>{`$${payment.saldo
								.toString()
								.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`}</InfoText>
						</InfoContainer>
					</ConfirmContainer>
				</Content>
			</SubContainer>
		</Container>
	);
};

export default ConfirmPayment;
