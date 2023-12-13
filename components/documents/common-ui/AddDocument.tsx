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
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useDocument } from "../hook";
import { InputControl } from "@atoms/TextInput";

const AddDocument = ({ tittle, onClose }) => {
  const { initialValues, schema, submit } = useDocument({ onClose });
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
      <form onSubmit={handleSubmit(submit)}>
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
              <InputControl
                label={tittle}
                name="documentNumber"
                control={control}
                initialValues={initialValues.documentNumber}
                errors={errors}
                placeholder="e.g., 123456789"
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

                gap: "1rem",
                p: "1rem",
              }}
            >
              <InputControl
                label="Name"
                name="personName"
                control={control}
                initialValues={initialValues.personName}
                errors={errors}
                placeholder="Full name"
              />

              <InputControl
                label="Name of Father / Mother"
                name="parrentName"
                control={control}
                initialValues={initialValues.parrentName}
                errors={errors}
                placeholder="Type Here"
              />
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
              <InputControl
                label="Expire on"
                name="dateOfExpire"
                control={control}
                initialValues={initialValues.dateOfExpire}
                errors={errors}
                type="date"
              />
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
