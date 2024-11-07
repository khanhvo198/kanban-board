import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Link, Stack, Text } from "@chakra-ui/react";

export default function Login() {
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
        <Heading textAlign="center">Login to your account</Heading>
        <Stack spacing={5} mt="2rem">
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input borderColor="#868686" />
          </FormControl>

          <FormControl>
            <Flex justifyContent="space-between">
              <FormLabel>Password</FormLabel>
              <Link color="#1570EF" href="#">Forgot ?</Link>
            </Flex>
            <Input type="password" borderColor="#868686" />
          </FormControl>
          <Button colorScheme="blue" mt="1rem">Login</Button>
          <Text textAlign="center">Don't have an account? <Link color="#1570EF" href="/register">Register</Link></Text>
        </Stack>

      </Box>
    </Box>
  )


}
