import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Box, Card, Text } from "@chakra-ui/react";
import { FiAlertCircle } from "react-icons/fi";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const monthNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const data = {
  labels: monthNames, 
  datasets: [
    {
      label: "Weekly Pattern",
      data: [4.3, 0, 8.3, 0, 0, 0, 4],
      backgroundColor: "#CBC3E3",
    },
  ],
};

const WeeklyStatus = () => {
  return (
    <>
      <Card p="0.5rem">
        <Box
          as="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text fontSize="xl">Weekly Pattern</Text>

          <FiAlertCircle />
        </Box>
        <Bar data={data} />
      </Card>
    </>
  );
};

export default WeeklyStatus;
