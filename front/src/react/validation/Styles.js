import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #ecf1ff;
	height: 100%;
`;

export const SubContainer = styled.div`
	width: 50%;

	@media(max-width: 500px) {
		width: 90%;
	}
`;

export const Content = styled.div`
	margin: 5% 10%;
	padding: 10%;
	display: flex;
	flex-direction: column;
	background-color: rgb(108, 149, 255, 60%);
	align-items: center;
	justify-content: space-around;
	border: 3px solid #7d5eff;
	border-radius: 20px;
`;

export const TitleContainer = styled.div``;

export const Title = styled.div`
	font-size: 50px;
	text-transform: uppercase;
	color: white;
	text-align: center;

	@media(max-width: 500px) {
		font-size: 24px;
	}
`;

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 20px;
	width: 100%;
	margin-top: 10%;
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 60%;
	margin-bottom: 5%;

	@media(max-width: 500px) {
		width: 100%;
	}
`;

export const TitleInput = styled.div`
	color: white;
	font-size: 30px;
	text-transform: uppercase;
	margin-bottom: 5%;

	@media(max-width: 500px) {
		font-size: 20px;
	}
`;

export const Input = styled.input`
	font-size: 22px;
	border: hidden;
	width: 100%;
	border-radius: 20px;
	padding: 1% 2.5%;
	:focus {
		outline: none;
	}
`;

export const Button = styled.button`
	color: white;
	text-transform: uppercase;
	font-size: 20px;
	background-color: #a3bcff;
	border: 1px solid #7d5dff;
	border-radius: 5px;
	padding: 2.5% 5%;
	margin-top: 5%;
	cursor: pointer;
`;
