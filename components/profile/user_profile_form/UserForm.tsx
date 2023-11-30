import React from "react";
import { GoHistory } from "react-icons/go";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Card,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Progress,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  profilePrimaryInfo,
  profileContactInfo,
} from "../constants/profileInfo";
import UserPrimaryForm from "./UserPrimaryForm";
import UserContactForm from "./UserContactForm";
import ProfileViewCard from "../common-ui/ProfileViewCard";

const UserForm = () => {
  const collapsible1 = useDisclosure();
  const collapsible2 = useDisclosure();

  return (
    <>
      <Box
        as="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <Alert status="warning">
          <AlertIcon />
          Seems your account is about expire, upgrade now
        </Alert>

        <Card padding="1rem">
          <Box
            as="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <Text fontWeight="semibold" fontSize="xl">
              Incomplete Profile
            </Text>
            <Box
              as="div"
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Progress
                colorScheme="red"
                size="lg"
                value={60}
                sx={{
                  rounded: "5px",
                  width: "20%",
                }}
              />
              <Text fontWeight="semibold" color="red.400">
                60%
              </Text>
            </Box>
          </Box>
        </Card>
      </Box>

      {/* profile */}

      <Box
        mt={10}
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: "3rem",
        }}
      >
        <Card w="40%" padding="0.9rem">
          <Box
            as="div"
            sx={{
              display: "flex",
              flexDirection: "column",
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
              <Text
                fontWeight="semibold"
                fontSize="20px"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                Primary Details <GoHistory />
              </Text>
              <Button
                onClick={() => {
                  collapsible1.onOpen();
                }}
              >
                Edit
              </Button>
            </Box>
            <ProfileViewCard dataInfo={profilePrimaryInfo} />
          </Box>
        </Card>
        <Card w="40%" padding="0.9rem">
          <Box
            as="div"
            sx={{
              display: "flex",
              flexDirection: "column",
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
              <Text
                fontWeight="semibold"
                fontSize="20px"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                Contact Details <GoHistory />
              </Text>
              <Button
                onClick={() => {
                  collapsible2.onOpen();
                }}
              >
                Edit
              </Button>
            </Box>
            <ProfileViewCard dataInfo={profileContactInfo} />
          </Box>
        </Card>
      </Box>

      <Modal
        onClose={collapsible1.onClose}
        size={"2xl"}
        isOpen={collapsible1.isOpen}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="#899499" color="white">
            Primary Details
          </ModalHeader>
          <ModalCloseButton color="white" fontWeight="bold" fontSize="1rem" />
          <ModalBody>
            <UserPrimaryForm onClose={collapsible1.onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal
        onClose={collapsible2.onClose}
        size={"2xl"}
        isOpen={collapsible2.isOpen}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="#899499" color="white">
            Contact Details
          </ModalHeader>
          <ModalCloseButton color="white" fontWeight="bold" fontSize="1rem" />
          <ModalBody>
            <UserContactForm onClose={collapsible2.onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserForm;
