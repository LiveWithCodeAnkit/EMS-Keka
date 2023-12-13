import { yupResolver } from "@hookform/resolvers/yup";
import NextLink from "next/link";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { useSignIn } from "./hook";
import { PasswordField } from "./PasswordField";
import { OAuthButtonGroup } from "./OAuthButtonGroup";
import { InputControl } from "components/atoms/TextInput";
import { DarkModeSwitch } from "components/DarkModeSwitch";

const Login = () => {
  const { initialValues, schema, submit } = useSignIn();
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
                  Don't have an account? <Link href="#">Sign up</Link>
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
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <PasswordField
                        {...field}
                        value={field.value || ""}
                        isInvalid={!!errors.password}
                        errorMessage={
                          errors.password && errors.password.message
                        }
                      />
                    )}
                  />
                </Stack>
                <HStack justify="space-between">
                  <Checkbox defaultChecked>Remember me</Checkbox>
                  <Link as={NextLink} fontWeight="semibold" href="/forgot-password">
                    Forgot password?
                  </Link>
                </HStack>
                <Stack spacing="6">
                  <Button type="submit">Sign in</Button>
                  <HStack>
                    <Divider />
                    <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                      or continue with
                    </Text>
                    <Divider />
                  </HStack>
                  <OAuthButtonGroup />
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </form>
    </>
  );
};

export default Login;
