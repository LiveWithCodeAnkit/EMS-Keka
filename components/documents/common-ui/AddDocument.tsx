import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { AiFillDelete, AiFillCamera } from "react-icons/ai";
import { BsPaperclip } from "react-icons/bs";
import ImageUploader, {
  FileObjectType as FileUploaderProps,
} from "react-image-upload";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useDocument } from "../hook/useDocument";

const AddDocument = ({ tittle, onClose }) => {
  const { initialValues, schema, handleDocument } = useDocument({ onClose });
  const { handleSubmit, control, formState } = useForm({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [images, setImages] = useState(false);

  function getImageFileObject(imageFile: FileUploaderProps) {
    setImages(true);
  }
  function runAfterImageDelete(file: FileUploaderProps) {
    setImages(false);
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleDocument)}>
        <Box
          as="div"
          sx={{
            display: "flex",
            justifyContent: "start",
            gap: "1rem",
            w: "full",
          }}
        >
          <Box>
            <FormControl isInvalid={!!errors.documentImageUrl}>
              <Controller
                name="documentImageUrl"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                  <ImageUploader
                    style={{
                      height: 500,
                      width: 500,
                      background: isDark ? "#2d3748" : "#FAF9F6",
                      border: "1px solid white",
                    }}
                    deleteIcon={
                      images ? (
                        <AiFillDelete
                          style={{ fontSize: "30px", color: "#0096FF" }}
                        />
                      ) : (
                        <></>
                      )
                    }
                    uploadIcon={
                      !images ? (
                        <AiFillCamera
                          style={{ fontSize: "40px", color: "#0096FF" }}
                        />
                      ) : (
                        <></>
                      )
                    }
                    onFileAdded={(img) => {
                      getImageFileObject(img);
                      const dataUrl = img?.dataUrl;
                      field.onChange(dataUrl);
                    }}
                    onFileRemoved={(img) => {
                      runAfterImageDelete(img);
                      field.onChange(null);
                    }}
                  />
                )}
              />
              <FormErrorMessage>
                {errors.documentImageUrl && errors.documentImageUrl.message}
              </FormErrorMessage>
            </FormControl>
          </Box>
          <Box w="full">
            <Text fontWeight="bold" fontSize="24px">
              Document Details
            </Text>
            <Box
              as="div"
              sx={{
                display: "flex",
                justifyContent: "space-between",

                gap: "1rem",
                p: "1rem",
              }}
            >
              <FormControl isInvalid={!!errors.documentNumber}>
                <FormLabel htmlFor="documentNumber">{tittle}</FormLabel>
                <Controller
                  name="documentNumber"
                  control={control}
                  defaultValue={initialValues.documentNumber}
                  render={({ field }) => (
                    <Input
                      {...field}
                      name="documentNumber"
                      type="Textarea"
                      placeholder="Type Here"
                    />
                  )}
                />
                <FormErrorMessage>
                  {errors.documentNumber && errors.documentNumber.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.dob}>
                <FormLabel htmlFor="dob">Date of Birth</FormLabel>
                <Controller
                  name="dob"
                  control={control}
                  defaultValue={initialValues.dob}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="date"
                      placeholder=""
                      name="dob"
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

                gap: "1rem",
                p: "1rem",
              }}
            >
              <FormControl isInvalid={!!errors.personName}>
                <FormLabel htmlFor="personName">Name</FormLabel>
                <Controller
                  name="personName"
                  control={control}
                  defaultValue={initialValues.personName}
                  render={({ field }) => (
                    <Input
                      {...field}
                      name="personName"
                      placeholder="Type Here"
                    />
                  )}
                />
                <FormErrorMessage>
                  {errors.personName && errors.personName.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.parrentName}>
                <FormLabel htmlFor="parrentName">
                  Name of Father / Mother
                </FormLabel>
                <Controller
                  name="parrentName"
                  control={control}
                  defaultValue={initialValues.parrentName}
                  render={({ field }) => (
                    <Input
                      {...field}
                      name="parrentName"
                      placeholder="Type Here"
                    />
                  )}
                />
                <FormErrorMessage>
                  {errors.parrentName && errors.parrentName.message}
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
                p: "1rem",
              }}
            >
              <FormControl isInvalid={!!errors.dateOfExpire}>
                <FormLabel htmlFor="dateOfExpire">Expire on</FormLabel>
                <Controller
                  name="dateOfExpire"
                  control={control}
                  defaultValue={initialValues.dateOfExpire}
                  render={({ field }) => (
                    <Input
                      {...field}
                      name="dateOfExpire"
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
                  {errors.dateOfExpire && errors.dateOfExpire.message}
                </FormErrorMessage>
              </FormControl>
            </Box>
            <Box
              sx={{
                paddingStart: "1rem",
              }}
            >
              <Button>
                <BsPaperclip />
                Add Image
              </Button>
              <Text>Max file Sizeallowed 20MB</Text>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                p: "0.5rem",
              }}
            >
              <Button colorScheme="blue" type="submit">
                Save Document
              </Button>
            </Box>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default AddDocument;
