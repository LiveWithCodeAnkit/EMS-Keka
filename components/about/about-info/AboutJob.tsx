import React from "react";
import { FieldError, useForm } from "react-hook-form";
import { FiEdit } from "react-icons/fi";
import {
  Box,
  Button,
  Collapse,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useAbout } from "../hook";

const AboutJob = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { handleAboutJob } = useAbout();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  return (
    <>
      {" "}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "full",
        }}
      >
        <Box
          as="div"
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Text fontWeight="semibold">What About Your Job ?</Text>
          <FiEdit
            onClick={onToggle}
            onMouseOver={(e) => (e.currentTarget.style.cursor = "pointer")}
          />
        </Box>
        {!isOpen && (
          <Text noOfLines={[1, 2, 3]}>
            The quick brown fox jumps over the lazy dog is an The quick the lazy
            dog is an
          </Text>
        )}
        <Collapse in={isOpen} animateOpacity>
          <form onSubmit={handleSubmit(handleAboutJob)}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <FormControl isInvalid={!!errors.aboutJob}>
                <Input
                  as={Textarea}
                  type="Textarea"
                  id="aboutJob"
                  size="md"
                  placeholder=""
                  {...register("aboutJob", {
                    required: "Job description required",
                    minLength: {
                      value: 50,
                      message:
                        "Job description must be at least 50 characters long",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.aboutJob && typeof errors.aboutJob === "object" && (
                    <span>{(errors.aboutJob as FieldError).message}</span>
                  )}
                </FormErrorMessage>
              </FormControl>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "end",
                  gap: "1rem",
                }}
              >
                <Button fontSize="18px" colorScheme="blue" type="submit">
                  save
                </Button>
                <Button fontSize="18px" onClick={onToggle}>
                  cancel
                </Button>
              </Box>
            </Box>
          </form>
        </Collapse>
      </Box>
    </>
  );
};
export default AboutJob;
