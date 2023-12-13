import * as Yup from "yup";
import { commonSchema } from "./commonSchema";
export const workFromSchema = commonSchema.concat(
  Yup.object().shape({
    typeOfSession: Yup.string().required("Required"),
    reasonForWorkHome: Yup.string().required(
      "Reason for work from home required"
    ),
  })
);
