import React from 'react';
import {
	Container,
	Message,
	SubContainer,
	SaldoContainer,
	Title,
	Info,
	TransactionContainer,
	TransactionsContainer,
	TransactionsInfo,
	TransactionsInfoCont,
	NotTransactions
} from './Styles';

const Transaction = ({ transaction }) => {
	const date = new Date(transaction.dateTime).toLocaleString().replace(',', '');
	const type = transaction.type.toUpperCase();
	const amount = `$${transaction.amount
		.toString()
		.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
	return (
		<TransactionContainer>
			<TransactionsInfo>{date}</TransactionsInfo>
			<TransactionsInfo>{type}</TransactionsInfo>
			<TransactionsInfo>{amount}</TransactionsInfo>
		</TransactionContainer>
	);
};

const Main = ({ amount, transactions, user, message }) => {
	return (
		<Container>
			{message && <Message>{message}</Message>}
			<SubContainer>
				<SaldoContainer>
					<Title>Saldo actual</Title>
					<Info>{`$${amount
						.toString()
						.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`}</Info>
				</SaldoContainer>
				<TransactionsContainer>
					<Title>Ultimas transacciones</Title>
					<TransactionsInfoCont>
						{
							transactions.length > 0 ?
							transactions.map((trs) => (
							<Transaction transaction={trs} />
						)):
							<NotTransactions>No hay transacciones</NotTransactions>
						}
					</TransactionsInfoCont>
				</TransactionsContainer>
			</SubContainer>
		</Container>
	);
};

export default Main;
