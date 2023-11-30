import React from "react";
import LeaveLayout from "../../components/leave/layout/LeaveLayout";
import Attendancelayout from "../../components/my-attendance/attendance-layout/Attendancelayout";
import AttendanceNavbar from "../../components/my-attendance/attendance-navbar/AttendanceNavbar";
import AttendaceLog from "../../components/my-attendance/attendance-log/AttendaceLog";

const Attendance = () => {
  return (
    <>
      <LeaveLayout>
        <Attendancelayout />
        <AttendanceNavbar>
          <AttendaceLog />
        </AttendanceNavbar>
      </LeaveLayout>
    </>
  );
};

export default Attendance;
