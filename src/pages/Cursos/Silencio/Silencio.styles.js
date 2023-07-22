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

export const Grid4 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const P = styled.div`
  str {
    background-color: var(--d1);
    padding: 4px;
    border-radius: 4px;
  }
`;

export const Botao = styled.div`
display: flex;
/* justify-content: center; */
align-items: center;
/* width: 350px; */
/* margin: 12px auto; */
margin-top: 20px;


div {
  padding: 12px;
  border: 1px solid var(--g5);
  border-radius: 8px 0 0 8px;
}
a {
    /* display: flex; */
    padding: 12px;
    background-color: var(--laranja);
    text-decoration: none;
    color: var(--g1);
    align-items: center;
    border: 1px solid var(--g5);
    border-radius: 0 8px 8px 0;
    /* padding: 8px; */
    /* font-size: 12px; */
  }

`;
