import { UseLeaveProps } from "./useLeave";
import { useToastMessages } from "@common-hooks/useToastMessages";
import { compensatorySchema } from "../schema";

interface LeaveProps {
  dateRange: Date[]; // Adjust the type to match the selectedDates type
  leaveNote: string;
}

export const useCompensatory = ({ onClose }: UseLeaveProps) => {
  const { Success } = useToastMessages();
  const initialValues: LeaveProps = {
    dateRange: [], // Initialize with an empty array
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
