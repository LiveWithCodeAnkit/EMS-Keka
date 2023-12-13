import React from "react";
import Timesheet from "../../components/timesheet/Timesheet";
import LeaveLayout from "../../components/leave/layout/LeaveLayout";

const TimesheetPage = () => {
  return (
    <>
      <LeaveLayout>
        <Timesheet />
      </LeaveLayout>
    </>
  );
};

export default TimesheetPage;
