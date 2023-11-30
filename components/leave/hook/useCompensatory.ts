import { UseLeaveProps } from "./useLeave";
import { compensatorySchema } from "../schema/leaveSchema";
import { useToastMessages } from "../../common-hooks/useToastMessages";

interface LeaveProps {
    dateRange: string;
    leaveNote: string;
  }
  

export const useCompensatory = ({ onClose }: UseLeaveProps) => {
  const { Success } = useToastMessages();
  const initialValues: LeaveProps = {
    dateRange: "",
    leaveNote: "",
  };

  const handleCompensatoryLeave = (values: LeaveProps) => {
    console.log("handle CompensatoryLeave function:=", values);
    Success("CompensatoryLeave Application send", "Application  Sending");
    onClose();
  };
  return {
    initialValues,
    schema: compensatorySchema,
    handleCompensatoryLeave,
  };
};
