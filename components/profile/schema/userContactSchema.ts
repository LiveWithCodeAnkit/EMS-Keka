import * as Yup from "yup";

const emailRules = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/;
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const userContactSchema = Yup.object().shape({
  workEmail: Yup.string()
    .required("Email required")
    .matches(emailRules, { message: "Not valid email" }),

  personalEmail: Yup.string().required("Email required").matches(emailRules, {
    message: "Not valid Email",
  }),
  workPhone: Yup.string()
    .required("Work phone required")
    .matches(phoneRegExp, "Work phone number is not valid")
    .min(10, "Work phone number must be at least 10 characters"),

  mobilePhone: Yup.string()
    .required("Mobile phone required")
    .matches(phoneRegExp, "Mobile phone number is not valid")
    .min(10, "Mobile phone number must be at least 10 characters"),

  residencePhone: Yup.string()
    .required("Residence phone required")
    .matches(phoneRegExp, "Residence phone number is not valid")
    .min(10, "Residence phone number must be at least 10 characters"),
  skypeNumber: Yup.string()
    .required("Skype number required")
    .matches(phoneRegExp, "Skype number  is not valid")
    .min(10, "Skype number must be at least 10 characters"),
  linkedinUrl: Yup.string().url(),
});
