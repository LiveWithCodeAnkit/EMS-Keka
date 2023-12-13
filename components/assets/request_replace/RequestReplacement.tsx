import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { BsPaperclip } from "react-icons/bs";
import { Box, Card, Grid, GridItem, Text, Button } from "@chakra-ui/react";
import { useAsset } from "../hook";
import { SelectControl } from "@atoms/Select";
import { TextareaControl } from "@atoms/Textarea";

const RequestReplacement = ({ selectedAsset, onClose }) => {
  const { initialValues, schema, submit } = useAsset();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <Box
          as="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            paddingTop: "2rem",
          }}
        >
          <Box>
            <SelectControl
              label="Choose Asset to replace"
              name="assetName"
              control={control}
              defaultValue={initialValues.assetName}
              options={[
                { value: "option1", label: "option1" },
                { value: "option2", label: "option2" },
                { value: "option3", label: "option3" },
              ]}
              errors={errors}
            />
          </Box>
          <Box>
            <Text>Asset Details</Text>
            <Card bg="" p="1rem">
              <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                <GridItem>
                  <Box
                    as="div"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Text
                      sx={{
                        color: "#A9A9A9",
                      }}
                    >
                      Asset Type
                    </Text>
                    <Text fontWeight="semibold">{selectedAsset.assetType}</Text>
                  </Box>
                </GridItem>

                <GridItem>
                  <Box
                    as="div"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Text
                      sx={{
                        color: "#A9A9A9",
                      }}
                    >
                      Asset Id
                    </Text>
                    <Text fontWeight="semibold">{selectedAsset.assetID}</Text>
                  </Box>
                </GridItem>
                <GridItem>
                  <Box
                    as="div"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Text
                      sx={{
                        color: "#A9A9A9",
                      }}
                    >
                      Assigned On
                    </Text>
                    <Text fontWeight="semibold">
                      {selectedAsset.assignedOn}
                    </Text>
                  </Box>
                </GridItem>
                <GridItem>
                  <Box
                    as="div"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Text
                      sx={{
                        color: "#A9A9A9",
                      }}
                    >
                      Asset Category
                    </Text>
                    <Text fontWeight="semibold">
                      {selectedAsset.assetCategory}
                    </Text>
                  </Box>
                </GridItem>
              </Grid>
            </Card>
          </Box>

          <Box as="div">
            <TextareaControl
              label="Describe your requirements in detail"
              name="requirementNote"
              control={control}
              defaultValue={initialValues.requirementNote}
              placeholder="Describe your requirements"
              errors={errors}
            />
          </Box>
          <Box>
            <Button>
              <BsPaperclip />
              Add Image
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" type="submit">
              Save
            </Button>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default RequestReplacement;
