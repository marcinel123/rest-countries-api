import { Link } from "react-router-dom";
import styled from "styled-components";
import { ArrowLeft } from "@styled-icons/bootstrap/ArrowLeft";

export const StyledFlagWrapper = styled.div`
margin-top: 3rem;
width 90%;
margin: 3rem 0;
@media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
	width 50%;
}
`;
export const StyledArrowIcon = styled(ArrowLeft)`
	color: ${(props) => props.theme.colors.text};
	width: 1.5rem;
	height: 1rem;
	margin-right: 5px;
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
	width: 6rem;
	height: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 3px;
	box-shadow: 0px 0px 7px -4px ${(props) => props.theme.colors.text};
	padding: 5px;
	margin-bottom: 4rem;
	font-family: ${(props) => props.theme.fonts.family.basic};
	font-size: ${(props) => props.theme.fonts.sizes.m};
	color: ${(props) => props.theme.colors.text};
	background-color: ${(props) => props.theme.colors.elements};
	font-weight: ${(props) => props.theme.fonts.weight.semiBold};
`;

export const StyledFlagImage = styled.img`
	width: 100%;
	max-width: 60rem;
	height: 50%;
	max-height: 30rem;
	@media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
		margin-right: 10rem;
	}
`;
