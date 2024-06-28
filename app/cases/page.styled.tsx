import styled from 'styled-components';
import { media } from '@/styles/media';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  width: 100%;
  ${media.mobile`
  grid-template-columns: 1fr;
  gap: 4px;
  `}
`;
