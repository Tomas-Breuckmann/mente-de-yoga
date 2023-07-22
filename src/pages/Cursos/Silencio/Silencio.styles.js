import styled from 'styled-components';
import { BasicContent, BasicMain } from '../../../Styles/Generals';

export const SilencioMain = styled(BasicMain)`
  background-color: ${(props) => props.back === 'back' && props.theme.cursoPage.background1};
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const SilencioContentGrid = styled(BasicContent)`
  grid-template-columns: 6fr 6fr;
  grid-template-areas:
  "img text";
  align-items: center;
  /* margin: 40px auto; */
  /* margin-bottom: 40px; */
  list-style-position: outside;
`;

export const SilencioContent = styled(BasicContent)`
  padding: 20px 0;
`;

export const Div = styled.div`
  grid-area: text;
  p {
    margin: 12px 0 12px 0;
  }
`;

export const Grid3 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
