import React from "react";
import { GrPhone } from "react-icons/gr";
import { BiMobile } from "react-icons/bi";
import { AiOutlineSkype } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Box, Button } from "@chakra-ui/react";
import { useProfileContact } from "../hook";
import { InputGroupControl, InputControl } from "@atoms/TextInput";

const UserContactForm = ({ onClose }) => {
  const { initialValues, schema, submit } = useProfileContact({
    onClose,
  });

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
              label="Work Email"
              name="workEmail"
              control={control}
              initialValues={initialValues.workEmail}
              errors={errors}
              placeholder="xyz@gmail.com"
              type="text"
            />

            <InputControl
              label="Personal Email"
              name="personalEmail"
              control={control}
              initialValues={initialValues.personalEmail}
              errors={errors}
              placeholder="abc@gmail.com"
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
            <InputGroupControl
              label="Work Phone"
              name="workPhone"
              control={control}
              initialValues={initialValues.workPhone}
              errors={errors}
              placeholder="Work number"
              type="tel"
              icon={GrPhone}
            />

            <InputGroupControl
              label="Mobile Phone"
              name="mobilePhone"
              control={control}
              initialValues={initialValues.mobilePhone}
              errors={errors}
              placeholder="Mobile number"
              type="tel"
              icon={BiMobile}
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
            <InputGroupControl
              label="Residence Phone"
              name="residencePhone"
              control={control}
              initialValues={initialValues.residencePhone}
              errors={errors}
              placeholder="Residence number"
              type="tel"
              icon={GrPhone}
            />

            <InputGroupControl
              label="Skype"
              name="skypeNumber"
              control={control}
              initialValues={initialValues.skypeNumber}
              errors={errors}
              placeholder="Skype number"
              type="tel"
              icon={AiOutlineSkype}
            />
          </Box>
          <Box
            as="div"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "50%",
              gap: "1rem",
            }}
          >
            <InputGroupControl
              label="Linkdin"
              name="linkedinUrl"
              control={control}
              initialValues={initialValues.linkedinUrl}
              errors={errors}
              placeholder="Linkdin URL"
              type="tel"
              icon={FaLinkedinIn}
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

export default UserContactForm;
