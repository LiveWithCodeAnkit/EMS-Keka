import * as Yup from "yup";

export const documentSchema = Yup.object().shape({
  documentImageUrl: Yup.string().required("Must upload document image"),
  documentNumber: Yup.string()
    .required("Document number required")
    .matches(
      /[A-Z]{5}[0-9]{4}[A-Z]{1}/,
      "Please enter a valid document number"
    ),
  personName: Yup.string().required("Name required as per document"),
  dob: Yup.date().required("Date of birth required").nullable(),
  parrentName: Yup.string().required("Parrent name required"),
  dateOfExpire: Yup.date().required("Expiry date required"),
});
