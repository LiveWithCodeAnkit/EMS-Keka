import * as Yup from "yup";
import { commonSchema } from "./commonSchema";

export const compensatorySchema = commonSchema.concat(
  Yup.object().shape({
    dateRange: Yup.array()
      .min(1, "Select at least one date")
      .required("Required"),
  })
);
