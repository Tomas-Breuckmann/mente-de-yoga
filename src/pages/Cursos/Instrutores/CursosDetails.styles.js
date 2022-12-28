import styled from 'styled-components';
import { BasicContent, BasicMain } from '../../../Styles/Generals';

export const CursosMain = styled(BasicMain)`
  background-color: ${(props) => props.back === 'back' && props.theme.cursoPage.background1};
  padding-top: 0px;
  padding-bottom: 0px;
`;

export const TitleContent = styled(BasicContent)`
`;

export const CursosContent = styled(BasicContent)`
  grid-template-columns: 6fr 6fr;
  grid-template-areas:
  "img text";
  align-items: center;
  margin: 40px auto;
  list-style-position: outside;
`;

export const CursosContentAbout = styled(BasicContent)`
  padding: 20px 0;
`;

export const GeneralInfos = styled.div`
  grid-area: text;
`;

export const CursosTitle = styled(BasicContent)`
  margin-top: 40px;
`;

export const Img = styled.div`
  grid-area: img;
/* position: relative; */
    img {
        /* filter: grayscale(1); */
        width: 500px;
        height: 350px;
        object-fit: cover;
        /* position: relative; */
    }
    /* div {
        position: absolute;
        border-bottom: 5px dotted var(--laranja);
        border-left: 5px dotted var(--laranja);        
        width: 50%;
        height: 30%;
        bottom: -3px;
        left: -5px;
    } */
`;

export const A = styled.a`
  text-decoration: none;
`;
