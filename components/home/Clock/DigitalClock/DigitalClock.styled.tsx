import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const ClockDate = styled(Box)`
  text-align: center;
  font-size: var(--chakra-fontSizes-xs);
  font-weight: var(--chakra-fontWeights-medium);
`;

export const ClockText = styled(Box)`
  display: flex;
  justify-content: center;
`;

export const ClockTime = styled(Box)`
  font-size: var(--chakra-fontSizes-5xl);
  font-weight: var(--chakra-fontWeights-medium);
  color: var(--chakra-colors-gray-600);
`;
export const ClockAMPM = styled(Box)`
  font-size: var(--chakra-fontSizes-xs);
  font-weight: var(--chakra-fontWeights-medium);
  margin-left: var(--chakra-space-1);
  color: var(--chakra-colors-gray-600);
`;
