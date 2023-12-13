import { assetSchema } from "../schema";
import { useToastMessages } from "@common-hooks/useToastMessages";

interface Props {
  assetName: string;
  requirementNote: string;
}
export const useAsset = () => {
  const { Success } = useToastMessages();

  const initialValues: Props = {
    assetName: "",
    requirementNote: "",
  };

  const handleReplaceAsset = (values: Props) => {
    console.log("Replace Asset will uploaded sucessfully");
    console.log("Replace Asset Document :=", values);
    Success("Replace Asset Uploaded", "Replace Asset  Uploading..");
  };
  
  return {
    initialValues,
    schema: assetSchema,
    submit: handleReplaceAsset,
  };
};
