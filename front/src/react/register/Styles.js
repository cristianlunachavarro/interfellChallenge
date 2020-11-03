import styled from 'styled-components';
import background from '../../assets/backgroundImage.jpg';

export const Container = styled.div`
	background-image: url(${background});
	background-size: 100% auto%;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: row;
	height: 100%;
	align-items: center;
	justify-content: center;
	@media (max-width: 500px) {
		flex-direction: column-reverse;
		justify-content: space-around;
	}
`;
export const Left = styled.div`
	width: 50%;
	@media (max-width: 500px) {
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
	@media (max-width: 500px) {
		font-size: 36px;
	}
`;

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
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
	@media (max-width: 500px) {
		width: 90%;
	}
`;

export const TitleInput = styled.div`
	font-size: 30px;
	text-transform: uppercase;
	color: white;
	margin-bottom: 2%;
	@media (max-width: 500px) {
		font-size: 24px;
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

export const InputInvalid = styled.input`
	font-size: 22px;
	border: 1px solid red;
	width: 100%;
	border-radius: 20px;
	padding: 1% 2.5%;
	:focus {
		outline: none;
	}
`;

export const InputValidInfo = styled.span`
color: white;
font-size: 20px;
position: absolute;
bottom: -25px;

@media(max-width: 500px) {
	font-size: 14px;
	bottom: -12px;
	text-align: center;
}
`;

export const InputInfo = styled.small`
	color: white;
	position: absolute;
	font-size: 24px;
	bottom: -17px;
	@media (max-width: 500px) {
		font-size: 14px;
		bottom: -12px;
		text-align: center;
		position: initial;
	}
`;

export const InputInfoFields = styled.div`
	color: white;
	font-size: 24px;
	@media (max-width: 500px) {
		text-align: center;
	}
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

export const Logo = styled.div`
	width: 90%;
`;

export const Link = styled.a`
	color: white;
`;
