import { extendTheme } from "@chakra-ui/react";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
};

const theme = extendTheme({
  semanticTokens: {
    colors: {
      bgCard: {
        default: "white",
        _dark: "#2d3748",
      },
      modelHead: {
        default: "#F2F2F2",
        _dark: "#808080",
      },
      textColor: {
        default: "#000000",
        _dark: "#FFFFFF",
      },
      buttonColorScheme: { default: "whiteAlpha", _dark: "blackAlpha" },
      trLeaveStripe: { default: "#E6E6FA", _dark: "#2B2BD4" },
      trAnnualStripe: { default: "#c6f6d5", _dark: "#1CB04A" },
      theadColor: {
        default: "#E5E4E2",
        _dark: "#6C6860",
      },
      text: {
        default: "#16161D",
        _dark: "#ade3b8",
      },
      heroGradientStart: {
        default: "#7928CA",
        _dark: "#e3a7f9",
      },
      heroGradientEnd: {
        default: "#FF0080",
        _dark: "#fbec8f",
      },
    },
    radii: {
      button: "12px",
    },
  },
  colors: {
    black: "#16161D",
  },
  fonts,
  breakpoints,
});

export default theme;
