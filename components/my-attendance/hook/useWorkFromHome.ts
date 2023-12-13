import React from "react";
import { useToastMessages } from "@common-hooks/useToastMessages";
import { workFromSchema } from "../schema";

interface Props {
  fromDate: Date;
  toDate: Date;
  typeOfSession: string;
  reasonForWorkHome: string;
  notifyPersons: any[];
}

export interface UseWorkFromProps {
  onClose: () => void;
}
export const useWorkFromHome = ({ onClose }: UseWorkFromProps) => {
  const [selectedButton, setSelectedButton] = React.useState(0);
  const { Success } = useToastMessages();
  const initialValues: Props = {
    fromDate: new Date(),
    toDate: new Date(),
    typeOfSession: "",
    reasonForWorkHome: "",
    notifyPersons: [],
  };
  const handleWorkHomeRequest = async (values: Props) => {
    console.log("handle WorkHome function:=", values);
    Success("Work From Home Application send", "Application  Sending");
    onClose();
  };
  return {
    initialValues,
    schema: workFromSchema,
    submit: handleWorkHomeRequest,
    selectedButton,
    setSelectedButton,
  };
};
