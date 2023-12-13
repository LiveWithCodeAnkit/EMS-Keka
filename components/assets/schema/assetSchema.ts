import * as Yup from "yup";

export const assetSchema = Yup.object().shape({
  assetName: Yup.string().required("Select asset"),
  requirementNote: Yup.string()
    .required("Requirements description required")
    .min(50, "Description must be at least 50 characters long"),
});
