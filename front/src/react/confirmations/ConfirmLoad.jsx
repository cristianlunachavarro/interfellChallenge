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

const ConfirmLoad = ({ payment }) => {
	return (
		<Container>
			<SubContainer>
				<Content>
					<TitleContainer>
						<Title>Confirmación de recarga</Title>
					</TitleContainer>
					<ConfirmContainer>
						<InfoContainer>
							<InfoTitle>{'Numero de cuentas'}</InfoTitle>
							<InfoText>{`XXXX-XXXX-XXXX-${payment.accountNumber.slice(
								32,
								36
							)}`}</InfoText>
						</InfoContainer>
						<InfoContainer>
							<InfoTitle>{'Dinero Ingresado'}</InfoTitle>
							<InfoText>{`$${payment.amountLoaded
								.toString()
								.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`}</InfoText>
						</InfoContainer>
						<InfoContainer>
							<InfoTitle>{'Dinero total en tu WALLET'}</InfoTitle>
							<InfoText>{`$${payment.walletTotal
								.toString()
								.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`}</InfoText>
						</InfoContainer>
					</ConfirmContainer>
				</Content>
			</SubContainer>
		</Container>
	);
};

export default ConfirmLoad;
