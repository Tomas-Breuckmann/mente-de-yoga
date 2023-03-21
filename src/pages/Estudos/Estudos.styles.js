import styled from 'styled-components';
import { BasicContent, BasicMain } from '../../Styles/Generals';

export const Main = styled(BasicMain)`
  /* background-color: red; */
`;

export const Content = styled(BasicContent)`
  /* background-color: green; */
`;

export const Locals = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
