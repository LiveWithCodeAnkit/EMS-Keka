import * as Yup from "yup";
const emailRules = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/;
export const commonSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email!")
    .required("Email Required !")
    .matches(emailRules, { message: " Not valid :{" }),
});
