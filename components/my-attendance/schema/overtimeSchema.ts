import * as Yup from "yup";
import { commonSchema } from "./commonSchema";

export const overtimeSchema = commonSchema.concat(
  Yup.object().shape({
    descriptionOfOvertime: Yup.string().required("Description  required"),
    otTotalTime: Yup.number()
    .typeError("Overtime must be a valid number")
    .required("Overtime is required")
    .positive("Overtime must be a positive number")
    .min(1.0, "Overtime must be at least 1.0")
   
  })
);
