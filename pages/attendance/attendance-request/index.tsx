import React from "react";
import LeaveLayout from "../../../components/leave/layout/LeaveLayout";
import Attendancelayout from "../../../components/my-attendance/attendance-layout/Attendancelayout";
import AttendanceNavbar from "../../../components/my-attendance/attendance-navbar/AttendanceNavbar";
import AttendanceRequest from "../../../components/my-attendance/attendance-request/AttendanceRequest";

const AttendanceRequestPage = () => {
  return (
    <>
      <LeaveLayout>
        <Attendancelayout />
        <AttendanceNavbar>
          <AttendanceRequest />
        </AttendanceNavbar>
      </LeaveLayout>
    </>
  );
};

export default AttendanceRequestPage;
