import React from "react";
import { BsPaperclip } from "react-icons/bs";
import {
  Box,
  Card,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Select,
  Textarea,
  Text,
  Button,
} from "@chakra-ui/react";
const RequestReplacement = ({ selectedAsset }) => {
  return (
    <>
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
          <FormControl isRequired>
            <FormLabel>Choose Asset to replace</FormLabel>
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>
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
                  <Text fontWeight="semibold">{selectedAsset.assignedOn}</Text>
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
                  <Text fontWeight="semibold">{selectedAsset.assetCategory}</Text>
                </Box>
              </GridItem>
            </Grid>
          </Card>
        </Box>

        <Box as="div">
          <FormLabel>Describe your requirements in detail</FormLabel>
          <Input
            as={Textarea}
            placeholder="Describe your requirements"
            size="md"
            name="Describe"
          />
        </Box>
        <Box>
          <Button>
            <BsPaperclip />
            Add Image
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default RequestReplacement;
