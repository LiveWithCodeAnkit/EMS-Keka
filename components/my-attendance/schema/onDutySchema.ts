import * as Yup from "yup";
import { commonSchema } from "./commonSchema";
export const onDutySchema = commonSchema.concat(
  Yup.object().shape({
    reasonForOnDuty: Yup.string().required(
      "Reason for on duty  required"
    ),
  })
);
