import React from "react";
import InnerLayout from "../../layout/InnerLayout";
import DocumentSidebar from "../../../components/documents/document-sidebar/DocumentSidebar";
interface LayoutProps {
  children: React.ReactNode;
}

const DocumentLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <InnerLayout>
        <DocumentSidebar>
          <main>{children}</main>
        </DocumentSidebar>
      </InnerLayout>
    </>
  );
};

export default DocumentLayout;
