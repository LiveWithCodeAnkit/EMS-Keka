import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { userSchema } from "../schema";
import { createProfile } from "@store/slices/userSlice";
import { useToastMessages } from "@common-hooks/useToastMessages";

interface Props {
  firstName: string;
  middleName: string;
  lastName: string;
  displayName: string;
  gender: string;
  dob: string;
  maritalStatus: string;
  bloodGroup: string;
  physicalStatus: string;
}

export interface UseProfileProps {
  onClose: () => void;
}

export const useProfile = ({ onClose }: UseProfileProps) => {
  const form = useForm();
  const dispatch = useDispatch();
  const userProfile = useSelector((state: { user: Props }) => state.user);

  const { Success } = useToastMessages();

  const initialValues: Props & { isLoading?: boolean } = {
    firstName: "",
    middleName: "",
    lastName: "",
    displayName: "",
    gender: "",
    dob: "",
    maritalStatus: "",
    bloodGroup: "",
    physicalStatus: "",
   
  };

  const handleProfile = async (values: Props) => {
    try {
      const action = createProfile({
        ...values,
        isLoading: true,
      }) as ReturnType<typeof createProfile>;
      // @ts-ignore
      const resultAction = await dispatch(action);
      console.log(resultAction);

      if (createProfile.fulfilled.match(resultAction)) {
        Success("Profile Saved", "Info Update..");
        form.reset();
        onClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    initialValues,
    schema: userSchema,
    submit: handleProfile,
  };
};
