import { timesheetSchema } from "../schema";
import { useToastMessages } from "@common-hooks/useToastMessages";

interface Project {
  projectName: string;
  description: string;
  projectSubTask: string;
  workingTime: number;
}

interface TimesheetData {
  projects: Project[];
}
export const useTimesheet = ({ onClose }) => {
  const { Success } = useToastMessages();
  const initialValues: TimesheetData = {
    projects: [
      { projectName: "", description: "", projectSubTask: "", workingTime: 1 },
    ],
  };

  const handleTimesheetProject = async (values: any) => {
    console.log("Timesheet Request On Request:=", values);
    Success("Timesheet Request Application send", "Timesheet Request  Sending");
  };
  return {
    initialValues,
    schema: timesheetSchema,
    submit:handleTimesheetProject,
  };
};
