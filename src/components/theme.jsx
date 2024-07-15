import { extendTheme, theme as defaultTheme } from "@chakra-ui/react";
// import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  styles: {
    global: () => ({
      html: {
        scrollBehavior: "smooth",
      },
    }),
  },
};

const theme = extendTheme({
  config,
  ...defaultTheme,
});

export default theme;
