import { useToastMessages } from "@common-hooks/useToastMessages";
import { partialDaySchema } from "../schema";

interface Props {
  datePartial: string;
  typeofProblem: string;
  comeLateMinti: number; // Corrected property name
  lateResone: string;
  notifyPersons: any[]; // Corrected property name
}

export const usePartialDay = () => {
  const { Success } = useToastMessages();
  const initialValues: Props = {
    datePartial: "",
    typeofProblem: "",
    comeLateMinti: 0,
    lateResone: "",
    notifyPersons: [],
  };
  

  const handlePartialDayRequest = async (values: Props) => {
    console.log("handle Partial DayRequest function:=", values);
    Success(
      "Partial Day Request Application send",
      "Partial Day Request  Sending"
    );
  };
  return {
    initialValues,
    schema: partialDaySchema,
    submit: handlePartialDayRequest,
  };
};
