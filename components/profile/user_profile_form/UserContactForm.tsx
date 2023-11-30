import React from "react";
import { GrPhone } from "react-icons/gr";
import { BiMobile } from "react-icons/bi";
import { AiOutlineSkype } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useProfileContact } from "../hook/useProfileContact";

const UserContactForm = ({ onClose }) => {
  const { initialValues, schema, handleContact } = useProfileContact({
    onClose,
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <>
      <form onSubmit={handleSubmit(handleContact)}>
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
            <FormControl isInvalid={!!errors.workEmail}>
              <FormLabel>Work Email</FormLabel>
              <Controller
                name="workEmail"
                control={control}
                defaultValue={initialValues.workEmail}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="xyz@gmail.com"
                    name="workEmail"
                  />
                )}
              />
              <FormErrorMessage>
                {errors.workEmail && errors.workEmail.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.personalEmail}>
              <FormLabel>Personal Email</FormLabel>

              <Controller
                name="personalEmail"
                control={control}
                defaultValue={initialValues.personalEmail}
                render={({ field }) => (
                  <Input
                    {...field}
                    name="personalEmail"
                    placeholder="abc@gmail.com"
                  />
                )}
              />
              <FormErrorMessage>
                {errors.personalEmail && errors.personalEmail.message}
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
            <FormControl isInvalid={!!errors.workPhone}>
              <FormLabel>Work Phone</FormLabel>
              <Controller
                name="workPhone"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Icon as={GrPhone} color="gray.300" />
                    </InputLeftElement>
                    <Input
                      {...field}
                      name="workPhone"
                      type="tel"
                      placeholder="Work number"
                    />
                  </InputGroup>
                )}
              />
              <FormErrorMessage>
                {errors.workPhone && errors.workPhone.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.mobilePhone}>
              <FormLabel>Mobile Phone</FormLabel>

              <Controller
                name="mobilePhone"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Icon as={BiMobile} color="gray.300" />
                    </InputLeftElement>
                    <Input
                      {...field}
                      name="mobilePhone"
                      type="tel"
                      placeholder="Mobile number"
                    />
                  </InputGroup>
                )}
              />
              <FormErrorMessage>
                {errors.mobilePhone && errors.mobilePhone.message}
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
            <FormControl isInvalid={!!errors.residencePhone}>
              <FormLabel>Residence Phone</FormLabel>

              <Controller
                name="residencePhone"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Icon as={GrPhone} color="gray.300" />
                    </InputLeftElement>
                    <Input
                      {...field}
                      name="residencePhone"
                      type="tel"
                      placeholder="Residence number"
                    />
                  </InputGroup>
                )}
              />
              <FormErrorMessage>
                {errors.residencePhone && errors.residencePhone.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.skypeNumber}>
              <FormLabel>Skype</FormLabel>
              <Controller
                name="skypeNumber"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Icon as={AiOutlineSkype} color="gray.300" />
                    </InputLeftElement>
                    <Input
                      {...field}
                      name="skypeNumber"
                      type="tel"
                      placeholder="Skype number"
                    />
                  </InputGroup>
                )}
              />
              <FormErrorMessage>
                {errors.skypeNumber && errors.skypeNumber.message}
              </FormErrorMessage>
            </FormControl>
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
            <FormControl isInvalid={!!errors.linkedinUrl}>
              <FormLabel>Linkdin</FormLabel>

              <Controller
                name="linkedinUrl"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Icon as={FaLinkedinIn} color="gray.300" />
                    </InputLeftElement>
                    <Input
                      {...field}
                      name="linkedinUrl"
                      type="tel"
                      placeholder="Linkdin URL"
                    />
                  </InputGroup>
                )}
              />
              <FormErrorMessage>
                {errors.linkedinUrl && errors.linkedinUrl.message}
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

export default UserContactForm;
