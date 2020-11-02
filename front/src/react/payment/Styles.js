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
	font-size: 60px;
	text-transform: uppercase;
	color: white;

	@media(max-width: 500px) {
		font-size: 32px;
		font-weight: bold;
	}
`;

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 20px;
	width: 100%;
	padding: 10% 0;
`;

export const InputContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 60%;
	margin: 2.5%;

	@media(max-width: 500px) {
		width: 100%;
	}
`;

export const InputInfo = styled.small`
	color: white;
	position: absolute;
	bottom: -17px;

	@media(max-width: 500px) {
		position: inherit;
		bottom: 0;
		text-align: center;
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
	font-size: 18px;
	border: hidden;
	width: 100%;
	border-radius: 20px;
	padding: 1% 2.5%;
	:focus {
		outline: none;
	}
`;

export const InvalidInput = styled.input`
	font-size: 18px;
	border: hidden;
	width: 100%;
	border-radius: 20px;
	padding: 1% 2.5%;
	border: 1px solid red;
	background-color: #fff5f5;
	:focus {
		outline: none;
	}
`;

export const ButtonContainer = styled.div``;

export const Button = styled.button`
	color: white;
	text-transform: uppercase;
	font-size: 20px;
	background-color: #a1bafb;
	border: 1px solid white;
	border-radius: 5px;
	padding: 2.5% 5%;
	margin-top: 5%;
	cursor: pointer;
`;
