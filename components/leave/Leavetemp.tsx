// import React, { useState } from "react";

// import { RiAddCircleLine } from "react-icons/ri";
// import {
//   Box,
//   Button,
//   Card,
//   Checkbox,
//   FormLabel,
//   Input,
//   Modal,
//   ModalBody,
//   ModalCloseButton,
//   ModalContent,
//   ModalFooter,
//   ModalHeader,
//   ModalOverlay,
//   Select,
//   Textarea,
//   useDisclosure,
// } from "@chakra-ui/react";
// import { Field, Formik, Form, ErrorMessage } from "formik";
// import { useLeave } from "./hook/useLeave";
// import LeaveBox from "../leave-info/LeaveBox";
// import LeaveList from "./LeaveList";

// const Leave = () => {
//   const { initialValues, schema, handleSubmit } = useLeave();
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [isHalfDay, setIsHalfDay] = useState(false);
//   return (
//     <>
//       <Box
//         as="div"
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "1rem",
//           height: "100%",
//         }}
//       >
//         <Box
//           as="div"
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             "@media (max-width: 320px)": {
//               width: "full",
//               justifyContent: "center",
//             },
//           }}
//         >
//           <LeaveBox />
//           <Button
//             rightIcon={<RiAddCircleLine />}
//             colorScheme="blue"
//             onClick={onOpen}
//             sx={{
//               "@media (max-width: 320px)": {
//                 display: "none",
//               },
//             }}
//           >
//             Apply Leave
//           </Button>
//         </Box>
//         <Card>
//           <LeaveList />
//         </Card>
//       </Box>
//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <Formik
//             initialValues={initialValues}
//             validationSchema={schema}
//             onSubmit={handleSubmit}
//           >
//             <Form>
//               <ModalHeader>Apply Leave</ModalHeader>
//               <ModalCloseButton />
//               <ModalBody>
//                 <Card
//                   as="div"
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "center",
//                     padding: "1rem",
//                     borderRadius: "1rem",
//                     gap: "2rem",
//                   }}
//                 >
//                   <Box as="div">
//                     <FormLabel>Leave Subject</FormLabel>
//                     <Field
//                       as={Input}
//                       placeholder="Subject"
//                       size="md"
//                       name="leaveSubject"
//                     />
//                     <Box
//                       sx={{
//                         color: "red",
//                       }}
//                     >
//                       <ErrorMessage name="leaveSubject" component="div" />
//                     </Box>
//                   </Box>
//                   <Box
//                     as="div"
//                     sx={{
//                       w: "50%",
//                       display: "flex",
//                       justifyContent: "space-between",
//                       "@media (max-width: 425px)": {
//                         flexDirection: "column",
//                       },
//                     }}
//                   >
//                     <Box>
//                       <FormLabel>From</FormLabel>
//                       <Field as={Input} type="date" name="fromDate" />
//                       <Box
//                         sx={{
//                           color: "red",
//                         }}
//                       >
//                         <ErrorMessage name="fromDate" component="div" />
//                       </Box>
//                     </Box>
//                     <Box>
//                       <FormLabel>To</FormLabel>
//                       <Field as={Input} type="date" name="toDate" />
//                       <Box
//                         sx={{
//                           color: "red",
//                         }}
//                       >
//                         <ErrorMessage name="toDate" component="div" />
//                       </Box>
//                     </Box>
//                   </Box>
//                   <Box as="div">
//                     <FormLabel>Leave Type</FormLabel>
//                     <Field
//                       as={Select}
//                       placeholder="Select Leave"
//                       name="leaveType"
//                     >
//                       <option value="Annual Leave">Annual Leave</option>
//                       <option value="Sick Leave">Sick Leave</option>
//                       <option value="Sick Leave">Other</option>
//                     </Field>
//                     <Box
//                       sx={{
//                         color: "red",
//                       }}
//                     >
//                       <ErrorMessage name="leaveType" component="div" />
//                     </Box>
//                   </Box>
//                   {/* <Checkbox value='half'>Half</Checkbox> */}
//                   <Checkbox
//                     value="half"
//                     onChange={() => setIsHalfDay(!isHalfDay)}
//                   >
//                     Half
//                   </Checkbox>
//                   {isHalfDay && (
//                     <Box as="div">
//                       <FormLabel>Half-Day Selection</FormLabel>
//                       <Select placeholder="Select Half Section">
//                         <option value="firstHalf">First Half</option>
//                         <option value="secondHalf">Second Half</option>
//                       </Select>
//                       {/* <FormLabel>Date Range Half</FormLabel>
//                       <Input type="date" name="startDate" />
//                       <Input type="date" name="endDate" /> */}
//                     </Box>
//                   )}
//                   <Box as="div">
//                     <FormLabel>Reason for Leave</FormLabel>
//                     <Field
//                       as={Textarea}
//                       placeholder="Leave discription"
//                       size="md"
//                       name="reasonForLeave"
//                     />
//                     <Box
//                       sx={{
//                         color: "red",
//                       }}
//                     >
//                       <ErrorMessage name="reasonForLeave" component="div" />
//                     </Box>
//                   </Box>
//                 </Card>
//               </ModalBody>

//               <ModalFooter>
//                 <Button colorScheme="blue" mr={3} type="submit">
//                   Apply
//                 </Button>
//                 <Button colorScheme="blue" mr={3} onClick={onClose}>
//                   Close
//                 </Button>
//               </ModalFooter>
//             </Form>
//           </Formik>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };

// export default Leave;
