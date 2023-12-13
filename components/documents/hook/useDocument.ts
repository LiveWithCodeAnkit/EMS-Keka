import { useToastMessages } from "@common-hooks/useToastMessages";
import { documentSchema } from "../schema";

interface DocumentProps {
  documentImageUrl: string;
  documentNumber: string;
  personName: string;
  dob: Date;
  parrentName: string;
  dateOfExpire: Date;
}

interface UseDocumentProps {
  onClose: () => void;
}
export const useDocument = ({ onClose }: UseDocumentProps) => {
  const { Success } = useToastMessages();
  const initialValues: DocumentProps = {
    documentImageUrl: "",
    documentNumber: "",
    personName: "",
    dob: new Date(),
    parrentName: "",
    dateOfExpire: new Date(),
  };

  const handleDocument = (values: DocumentProps) => {
    console.log("Document will uploaded sucessfully");
    console.log("Handle Document :=", values);
    Success("Document Uploaded", "Document  Uploading..");
    onClose();
  };
  return {
    initialValues,
    schema: documentSchema,
    submit: handleDocument,
  };
};
