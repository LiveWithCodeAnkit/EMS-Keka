import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TfiHandPointRight } from "react-icons/tfi";
import { FiAlertCircle } from "react-icons/fi";
import {
  Box,
  Button,
  Card,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  IconButton,
  Text,
  Grid,
  GridItem,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import RequestLeaveCard from "../request-leave-card/RequestLeaveCard";
import CancelLeave from "../cancel-leave/CancelLeave";
import CompensatoryLeave from "../compensatory-leave/CompensatoryLeave";
import { leavePolicyRules } from "../constants/leaveList";
import ViewLeave from "../view-leave/ViewLeave";

const PendingLeaveRequest = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const collapsible1 = useDisclosure();
  const collapsible2 = useDisclosure();
  const collapsible3 = useDisclosure();
  const collapsible4 = useDisclosure();
  return (
    <>
      <Box
        as="div"
        mt="1rem"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text fontWeight="semibold" fontSize="2xl">
          Pending Leave Request
        </Text>
        <Box w="15rem">
          <Select
            border="2px solid #0096FF"
            color="#0096FF"
            fontWeight="semibold"
            name="leaveSearch"
          >
            <option value="option1">Jan 2023-Dec-2023</option>
            <option value="option2">Jan 2024-Dec-2024</option>
            <option value="option3">Jan 2025-Dec-2025</option>
          </Select>
        </Box>
      </Box>
      <Grid templateColumns="60% 39%" gap={6} p="2rem">
        <GridItem colSpan={1}>
          <Box>
            <Card>
              <Box
                as="div"
                sx={{
                  display: "flex",
                  p: "1rem",
                  borderBottom: "1px solid gray",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  as="div"
                  sx={{
                    display: "flex",
                    gap: "0.5rem",
                  }}
                >
                  <Box
                    as="div"
                    h="3rem"
                    w="3rem"
                    rounded="full"
                    bg="skyblue"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <TfiHandPointRight color="white" fontSize="1.4rem" />
                  </Box>
                  <Box
                    as="div"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <Box>
                      <Text fontWeight="normal" color="gray">
                        Past Leave
                      </Text>
                      <Text>Apr 20, 2023</Text>
                    </Box>
                    <Box
                      as="div"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <Text fontWeight="semibold">Leave Note:</Text>
                      <Text>nj</Text>
                    </Box>
                  </Box>
                </Box>
                {/* new add */}

                <Box>
                  <Text fontWeight="normal" color="gray">
                    Leave Type
                  </Text>
                  <Text fontWeight="semibold">Paid Leave</Text>
                </Box>

                {/*new add end*/}
                <Box>
                  <Text
                    fontWeight="normal"
                    color="gray"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    Request On <FiAlertCircle />
                  </Text>
                  <Text fontWeight="semibold">Apr 06 2023</Text>
                </Box>
                <Box>
                  <Text fontWeight="normal" color="gray">
                    Status
                  </Text>
                  <Text fontWeight="semibold">Pending</Text>
                  <Link href="#" color="#0096FF" fontWeight="semibold">
                    View Approvers
                  </Link>
                </Box>

                <Menu>
                  <MenuButton
                    as={IconButton}
                    colorScheme="whiteAlpha"
                    aria-label="Options"
                    icon={<BsThreeDotsVertical color="gray" />}
                  />
                  <MenuList>
                    <MenuItem
                      onClick={() => {
                        collapsible4.onOpen();
                      }}
                    >
                      View Request
                    </MenuItem>
                    {/* <MenuItem>Edit Leave</MenuItem> */}
                    <MenuItem
                      onClick={() => {
                        collapsible1.onOpen();
                      }}
                    >
                      Cancel Leave
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Card>
          </Box>
        </GridItem>
        <GridItem>
          <Card p="1rem">
            <Box
              as="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <Button colorScheme="telegram" w="40%" onClick={onOpen}>
                Apply Leave
              </Button>
              <Link
                color="#0096FF"
                fontWeight="semibold"
                href="#"
                onClick={() => {
                  collapsible2.onOpen();
                }}
              >
                Request Credit for Compensatory Off
              </Link>
              <Link
                color="#0096FF"
                fontWeight="semibold"
                href="#"
                onClick={() => {
                  collapsible3.onOpen();
                }}
              >
                Leave Policy Explanation
              </Link>
            </Box>
          </Card>
        </GridItem>
      </Grid>

      {/* request leave*/}

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="lg">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bg="gray.500">Request Leave</DrawerHeader>
          <DrawerBody>
            <RequestLeaveCard onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* request leave*/}

      {/* View leave*/}
      <Drawer
        isOpen={collapsible4.isOpen}
        placement="right"
        onClose={collapsible4.onClose}
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bg="gray.500">Leave Request Details</DrawerHeader>
          <DrawerBody>
            <ViewLeave />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* View leave*/}

      {/* edit model */}

      <Modal
        onClose={collapsible1.onClose}
        size={"2xl"}
        isOpen={collapsible1.isOpen}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="#899499" color="white">
            Cancel Leave
          </ModalHeader>
          <ModalCloseButton color="white" fontWeight="bold" fontSize="1rem" />
          <ModalBody>
            <CancelLeave onClose={collapsible1.onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* edit model */}

      {/* request model */}

      <Modal
        onClose={collapsible2.onClose}
        size={"2xl"}
        isOpen={collapsible2.isOpen}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="#899499" color="white">
            Request Credit for Compensatory off
          </ModalHeader>
          <ModalCloseButton color="white" fontWeight="bold" fontSize="1rem" />
          <ModalBody>
            <CompensatoryLeave onClose={collapsible2.onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* request model */}

      {/* leave plicy */}
      <Modal isOpen={collapsible3.isOpen} onClose={collapsible3.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Leave Policy</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <OrderedList>
              {leavePolicyRules.map((item, index) => (
                <ListItem key={index}>{item.ruleDescription}</ListItem>
              ))}
            </OrderedList>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={collapsible3.onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* leave plicy */}
    </>
  );
};

export default PendingLeaveRequest;
