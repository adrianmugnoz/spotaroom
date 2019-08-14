import React from "react";
import { ButtonProps } from "./button.types";
import {StyledButton} from "./button.styles"

export const Button: React.FC<ButtonProps> = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};
