import * as Yup from "yup";

export const userSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name required")
    .matches(/^[A-Za-z ]*$/, "Please enter valid name"),
  middleName: Yup.string().matches(
    /^[A-Za-z ]*$/,
    "Please enter valid middle name"
  ),
  lastName: Yup.string()
    .required("Last name required")
    .matches(/^[A-Za-z ]*$/, "Please enter valid last Name"),
  displayName: Yup.string().required("Display name required"),
  gender: Yup.string().required("Choose the gender"),
  dob: Yup.string().required("Date of birth required").nullable(),
  maritalStatus: Yup.string().required("Select marital status"),
  bloodGroup: Yup.string().required("Select blood group"),
  physicalStatus: Yup.string().required("Select physical status"),
});
