import { useToastMessages } from "@common-hooks/useToastMessages";
import { leaveSchema } from "../schema";
interface LeaveProps {
  fromDate: Date;
  toDate: Date;
  typeOfLeave: string;
  reasonForLeave: string;
  notifyPersons: any[]; // Adjust the type if necessary
  customFromDateStatus: string;
  customToDateStatus: string;
}

export interface UseLeaveProps {
  onClose: () => void;
}

export const useLeave = ({ onClose }: UseLeaveProps) => {
  const { Success } = useToastMessages();
  const initialValues: LeaveProps = {
    fromDate: new Date(),
    toDate: new Date(),
    typeOfLeave: "",
    reasonForLeave: "",
    notifyPersons: [], 
    customFromDateStatus: "",
    customToDateStatus: "",
  };

  const handleLeave = async (values: LeaveProps) => {
    console.log("handle leave function:=", values);
    Success("Leave Application send", "Application  Sending");
    onClose();
  };

  return {
    initialValues,
    schema: leaveSchema,
    submit: handleLeave,
  };
};
