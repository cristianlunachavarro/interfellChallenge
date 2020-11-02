import styled from 'styled-components';
import background from '../../assets/backgroundImage.jpg';

export const Container = styled.div`
	background-image: url(${background});
	background-repeat: no-repeat;
	background-size: 100% 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	height: 100%;

	@media(max-width: 500px) {
		flex-direction: column-reverse;
		justify-content: space-around;
	}
`;
export const Left = styled.div`
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
		font-size: 48px;
	}
`;

export const FormContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 20px;
	width: 100%;
	padding: 10% 0;
`;

export const InputInfo = styled.span`
	color: white;
	position: absolute;
	font-size: 20px;
	bottom: -17px;
	
	@media(max-width: 500px) {
		font-size: 14px;
		bottom: -12px;
		text-align: center;
	}
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 60%;
	margin: 2.5%;

	@media(max-width: 500px) {
		width: 100%;
	}
`;

export const TitleInput = styled.div`
	font-size: 30px;
	text-transform: uppercase;
	color: white;
	margin-bottom: 5%;

	@media(max-width: 500px) {
		font-size: 24px;
	}
`;

export const Input = styled.input`
	font-size: 18px;
	border: hidden;
	width: 100%;
	border-radius: 20px;
	padding: 1% 2.5%;
`;

export const ButtonContainer = styled.div`
	align-item: center;
`;

export const Button = styled.button`
	color: white;
	text-transform: uppercase;
	font-size: 20px;
	background-color: #a1bafb;
	border: 1px solid white;
	border-radius: 5px;
	padding: 2% 5%;
	margin-top: 5%;
	cursor: pointer;
`;

export const Right = styled.div`
	width: 50%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const LogoContainer = styled.div``;

export const Logo = styled.img`
	width: 90%;
`;
