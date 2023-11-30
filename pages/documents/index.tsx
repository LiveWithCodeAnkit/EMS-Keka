import React from "react";
import DocumentLayout from "./laybout/DocumentLayout";
import IdentityDoc from "../../components/documents/identity-doc/IdentityDoc";

const DocumentPage = () => {
  return (
    <>
      <DocumentLayout>
        <IdentityDoc />
      </DocumentLayout>
    </>
  );
};

export default DocumentPage;
