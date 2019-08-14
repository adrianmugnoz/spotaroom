import React from "react";
import { StyledTag } from "./tag.styles";
interface ComponentProps {
  type?: string;
}

export const Tag: React.FC<ComponentProps> = props => {
  return <StyledTag {...props}>
    {props.children}
  </StyledTag>;
};
