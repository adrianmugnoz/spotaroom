import React from "react";
import { StyledImage } from "./image.styles";
interface ComponentProps {
  src: string;
}

export const Image: React.FC<ComponentProps> = props => {
  return <StyledImage {...props} />;
};
