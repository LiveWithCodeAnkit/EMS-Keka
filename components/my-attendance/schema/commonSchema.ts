import * as Yup from "yup";

export const commonSchema = Yup.object().shape({
  fromDate: Yup.date()
    .required("From date is required")
    .min(new Date(), "Invalid date"),
  toDate: Yup.date()
    .required("To date is required")
    .min(new Date(), "Invalid date"),
  notifyPersons: Yup.array()
    .min(1, "Notify persons  must have at least 1 person")
    .required("Required"),
});