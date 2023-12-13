import { useRouter } from "next/router";
import { commonSchema } from "../schema";
import { useToastMessages } from "@common-hooks/useToastMessages";

interface Props {
  email: string;
}
export const useForgotPassword = () => {
  const { Success } = useToastMessages();
  const router = useRouter();
  const initialValues: Props = {
    email: "",
  };

  const handleSubmit = async (values: Props) => {
    const { email } = values;
    console.log("i am forgotpage page ", values);
    await Success("Check Mail", "Loading...");

    router.push("/login");
  };

  return {
    initialValues,
    schema: commonSchema,
    submit: handleSubmit,
  };
};
