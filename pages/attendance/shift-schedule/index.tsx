import React from "react";
import Attendancelayout from "../../../components/my-attendance/attendance-layout/Attendancelayout";
import LeaveLayout from "../../../components/leave/layout/LeaveLayout";
import AttendanceNavbar from "../../../components/my-attendance/attendance-navbar/AttendanceNavbar";
import ShiftSchedule from "../../../components/my-attendance/shift-schedule/ShiftSchedule";

const ShiftSchedulePage = () => {
   
  return (
    <>
      <LeaveLayout>
        <Attendancelayout />
        <AttendanceNavbar>
          <ShiftSchedule />
        </AttendanceNavbar>
      </LeaveLayout>
    </>
  );
};

export default ShiftSchedulePage;
