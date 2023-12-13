import * as Yup from "yup";

export const commonSchema = Yup.object().shape({
  leaveNote: Yup.string()
    .required("Description required")
    .min(50, "Description must be at least 50 characters long"),
});
