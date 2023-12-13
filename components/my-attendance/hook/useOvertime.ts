import { overtimeSchema } from "../schema";
import { useToastMessages } from "@common-hooks/useToastMessages";

interface Props {
  fromDate: Date;
  toDate: Date;
  descriptionOfOvertime: string;
  otTotalTime: number;
  notifyPersons?: any[];
}

export const useOvertime = () => {
  const { Success } = useToastMessages();

  const initialValues: Props = {
    fromDate: new Date(),
    toDate: new Date(),
    descriptionOfOvertime: "",
    otTotalTime: 0.0,
    notifyPersons: [],
  };
  
  const handleOvertineRequest = async (values: Props) => {
    console.log("handle Overtine Request:=", values);
    Success("Overtine RequestApplication send", "Overtine Request Sending");
  };

  return {
    initialValues,
    schema: overtimeSchema,
    submit:handleOvertineRequest,
  };
};
