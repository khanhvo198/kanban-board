import { Box } from "@chakra-ui/react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      bgImg={"/assets/images/bg.png"}
      h="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="#fff"
    >

      <Box
        borderRadius="5px"
        backdropFilter="blur(10px)"
        p="24px"
        width={{ base: "80%", md: "50%", lg: "30%" }}
      >
        {children}
      </Box>
    </Box>
  )
}
