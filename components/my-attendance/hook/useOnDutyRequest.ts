import { onDutySchema } from "../schema";
import { useToastMessages } from "@common-hooks/useToastMessages";

interface Props {
  fromDate?: Date;
  toDate?: Date;
  reasonForOnDuty?: string;
  notifyPersons?: any[];
}
export const useOnDutyRequest = () => {
  const { Success } = useToastMessages();
  const initialValues: Props = {
    fromDate: new Date(),
    toDate: new Date(),
    reasonForOnDuty: "",
    notifyPersons: [], // Change this line
  };
  
  
  const handleDutyOnRequest = async (values: Props) => {
    console.log("handle Duty On Request:=", values);
    Success("Duty On Request Application send", "Duty On Request  Sending");
  };
  return {
    initialValues,
    schema: onDutySchema,
    submit: handleDutyOnRequest,
  };
};
