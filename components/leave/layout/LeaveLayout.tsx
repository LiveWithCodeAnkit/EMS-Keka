import React from "react";
import SidebarWithHeader from "../../Sidebar";
import LeaveMenuBar from "../navbar/LeaveMenuBar";

interface LayoutProps {
  children: React.ReactNode;
}

const LeaveLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SidebarWithHeader>
      <LeaveMenuBar>
        <main>{children}</main>
      </LeaveMenuBar>
    </SidebarWithHeader>
  );
};

export default LeaveLayout;
