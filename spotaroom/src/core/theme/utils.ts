import { css } from "styled-components";

const breakpoints = {
  sm: "768px",
  md: "992px"
}

export const responsive = (responsiveCss: any, breakpoint: "sm" | "md" = "sm") => {
  return css`
    @media only screen and (min-width: ${breakpoints[breakpoint]}) {
      ${responsiveCss}
    }
  `;
};