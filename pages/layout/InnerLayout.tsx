import React from "react";
import SidebarWithHeader from "../../components/Sidebar";
import UserProfile from "../../components/profile/UserProfile";

interface LayoutProps {
  children: React.ReactNode;
}

const InnerLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SidebarWithHeader>
      <UserProfile>
        <main>{children}</main>
      </UserProfile>
    </SidebarWithHeader>
  );
};

export default InnerLayout;
