import { AsyncThunkAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useToastMessages } from "@common-hooks/useToastMessages";
import { userContactSchema } from "../schema";
import { UseProfileProps } from "./useProfile";
import { createProfileContact } from "@store/slices/userContactSlice";

interface Props {
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
  const { reset } = useForm();
  const dispatch = useDispatch();

  const initialValues: Props = {
    workEmail: "",
    personalEmail: "",
    workPhone: "",
    mobilePhone: "",
    residencePhone: "",
    skypeNumber: "",
    linkedinUrl: "",
  };

  const handleContact = async (values: Props) => {
    // console.log("handle handleContact function:=", values);
    // Success("handleContact Saved", "Info Update..");
    // onClose();
    // @ts-ignore
    // dispatch(addContact(values));

    //new

    try {
      // @ts-ignore
      const action: AsyncThunkAction<Props, { data: Props }, any> =
        createProfileContact(values);
      // @ts-ignore
      const result = await dispatch(action);
      console.log("data:-", result);
      if (createProfileContact.fulfilled.match(result)) {
        Success("Profile Conatct Saved", "Info Update..");
        reset();
        onClose();
      }
    } catch (error) {
      console.log(error);
    }

    //new
  };

  return {
    initialValues,
    schema: userContactSchema,
    submit: handleContact,
  };
};
