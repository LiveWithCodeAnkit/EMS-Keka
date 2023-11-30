import React from "react";
import SidebarWithHeader from "../../components/Sidebar";


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SidebarWithHeader>
      <main>{children}</main>
    </SidebarWithHeader>
  );
};

export default Layout;
