import * as Yup from "yup";
import { commonSchema } from "./commonSchema";
export const weeklyOffSchema = commonSchema.concat(
  Yup.object().shape({
    reasonForWeeklyOff: Yup.string().required(
      "Reason for weekly off  required"
    ),
  })
);