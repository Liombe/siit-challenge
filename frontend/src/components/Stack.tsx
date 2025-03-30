import { styled } from "styled-components";

export const Stack = styled.div<{
  $gap?: string;
  $dir: "row" | "column";
  $justify: string;
  $align: string;
  $wrap: string;
}>`
  display: flex;
  flex-wrap: ${(props) => props.$wrap || "initial"};
  gap: ${(props) => props.$gap || "0.5rem"};
  flex-direction: ${(props) => props.$dir || "row"};
  justify-content: ${(props) => props.$justify || "initial"};
  align-items: ${(props) => props.$align || "initial"};
  min-width: 0;
  min-height: 0;
`;
