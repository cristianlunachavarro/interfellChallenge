import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	justify-content: center;
	background-color: #ecf1ff;
	height: 91vh;
`;
export const Message = styled.div``;

export const SubContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	width: 80%;
	@media(max-width: 500px) {
		flex-direction: column;
		justify-content: space-around;
		height: 100%
	}
`;
export const SaldoContainer = styled.div`
	padding: 2.5%;
	background-color: #c9d8fc;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	justify-content: center;
	border: 1px solid #7d5dff;
	border-radius: 15px;
	margin-right: 12px;

	@media(max-width: 500px) {
		height: auto;
		width: 100%;
		margin: 12px 0;
	}
`;
export const Title = styled.div`
	font-size: 36px;
	text-transform: uppercase;
	margin-bottom: 10%;
	color: #9378FF;
	font-weight: bold;
	text-align: center;
`;
export const Info = styled.div`
	text-align: center;
	width: 100%;
	color: #20BE26;
	font-weight: bold;
	font-size: 34px;
`;
export const TransactionContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 2% 1%;
	:nth-child(even) {
		background-color: #eaf0ff;
	}
	:nth-child(odd) {
		background-color: #d2daef;
	}
`;
export const TransactionsContainer = styled.div`
	padding: 2.5%;
	background-color: #c9d8fc;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 40%;
	border: 1px solid #7d5dff;
	border-radius: 15px;
	height: 100%;
	justify-content: center;

	@media(max-width: 500px) {
		width: 100%;
	}
`;
export const TransactionsInfo = styled.div`
	padding: 1%;
	font-size: 22px;

	@media(max-width: 500px) {
		font-size: 16px;
	}
`;

export const TransactionsInfoCont = styled.div`
	width: 100%;
`;
