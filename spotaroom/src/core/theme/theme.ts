const colors = {
  primaryColor: "#3D8F31",
  primaryColorDark: "#146A20",
  secondaryColor: "#F09218",
  secondaryColorDark: "#AB6006",
  hintColor: "#FCD103",
  black: "#343133",
  gray: "#A2A2A2",
  lightGray: "#D2D2D2",
  white: "#FFFFFF"
};

const defaultPadding = 10;
const spacing = {
  spacing: (factor: number = 2) => `${defaultPadding * factor}px`
};

export const theme = {
  ...colors,
  ...spacing
};
