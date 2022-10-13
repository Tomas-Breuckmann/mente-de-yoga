/* eslint-disable max-len */
import React from 'react';
import hathaImg from '../../data/imagesHero';
import { P, St } from '../../Styles/texts';
import {
  CursosMain, CursosContent, Text, Img, Button,
} from './Course.styles';
import Fonts from '../General/Fonts';

export default function Cursos() {
  const getImage = () => {
    const num = Math.floor(Math.random() * (6));
    const image = Object.values(hathaImg)[num];
    return image;
  };
  return (
    <CursosMain>
      <CursosContent>
        <Text>
          <Fonts infos="course" type="title" />
          <P infos="course" type="p">
            Com abordagem no
            <St> Haṭha Yoga </St>
            o curso de
            <St> Formação de Instrutores </St>
            conta com uma carga horária de
            <St> 200h </St>
            e destina-se a toda pessoa interessada em conhecer mais à si mesma, e também em conhecer e ensinar esta tradição.
          </P>
          <Button>SAIBA MAIS . . .</Button>
        </Text>
        <Img>
          <img src={getImage()} alt="hatha" />
          <div />
        </Img>
      </CursosContent>
    </CursosMain>
  );
}
