import React from "react";
import { StyledHeader } from "./header.styles";
export const Header: React.FC = props => {
  return (
    <StyledHeader>
      <div className="company">[ Spotaroom ]</div>
      <div className="links">
        <ul>
          <li><a href="/#company">The Company</a></li>
          <li><a href="/#works">How we work</a></li>
          <li><a href="/#contact">Contact us</a></li>
        </ul>
      </div>
    </StyledHeader>
  );
};
