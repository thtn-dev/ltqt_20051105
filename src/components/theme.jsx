import { extendTheme, theme as defaultTheme } from "@chakra-ui/react";
// import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  ...defaultTheme,
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
    },
  },
});

export default theme;
