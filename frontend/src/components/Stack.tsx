import { styled } from "styled-components";

export const Stack = styled.div<{ $gap?: string; $dir: 'row' | 'column' }>`
  display: flex;
  gap: ${(props) => props.$gap || '0.5rem'};
  flex-direction: ${(props) => props.$dir || 'row'};
`
