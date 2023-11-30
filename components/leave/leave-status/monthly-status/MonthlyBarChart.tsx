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

const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

export const data = {
  labels: monthNames, 
  datasets: [
    {
      label: "Monthly Pattern",
      data: [50.3, 5.2, 8.3, 0, 0, 0, 4],
      backgroundColor: "#CBC3E3",
    },
  ],
};

const MonthlyBarChart = () => {
  return (
    <Card p="0.5rem">
      <Box
        as="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text fontSize="xl">Monthly Status</Text>

        <FiAlertCircle />
      </Box>
      <Bar data={data} />
    </Card>
  );
};

export default MonthlyBarChart;
