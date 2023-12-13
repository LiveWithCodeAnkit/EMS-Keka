import { UseLeaveProps } from "./useLeave";
import { useToastMessages } from "@common-hooks/useToastMessages";
import { commonSchema } from "../schema";

interface LeaveProps {
  empName: string;
  leaveType: string;
  leaveDate: string;
  numOfDays: number;
  leaveNote: string;
}

export const useCancelLeave = ({ onClose }: UseLeaveProps) => {
  const { Success } = useToastMessages();
  const initialValues: LeaveProps = {
    empName: "Gopi Nandan",
    leaveType: "Paid Leave",
    leaveDate: "02 Feb 2021",
    numOfDays: 2,
    leaveNote: "Travelling for Personal reasons",
  };

  const handleCancelLeave = (values: LeaveProps) => {
    console.log("handle CancelLeave function:=", values);
    Success(" Leave Application Cancel", "Application  Cancel");
    onClose();
  };
  return {
    initialValues,
    schema: commonSchema,
    submit:handleCancelLeave,
  };
};
