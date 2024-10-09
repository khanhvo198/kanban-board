import { extendTheme } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools"


const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const styles = {
  global: (props: StyleFunctionProps) => ({
    bg: mode('gray.800', 'whiteAlpha.900')(props)
  })
}


const theme = extendTheme({
  config, styles
});

export default theme
