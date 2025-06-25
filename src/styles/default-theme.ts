import "styled-components";

export const DefaultTheme = {
  background: "#F0F2F5",
  red: "#E52E4D",
  green: "#33CC95",
  blue: "#5429CC",

  blueLight: "#6933FF",

  textTitle: "#363F5F",
  textBody: "#969CB3",

  shape: "#FFFFFF",
};

type ThemeType = typeof DefaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
