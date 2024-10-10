import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"
import type { StyleFunctionProps } from "@chakra-ui/styled-system"

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode("#fff", '#000')(props)
    }
  })
}


const theme = extendTheme({
  config, styles
});

export default theme
