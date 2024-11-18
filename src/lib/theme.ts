import { extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode("#fff", "#000")(props),
    },
  }),
};

const components = {
  Button: {
    baseStyle: {
      _focus: {
        boxShadow: "none",
      },
    },
  },
};

const theme = extendTheme({
  config,
  styles,
  components,
});

export default theme;
