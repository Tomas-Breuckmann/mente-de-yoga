import React from 'react';
import {
  CursosContentAbout, CursosMain, Locals2, Cidade, Whats, WhatsPF,
} from './CursosDetails.styles';
import { WhatsAppIcon } from '../../../components/Footer/Footer.styles';
import * as T from '../../../Styles/texts';
import * as G from '../../../Styles/Generals';

// eslint-disable-next-line react/prop-types
export default function LocalData({ back }) {
  // console.log('YOGA PROP', back);
  const c = 'cursoInstrutores';
  return (
    <CursosMain back={back} id="localdata">
      <CursosContentAbout>
        <T.H3 detach>Locais e datas</T.H3>

        <Locals2>
          <G.BasicCard>
            <Cidade>
              <p>Passo Fundo - RS</p>
            </Cidade>
            <h4>
              Cethise
            </h4>
            <p>
              Centro de Ensino em Terapias Holísticas, Integrativas,
              Saúde e Estética – Passo Fundo RS
            </p>
            <T.Ul>
              <li>
                <T.LIcon />
                Escola registrada na OSCIP sob n° 443
              </li>
              <li>
                <T.LIcon />
                Início dias 24 e 25 de fevereiro de 2024
              </li>
            </T.Ul>
            <WhatsPF
              target="_blank"
              rel="noreferrer"
              href="https://cethiseensino.com.br/produto/formacao-de-instrutores-de-yoga/"
            >
              <p>
                Clique
                <str> aqui </str>
                e saiba mais
              </p>
            </WhatsPF>
          </G.BasicCard>
          <G.BasicCard>
            <Cidade>
              <p>Erechim - RS</p>
            </Cidade>
            <T.H4 infos={c}>
              Arcturus
            </T.H4>
            <p>
              Terapia e Treinamentos – Erechim RS
            </p>
            <T.Ul>
              <li>
                <T.LIcon />
                Início dias 16 e 17 de março de 2024
              </li>
            </T.Ul>
            <p>Contatos</p>
            <Whats target="_blank" href="https://wa.me/5554991216840" rel="noreferrer">
              <WhatsAppIcon />
              <str>Laiane Carolina</str>
            </Whats>
            <Whats target="_blank" href="https://wa.me/5554999964137" rel="noreferrer">
              <WhatsAppIcon />
              <str>Tomas Breuckmann</str>
            </Whats>

          </G.BasicCard>
        </Locals2>

      </CursosContentAbout>
    </CursosMain>
  );
}
