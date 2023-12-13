import * as Yup from "yup";

export const partialDaySchema = Yup.object().shape({
  datePartial: Yup.string().required("Date string is required"),
  typeofProblem: Yup.string()
    .required("Type of problem is required")
    .oneOf(
      ["Late Arrival", "Leaving Early", "Intervening Time-off"],
      "Invalid type of problem"
    ),
  comeLateMinti: Yup.number()
    .typeError("Come late minutes must be a number")
    .required("Come late minutes is required")
    .positive("Come late minutes must be a positive number")
    .integer("Come late minutes must be an integer"),
  lateResone: Yup.string()
    .required("Late reason is required")
    .min(50, "Late reason must be at least 50 characters")
    .max(100, "Late reason must not exceed 100 characters"),
  notifyPersons: Yup.array()
    .min(1, "Notify persons  must have at least 1 person")
    .required("Required"),
});
