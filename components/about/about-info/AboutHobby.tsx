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


const AboutHobby = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { handleAboutHobby } = useAbout();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  return (
    <>
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
          <Text fontWeight="semibold">What About Your hobby ?</Text>
          <FiEdit
            onClick={onToggle}
            onMouseOver={(e) => (e.currentTarget.style.cursor = "pointer")}
          />
        </Box>

        {!isOpen && (
          <Text noOfLines={[1, 2, 3]}>
            The quick brown fox jumps over the lazy dog" is an The quick brown
            fox jumps over the lazy dog" is an The quick brown fox jumps over
          </Text>
        )}
        <Collapse in={isOpen} animateOpacity>
          <form onSubmit={handleSubmit(handleAboutHobby)}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <FormControl isInvalid={!!errors.aboutHobby}>
                <Input
                  as={Textarea}
                  type="Textarea"
                  id="aboutHobby"
                  size="md"
                  placeholder=""
                  {...register("aboutHobby", {
                    required: "Hobby description required",
                    minLength: {
                      value: 20,
                      message:
                        "Hobby description must be at least 20 characters long",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.aboutHobby &&
                    typeof errors.aboutHobby === "object" && (
                      <span>{(errors.aboutHobby as FieldError).message}</span>
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

export default AboutHobby;
