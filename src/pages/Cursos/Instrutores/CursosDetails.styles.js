import styled from 'styled-components';
import { BasicContent, BasicMain } from '../../../Styles/Generals';

export const CursosMain = styled(BasicMain)`
  background-color: ${(props) => props.back === 'back' && props.theme.cursoPage.background1};
  padding-top: 20px;
  padding-bottom: 20px;
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

export const Whats = styled.a`
    display: flex;
    /* text-decoration: none; */
    color: var(--g11);
    align-items: center;
    border: 1px solid var(--g5);
    border-radius: 8px;
    padding: 8px;
    font-size: 12px;
`;

export const WhatsPF = styled.a`
    display: flex;
    color: var(--g11);
    border: 1px solid var(--g5);
    border-radius: 8px;
    padding: 4px 4px 0 12px;
    /* font-size: 12px; */
`;

export const Locals3 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Locals2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Cidade = styled.div`
  p {
    font-weight: 700;
    background-color: var(--d1);
    padding: 4px 0 4px 12px;
    border-radius: 4px;
  }
`;
