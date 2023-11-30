import React from "react";
import LeaveLayout from "../../../components/leave/layout/LeaveLayout";
import Attendancelayout from "../../../components/my-attendance/attendance-layout/Attendancelayout";
import AttendanceNavbar from "../../../components/my-attendance/attendance-navbar/AttendanceNavbar";
import ShiftWeeklyOffLog from "../../../components/my-attendance/shift-weekly-off-request/ShiftWeeklyOffLog";

const ShiftWeeklyOffPage = () => {
  return (
    <>
      <LeaveLayout>
        <Attendancelayout />
        <AttendanceNavbar>
          <ShiftWeeklyOffLog />
        </AttendanceNavbar>
      </LeaveLayout>
    </>
  );
};

export default ShiftWeeklyOffPage;
