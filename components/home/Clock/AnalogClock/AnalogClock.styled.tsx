import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const ClockCircle = styled(Box)`
  position: relative;
  width: 260px;
  height: 260px;
  box-shadow: -6px -6px 16px var(--chakra-colors-white),
    6px 6px 16px hsla(240, 30%, 86%, 1),
    inset 6px 6px 16px hsla(240, 30%, 86%, 1),
    inset -6px -6px 16px var(--chakra-colors-white);
  border-radius: 50%;
  justify-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
`;

export const ClockRounder = styled(Box)`
  width: 0.75rem;
  height: 0.75rem;
  background-color: var(--chakra-colors-gray-400);
  border-radius: 50%;
  border: 2px solid var(--chakra-ring-color);
  z-index: 10;
`;

export const ClockHour = styled(Box)`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 105px;
  height: 140px;
  &:before {
    content: "";
    position: absolute;
    background-color: var(--chakra-colors-gray-600);
    width: 0.25rem;
    height: 5.5rem;
    border-radius: 0.75rem;
    z-index: 1;
  }
`;
export const ClockMinute = styled(Box)`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 136px;
  height: 186px;
  &:before {
    content: "";
    position: absolute;
    background-color: var(--chakra-colors-gray-600);
    width: 0.25rem;
    height: 6.5rem;
    border-radius: 0.75rem;
    z-index: 1;
  }
`;

export const ClockSecond = styled(Box)`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 130px;
  height: 200px;
  &:before {
    content: "";
    position: absolute;
    background-color: var(--chakra-colors-gray-400);
    width: 0.125rem;
    height: 7.5rem;
    border-radius: 0.75rem;
    z-index: 1;
  }
`;

export const ClockTwelve = styled.span`
  position: absolute;
  width: 1.5rem;
  height: 1px;
  background-color: var(--chakra-colors-gray-400);
  transform: translateX(-50%) rotate(90deg);
  top: 1.25rem;
  left: 50%;
`;
export const ClockThree = styled.span`
  position: absolute;
  width: 1.5rem;
  height: 1px;
  background-color: var(--chakra-colors-gray-400);
  top: 50%;
  right: 0.75rem;
`;
export const ClockSix = styled.span`
  position: absolute;
  width: 1.5rem;
  height: 1px;
  background-color: var(--chakra-colors-gray-400);
  transform: translateX(-50%) rotate(90deg);
  bottom: 1.25rem;
  left: 50%;
`;
export const ClockNine = styled.span`
  position: absolute;
  width: 1.5rem;
  height: 1px;
  background-color: var(--chakra-colors-gray-400);
  left: 0.75rem;
  top: 50%;
`;
