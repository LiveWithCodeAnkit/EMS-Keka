import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { assetInfo } from "./constants/assetData";
import RequestReplacement from "./request_replace/RequestReplacement";

const AssetsTableView = () => {
  const [selectedAsset, setSelectedAsset] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const itemsPerPage = 3;
  const totalPages = Math.ceil(assetInfo.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage: any) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = assetInfo.slice(startIndex, endIndex);

  return (
    <>
      <Box
        as="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Box>
          <Text fontSize="2xl" fontWeight="semibold">
            Assigned Assets
          </Text>
          <Text fontWeight="">Assets that are currently assigned to you</Text>
        </Box>
        <TableContainer bg="bgCard" rounded="1rem">
          <Table variant="simple">
            <TableCaption>
              <Box
                display="flex"
                justifyContent="end"
                gap="1rem"
                p="1rem"
                alignItems="center"
              >
                <Text>{`Page ${currentPage} of ${totalPages}`}</Text>
                <Button
                  size="sm"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                <Text>{`page ${currentPage} of  ${currentPage}`}</Text>
                <Button
                  size="sm"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </Box>
            </TableCaption>

            <Thead>
              <Tr>
                <Td colSpan={7}>
                  <Box
                    as="div"
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <Box w="20%">
                      <FormControl>
                        <InputGroup>
                          <InputLeftElement pointerEvents="none">
                            <Icon as={RiSearchLine} color="gray.300" />
                          </InputLeftElement>
                          <Input placeholder="Search" />
                        </InputGroup>
                      </FormControl>
                    </Box>
                    <Menu>
                      <MenuButton
                        as={IconButton}
                        colorScheme="whiteAlpha"
                        aria-label="Options"
                        icon={<BsThreeDotsVertical color="gray" />}
                      />
                      <MenuList>
                        <MenuItem>Add</MenuItem>
                        <MenuItem>Remove</MenuItem>
                        <MenuItem>Update</MenuItem>
                      </MenuList>
                    </Menu>
                  </Box>
                </Td>
              </Tr>
            </Thead>
            <Thead>
              <Tr bg="theadColor">
                <Th>Asset Type</Th>
                <Th>Asset ID</Th>
                <Th>Asset Category</Th>
                <Th>Assigned On</Th>
                <Th>Acknowledgement</Th>
                <Th>Current Condition</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {currentData.map((data, index) => (
                <Tr key={index}>
                  <Td>{data.assetType}</Td>
                  <Td>{data.assetID}</Td>
                  <Td>{data.assetCategory}</Td>
                  <Td>{data.assignedOn}</Td>
                  <Td>{data.acknowledgement}</Td>
                  <Td>{data.currentCondition}</Td>
                  <Td>
                    <Menu>
                      <MenuButton
                        as={IconButton}
                        colorScheme="whiteAlpha"
                        icon={<BsThreeDotsVertical color="gray" />}
                      />
                      <MenuList>
                        <MenuItem
                          onClick={() => {
                            onOpen();
                            setSelectedAsset(data);
                          }}
                        >
                          Request Replacement
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bg="gray.500">Replacement Request</DrawerHeader>
          <DrawerBody>
            <RequestReplacement selectedAsset={selectedAsset} onClose={onClose}/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AssetsTableView;
