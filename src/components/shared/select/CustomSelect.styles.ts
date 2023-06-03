import styled from "styled-components";

export const StyledCustomSelect = styled.ul`
	margin-top: 42px;
	display: block;
	position: absolute;
	background-color: ${(props) => props.theme.colors.white};
	min-width: 160px;
	box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	z-index: 1;
	width: 100%;
	border-radius: 5px;
	padding: 10px 0;
`;

export const ContinentOption = styled.li`
	:hover {
		background-color: ${(props) => props.theme.colors.veryLightGray};
	}
	margin: 5px 0;
	box-sizing: border-box;
	padding: 0 0 0 20px;
	list-style: none;
`;

export const StyledFilterPanel = styled.div`
	border-radius: 5px;
	background-color: ${(props) => props.theme.colors.white};
	width: 15%;
	min-width: 170px;
	max-width: 175px;
	display: flex;
	justify-content: space-around;
	padding: 20px 10px;
	box-shadow: 2px 2px 10px -8px rgba(66, 68, 90, 1);
	font-family: ${(props) => props.theme.fonts.family.basic};
	font-weight: ${(props) => props.theme.fonts.weight.semiBold};
	font-size: ${(props) => props.theme.fonts.sizes.s};
	position: relative;
`;

export const FilterButton = styled.button`
	border: none;
	background-color: ${(props) => props.theme.colors.white};
`;
export const StyledImg = styled.img`
	max-width: 12px;
	max-height: 12px;
`;
