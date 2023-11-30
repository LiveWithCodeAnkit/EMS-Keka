import React, { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FiMessageSquare } from "react-icons/fi";
import { AiOutlineDash } from "react-icons/ai";
import {
  Box,
  Button,
  IconButton,
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
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { assetInfo } from "../../assets/constants/assetData";

const WeeklyOffRequest = () => {
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
    <Box w={"full"}>
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
              <Td colSpan={9}>
                <Box
                  as="div"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text fontSize="22px" fontWeight="semibold">
                    Shift Requests
                  </Text>
                  <Box
                    as="div"
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                    }}
                  >
                    <Text fontWeight="semibold">19 Jul 2023 - 01 Sep 2023</Text>
                    <IconButton
                      colorScheme="buttonColorScheme"
                      aria-label="Search database"
                      icon={<HiOutlineDotsVertical color="gray" />}
                    />
                  </Box>
                </Box>
              </Td>
            </Tr>
          </Thead>
          <Thead>
            <Tr bg="theadColor">
              <Th>DATE</Th>
              <Th>REQUEST ON</Th>
              <Th>NOTE</Th>
              <Th>STATUS</Th>
              <Th>LAST ACTION BY</Th>
              <Th>NEXT APPROVER</Th>
              <Th>ACTION</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Box>
                  <Text fontWeight="semibold">Aug 12,2023</Text>
                  <Text>3385 as(12:00pm - 09:00pm)</Text>
                </Box>
              </Td>
              <Td>
                <Text>Aug 11,2023,4.5c</Text>
              </Td>
              <Td>
                <Text>week off</Text>
              </Td>
              <Td>Pending</Td>
              <Td>
                <Text>Not Available</Text>
              </Td>
              <Td>
                <Text>
                  <AiOutlineDash />
                </Text>
              </Td>
              <Td>
                <FiMessageSquare />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default WeeklyOffRequest;
