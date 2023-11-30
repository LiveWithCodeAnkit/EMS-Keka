import { useToastMessages } from "../../common-hooks/useToastMessages";
import { userSchema } from "../schema/userSchema";

interface UserProfile {
  firstName: string;
  middleName: string;
  lastName: string;
  displayName: string;
  gender: string;
  dob: Date; 
  maritalStatus: string;
  bloodGroup: string;
  physicalStatus: string;
}

export interface UseProfileProps {
  onClose: () => void;
}

export const useProfile = ({ onClose }: UseProfileProps) => {
  const { Success } = useToastMessages();

  const initialValues: UserProfile = {
    firstName: "",
    middleName: "",
    lastName: "",
    displayName: "",
    gender: "",
    dob: new Date("2003-01-01"), 
    maritalStatus: "",
    bloodGroup: "",
    physicalStatus: "",
  };

  const handleProfile = (values: UserProfile) => {
    console.log("handle handleProfile function:=", values);
    Success("Profile Saved", "Info Update..");
    onClose();
  };

  return {
    initialValues,
    schema: userSchema,
    handleProfile,
  };
};
