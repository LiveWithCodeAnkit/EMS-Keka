import * as Yup from "yup";
import { commonSchema } from "./commonSchema";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const signInSchema = commonSchema.concat(
  Yup.object().shape({
    password: Yup.string()
      .matches(passwordRules, {
        message: "Please create a stronger password !",
      })
      .required("Password Required !"),
  })
);
