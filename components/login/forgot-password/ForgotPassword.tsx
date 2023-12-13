import { yupResolver } from "@hookform/resolvers/yup";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Logo } from "../Logo";
import { InputControl } from "components/atoms/TextInput";
import { DarkModeSwitch } from "components/DarkModeSwitch";
import { useForgotPassword } from "../hook";

const ForgotPassword = () => {
  const { initialValues, schema, submit } = useForgotPassword();
  const { handleSubmit, control, formState } = useForm({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;
  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <Container
          maxW="lg"
          py={{ base: "12", md: "24" }}
          px={{ base: "0", sm: "8" }}
        >
          <DarkModeSwitch
            sx={{ position: "fixed", top: "1rem", right: "1rem" }}
          />
          <Stack spacing="8">
            <Stack spacing="6">
              <Logo />
              <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
                <Heading size={{ base: "xs", md: "sm" }}>
                  Log in to your account
                </Heading>
                <Text color="fg.muted">
                  Do you have an account?
                  <Link as={NextLink} href="/login">
                    Sign In
                  </Link>
                </Text>
              </Stack>
            </Stack>
            <Box
              py={{ base: "0", sm: "8" }}
              px={{ base: "4", sm: "10" }}
              bg={{ base: "transparent", sm: "bg.surface" }}
              boxShadow={{ base: "none", sm: "md" }}
              borderRadius={{ base: "none", sm: "xl" }}
            >
              <Stack spacing="6">
                <Stack spacing="5">
                  <InputControl
                    label="Username"
                    name="email"
                    control={control}
                    initialValues={initialValues.email}
                    errors={errors}
                  />
                </Stack>
                <Stack spacing="6">
                  <Button type="submit">Forgot password</Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </form>
    </>
  );
};

export default ForgotPassword;
