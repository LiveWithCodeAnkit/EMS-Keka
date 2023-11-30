import React from "react";
import LeaveLayout from "../../../components/leave/layout/LeaveLayout";
import Attendancelayout from "../../../components/my-attendance/attendance-layout/Attendancelayout";
import AttendanceNavbar from "../../../components/my-attendance/attendance-navbar/AttendanceNavbar";
import OvertimeRequest from "../../../components/my-attendance/over-time-request/OvertimeRequest";

const AttendanceRequestPage = () => {
  return (
    <>
      <LeaveLayout>
        <Attendancelayout />
        <AttendanceNavbar>
          <OvertimeRequest />
        </AttendanceNavbar>
      </LeaveLayout>
    </>
  );
};

export default AttendanceRequestPage;
