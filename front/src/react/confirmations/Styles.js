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
`;

export const TitleContainer = styled.div`
	text-align: center;
`;

export const Title = styled.div`
	font-size: 60px;
	text-transform: uppercase;
	color: white;
`;

export const InfoContainer = styled.div`
	text-transform: uppercase;
	color: #7d5dff;
	text-align: center;
	margin-bottom: 5%;
`;

export const InfoTitle = styled.div`
    font-size: 38px;
    margin-bottom: 2.5%
`;

export const InfoText = styled.div`
	font-size: 34px;
	text-transform: uppercase;
    color: white;
    font-weight: bold;
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

export const ConfirmContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between; 
   margin-top: 10%;
    
`;
