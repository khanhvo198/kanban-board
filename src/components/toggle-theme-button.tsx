import { Icon, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { AnimatePresence } from "framer-motion"
import { CiDark, CiLight } from "react-icons/ci"
import { motion } from "framer-motion"


export const ToggleThemeButton = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
        key={useColorModeValue('light', 'dark')}
      >
        <Icon
          as={useColorModeValue(CiDark, CiLight)}
          fontSize={26}
          onClick={toggleColorMode}
          display="flex"
          alignItems="center"
          mr={2}
          color={useColorModeValue('#787486', 'white')}
          strokeWidth="0.7"
          strokeMiterlimit="10"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeOpacity="0.5"
          _hover={{ cursor: 'pointer' }}
        />
      </motion.div>
    </AnimatePresence>
  )
}
