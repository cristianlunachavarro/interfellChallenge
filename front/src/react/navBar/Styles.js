import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
    background-color: #7c95da;
    padding: 1% 2%;
    border: 3px solid #7D5DFF:
`;

export const LogoContainer = styled.div`
	width: 100%;
`;

export const Logo = styled.div`
	color: #7856ff;
	font-size: 50px;
	font-weight: bold;
`;

export const LinksContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	color: white;
	text-transform: uppercase;


`;

export const LinkI = styled.a`
	color: white;
	font-size: 32px;
	text-transform: uppercase;
    padding: 0 30%;
`;

export const LogoutContainer = styled.div`
	display: flex;
	flex-direction: row;
    align-items: center;
    justify-content: flex-end;
	width: 100%;
`;

export const Logout = styled.div`
	color: white;
	font-size: 26px;
    text-transform: uppercase;
    border: 1px solid #7856FF;
    background-color: #A1B9FA;
    border-radius: 10px;
	padding: 1% 5%;
	margin: 0 3%

`;
