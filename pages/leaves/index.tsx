import React from "react";
import LeaveLayout from "../../components/leave/layout/LeaveLayout";
import LeaveSubMenu from "../../components/leave/navbar/LeaveSubMenu";
import PendingLeaveRequest from "../../components/leave/pending-leave-request/PendingLeaveRequest";
import LeaveStatus from "../../components/leave/leave-status/LeaveStatus";

const LeavePage = () => {
  return (
    <>
      <LeaveLayout>
        <LeaveSubMenu>
          <PendingLeaveRequest />
          <LeaveStatus />
        </LeaveSubMenu>
      </LeaveLayout>
    </>
  );
};

export default LeavePage;
