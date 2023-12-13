import { useToastMessages } from "@common-hooks/useToastMessages";
import { weeklyOffSchema } from "../schema";

interface Props {
  fromDate: Date;
  toDate: Date;
  reasonForWeeklyOff: string;
  notifyPersons: any[];
}

export const useWeeklyOff = () => {
  const { Success } = useToastMessages();
  const initialValues: Props = {
    fromDate: new Date(),
    toDate: new Date(),
    reasonForWeeklyOff: "",
    notifyPersons: [],
  };

  const handleWeeklyOffRequest = async (values: Props) => {
    console.log("handle Weekly Off Request:=", values);
    Success(
      "Weekly Off Request Application send",
      "Weekly Off Request  Sending"
    );
  };
  return {
    initialValues,
    schema: weeklyOffSchema,
    submit:handleWeeklyOffRequest,
  };
};
