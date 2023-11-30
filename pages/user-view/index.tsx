import React from "react";
import InnerLayout from "../layout/InnerLayout";
import UserForm from "../../components/profile/user_profile_form/UserForm";

const UserView = () => {
  return (
    <>
      <InnerLayout>
        <UserForm />
      </InnerLayout>
    </>
  );
};

export default UserView;
