import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import {
  Badge,
  Box,
  Button,
  Card,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import AddDocument from "./AddDocument";

const AddIdentityCard = ({ heading }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card p="1rem">
        <Box
          as="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            gap: "2rem",
          }}
        >
          <Box
            as="div"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text fontSize="22px" fontWeight="semibold">
              {heading}
            </Text>
            <Badge textColor="white" fontWeight="bold" bg="#FFCC00">
              Mandatory
            </Badge>
          </Box>
          <Divider orientation="horizontal" />
          <Box
            as="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              leftIcon={<AiOutlinePlus />}
              colorScheme="blue"
              onClick={onOpen}
            >
              Add Details
            </Button>
          </Box>
        </Box>
      </Card>

      {heading != "Pan Card" ? (
        <>
          <Drawer isOpen={isOpen} placement="top" onClose={onClose} size="full">
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader bg="gray.500">
                Add a new document-Driving License
              </DrawerHeader>
              <DrawerBody>
                <AddDocument tittle={"License Number"} onClose={onClose} />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <>
          <Drawer isOpen={isOpen} placement="top" onClose={onClose} size="full">
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader bg="gray.500">Add a Pan Card</DrawerHeader>
              <DrawerBody>
                <AddDocument tittle={"Pan Number"} onClose={onClose} />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </>
  );
};
export default AddIdentityCard;
