import * as Yup from "yup";

export const timesheetSchema = Yup.object().shape({
  projects: Yup.array().of(
    Yup.object().shape({
      project: Yup.string().required("Project Name is required"),
      projectSubTask: Yup.string().required("Sub task is required"),
      description: Yup.string().required("Description is required"),
      workingTime: Yup.number().required("Working Time is required"),
    })
  ),
});
