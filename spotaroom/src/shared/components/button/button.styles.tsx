import styled, {css} from "styled-components";
import { ButtonProps } from "./button.types";

const defaultStyles = (theme: any) =>{
  return css`
    background-color: ${theme.primaryColor}
    border-color: ${theme.primaryColorDark}
    color: ${theme.white}
  `
}

const secondaryStyles = (theme: any) =>{
  return css`
    background-color: ${theme.secondaryColor}
    border-color: ${theme.secondaryColorDark}
    color: ${theme.white}
  `
}

const resetBrowserStyles = css`
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  `

export const StyledButton = styled.button<ButtonProps>`
  ${resetBrowserStyles}
  padding: 5px 20px;
  border-bottom: 3px solid;
  cursor: pointer;
  ${({ secondary, theme }) => {
    return secondary ? secondaryStyles(theme) : defaultStyles(theme)}}
`;
