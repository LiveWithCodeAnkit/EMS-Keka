import { useToastMessages } from "../../common-hooks/useToastMessages";
import { userContactSchema } from "../schema/userContactSchema";
import { UseProfileProps } from "./useProfile";

interface UserProfileContact {
  workEmail: string;
  personalEmail: string;
  workPhone: string;
  mobilePhone: string;
  residencePhone: string;
  skypeNumber: string;
  linkedinUrl: string;
}



export const useProfileContact = ({ onClose }: UseProfileProps) => {
  const { Success } = useToastMessages();

  const initialValues: UserProfileContact = {
    workEmail: "",
    personalEmail: "",
    workPhone: "",
    mobilePhone: "",
    residencePhone: "",
    skypeNumber: "",
    linkedinUrl: "",
  };

  const handleContact = (values: UserProfileContact) => {
    console.log("handle handleContact function:=", values);
    Success("handleContact Saved", "Info Update..");
    onClose();
  };

  return {
    initialValues,
    schema: userContactSchema,
    handleContact,
  };
};
