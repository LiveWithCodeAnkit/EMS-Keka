import * as Yup from "yup";

export const leaveSchema = Yup.object().shape({
  fromDate: Yup.date()
    .required("From date is required")
    .min(new Date(), "Invalid date"),
  toDate: Yup.date()
    .required("To date is required")
    .min(new Date(), "Invalid date"),

  typeOfLeave: Yup.string().required("Select leave type"),
  reasonForLeave: Yup.string().required("Reason for leave required"),
  notifyPersons: Yup.array()
    .min(1, "Notify persons  must have at least 1 person")
    .required("Required"),
  customFromDateStatus: Yup.string(),
  customToDateStatus: Yup.string(),
});

export const commonSchema = Yup.object().shape({
  leaveNote: Yup.string()
    .required("Description required")
    .min(50, "Description must be at least 50 characters long"),
});

export const compensatorySchema = commonSchema.concat(
  Yup.object().shape({
    dateRange: Yup.array()
      .min(1, "Select at least one date")
      .required("Required"),
  })
);
