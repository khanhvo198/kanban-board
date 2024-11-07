import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Link, Stack, Text } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

export default function Register() {
  return (
    <Box
      bgImg={"assets/images/bg.png"}
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
        <Heading textAlign="center">Register</Heading>
        <Stack spacing={5} mt="2rem">
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input borderColor="#868686" />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" borderColor="#868686" />
          </FormControl>

          <FormControl>
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" borderColor="#868686" />
          </FormControl>


          <Button colorScheme="blue" mt="1rem">Register</Button>
        </Stack>
        <Stack mt="0.5rem">
          <Button leftIcon={<FcGoogle size="24px" />} width="100%">Continue with Google</Button>
        </Stack>

      </Box>
    </Box>

  )
}
