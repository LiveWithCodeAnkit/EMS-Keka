import { useRouter } from "next/router";
import { signInSchema } from "../schema";
import { useToastMessages } from "@common-hooks/useToastMessages";

interface Props {
  email: string;
  password: string;
}
export const useSignIn = () => {
  const { Success } = useToastMessages();
  const router = useRouter();
  const initialValues: Props = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: Props) => {
    const { email, password } = values;
    console.log("i am login page ", values);
    await Success("Login Sucessfull", "Loging...");

    router.push("/about");
  };

  return {
    initialValues,
    schema: signInSchema,
    submit: handleSubmit,
  };
};
