import { styled } from "styled-components";

export const Stack = styled.div<{
  $gap?: string;
  $dir: "row" | "column";
  $justify: string;
  $align: string;
}>`
  display: flex;
  gap: ${(props) => props.$gap || "0.5rem"};
  flex-direction: ${(props) => props.$dir || "row"};
  justify-content: ${(props) => props.$justify || "stretch"};
  align-items: ${(props) => props.$align || "stretch"};
`;
