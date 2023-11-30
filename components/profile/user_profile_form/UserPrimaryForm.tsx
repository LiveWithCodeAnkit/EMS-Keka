import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useProfile } from "../hook/useProfile";

const UserPrimaryForm = ({ onClose }) => {
  const { initialValues, schema, handleProfile } = useProfile({ onClose });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <>
      <form onSubmit={handleSubmit(handleProfile)}>
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
            <FormControl isInvalid={!!errors.firstName}>
              <FormLabel>First Name</FormLabel>
              <Controller
                name="firstName"
                control={control}
                defaultValue={initialValues.firstName}
                render={({ field }) => (
                  <Input {...field} placeholder="First name" />
                )}
              />
              <FormErrorMessage>
                {errors.firstName && errors.firstName.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.middleName}>
              <FormLabel>Middle Name</FormLabel>
              <Controller
                name="middleName"
                control={control}
                defaultValue={initialValues.middleName}
                render={({ field }) => (
                  <Input {...field} placeholder="Middle name" />
                )}
              />
              <FormErrorMessage>
                {errors.middleName && errors.middleName.message}
              </FormErrorMessage>
            </FormControl>
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
            <FormControl isInvalid={!!errors.lastName}>
              <FormLabel>Last Name</FormLabel>
              <Controller
                name="lastName"
                control={control}
                defaultValue={initialValues.lastName}
                render={({ field }) => (
                  <Input {...field} placeholder="Last name" />
                )}
              />
              <FormErrorMessage>
                {errors.lastName && errors.lastName.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.displayName}>
              <FormLabel>Display Name</FormLabel>
              <Controller
                name="displayName"
                control={control}
                defaultValue={initialValues.displayName}
                render={({ field }) => (
                  <Input {...field} placeholder="Display name" />
                )}
              />
              <FormErrorMessage>
                {errors.displayName && errors.displayName.message}
              </FormErrorMessage>
            </FormControl>
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
            <FormControl isInvalid={!!errors.gender}>
              <FormLabel>Gender</FormLabel>
              <Controller
                name="gender"
                control={control}
                defaultValue={initialValues.gender}
                render={({ field }) => (
                  <Select {...field} placeholder="Select">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Select>
                )}
              />
              <FormErrorMessage>
                {errors.gender && errors.gender.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.dob}>
              <FormLabel>Date Of Birth</FormLabel>
              <Controller
                name="dob"
                control={control}
                defaultValue={initialValues.dob}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="date"
                    placeholder=""
                    value={
                      field.value instanceof Date
                        ? field.value.toISOString().split("T")[0]
                        : field.value
                    }
                  />
                )}
              />
              <FormErrorMessage>
                {errors.dob && errors.dob.message}
              </FormErrorMessage>
            </FormControl>
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
            <FormControl isInvalid={!!errors.maritalStatus}>
              <FormLabel>Marital Status</FormLabel>

              <Controller
                name="maritalStatus"
                control={control}
                defaultValue={initialValues.maritalStatus}
                render={({ field }) => (
                  <Select {...field} placeholder="Select">
                    <option value="Married">Married</option>
                    <option value="Single">Single</option>
                  </Select>
                )}
              />

              <FormErrorMessage>
                {errors.maritalStatus && errors.maritalStatus.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.bloodGroup}>
              <FormLabel>Blood Group</FormLabel>
              <Controller
                name="bloodGroup"
                control={control}
                defaultValue={initialValues.bloodGroup}
                render={({ field }) => (
                  <Select {...field} placeholder="Select">
                    <option value="AB+">AB+</option>
                    <option value="B+">B+</option>
                  </Select>
                )}
              />
              <FormErrorMessage>
                {errors.bloodGroup && errors.bloodGroup.message}
              </FormErrorMessage>
            </FormControl>
          </Box>
          <Box
            as="div"
            sx={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <FormControl w="50%" isInvalid={!!errors.physicalStatus}>
              <FormLabel>Physically Handicapped</FormLabel>
              <Controller
                name="physicalStatus"
                control={control}
                defaultValue={initialValues.physicalStatus}
                render={({ field }) => (
                  <Select {...field} placeholder="Select">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Select>
                )}
              />
              <FormErrorMessage>
                {errors.physicalStatus && errors.physicalStatus.message}
              </FormErrorMessage>
            </FormControl>
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
