import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Box, Button } from "@chakra-ui/react";
import { useProfile } from "../hook";
import { InputControl } from "@atoms/TextInput"; 
import { SelectControl } from "@atoms/Select";
import { bloodGroups } from "../constants/profileInfo";

const UserPrimaryForm = ({ onClose }) => {
  const { initialValues, schema, submit } = useProfile({ onClose });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Box
            as="div"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "full",
              gap: "1rem",
            }}
          >
            <InputControl
              label="First Name"
              name="firstName"
              control={control}
              initialValues={initialValues.firstName}
              errors={errors}
              placeholder="First name"
              type="text"
            />

            <InputControl
              label="Middle Name"
              name="middleName"
              control={control}
              initialValues={initialValues.middleName}
              errors={errors}
              placeholder="Middle name"
              type="text"
            />
          </Box>

          <Box
            as="div"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "full",
              gap: "1rem",
            }}
          >
            <InputControl
              label="Last Name"
              name="lastName"
              control={control}
              initialValues={initialValues.lastName}
              errors={errors}
              placeholder="Last Name"
              type="text"
            />

            <InputControl
              label="Display Name"
              name="displayName"
              control={control}
              initialValues={initialValues.displayName}
              errors={errors}
              placeholder="Display Name"
              type="text"
            />
          </Box>
          <Box
            as="div"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "full",
              gap: "1rem",
            }}
          >
            <SelectControl
              label="Gender"
              name="gender"
              control={control}
              defaultValue={initialValues.gender}
              options={[
                { value: "Male", label: "Male" },
                { value: "Female", label: "Female" },
                { value: "Other", label: "Other" },
              ]}
              errors={errors}
            />

            <InputControl
              label="Date Of Birth"
              name="dob"
              control={control}
              initialValues={initialValues.dob}
              errors={errors}
              type="date"
            />
          </Box>
          <Box
            as="div"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "full",
              gap: "1rem",
            }}
          >
            <SelectControl
              label="Marital Status"
              name="maritalStatus"
              control={control}
              defaultValue={initialValues.maritalStatus}
              options={[
                { value: "Married", label: "Married" },
                { value: "Single", label: "Single" },
              ]}
              errors={errors}
            />

            <SelectControl
              label="Blood Group"
              name="bloodGroup"
              control={control}
              defaultValue={initialValues.bloodGroup}
              options={bloodGroups.map((data) => ({
                value: data.bloodGroupName,
                label: data.bloodGroupName,
              }))}
              errors={errors}
            />
          </Box>
          <Box
            as="div"
            sx={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <SelectControl
              label="Physically Handicapped"
              name="physicalStatus"
              control={control}
              defaultValue={initialValues.physicalStatus}
              options={[
                { value: "Yes", label: "Yes" },
                { value: "No", label: "No" },
              ]}
              errors={errors}
            />
          </Box>
          <Box
            as="div"
            sx={{
              display: "flex",
              gap: "2rem",
              justifyContent: "end",
            }}
          >
            <Button type="submit">Update</Button>
            <Button onClick={onClose}>Close</Button>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default UserPrimaryForm;
