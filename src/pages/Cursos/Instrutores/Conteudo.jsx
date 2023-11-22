import React from 'react';
import {
  CursosContentAbout, CursosMain,
} from './CursosDetails.styles';
import * as T from '../../../Styles/texts';

export default function Conteudo() {
  const c = 'cursoInstrutores';
  return (
    <CursosMain>
      <CursosContentAbout>
        <T.H3 infos={c} detach>Qual o conteúdo do curso?</T.H3>
        <str>A serem abordados de forma presencial</str>
        <T.Ul>
          <T.Li infos={c}>
            <T.LIcon />
            Contextualização Histórica do Yoga.
            <T.Ul>
              <T.Li infos={c}>
                <T.OIcon />
                As origens do Yoga
              </T.Li>
              <T.Li infos={c}>
                <T.OIcon />
                As origens do Haṭha Yoga
              </T.Li>
              <T.Li infos={c}>
                <T.OIcon />
                O desenvolvimento do Yoga Postural atual
              </T.Li>
            </T.Ul>
          </T.Li>
          <T.Li infos={c}>
            <T.LIcon />
            Os principais elementos do Haṭha Yoga e suas funções.
            <T.Ul>
              <T.Li infos={c}>
                <T.OIcon />
                Āsana (posturas)
              </T.Li>
              <T.Li infos={c}>
                <T.OIcon />
                Prāṇāyāma (respirações)
              </T.Li>
              <T.Li infos={c}>
                <T.OIcon />
                Mudrā (selos)
              </T.Li>
              <T.Li infos={c}>
                <T.OIcon />
                Dhyāna (meditação)
              </T.Li>
            </T.Ul>
          </T.Li>

          <T.Li infos={c}>
            <T.LIcon />
            Yoga terapia
            <T.Ul>
              <T.Li infos={c}>
                <T.OIcon />
                Sequências (kriyās) para os principais sistemas corporais: linfático,
                circulatório, imunológico, etc.
              </T.Li>
              <T.Li infos={c}>
                <T.OIcon />
                Práticas para auxilio da ansiedade e depressão.
              </T.Li>
              <T.Li infos={c}>
                <T.OIcon />
                Técnicas para purificação dos chakras.
              </T.Li>
            </T.Ul>
          </T.Li>
          <T.Li infos={c}>
            <T.LIcon />
            Neurociência e Yoga
          </T.Li>
          <T.Li infos={c}>
            <T.LIcon />
            A diversidade do Yoga: crianças, envelhescimento, o feminino, etc.
          </T.Li>
          <T.Li infos={c}>
            <T.LIcon />
            Metodologias para treino pessoal, aula individual e aula em grupo
          </T.Li>
        </T.Ul>
        <str>A serem abordados de forma online</str>
        <p>
          São possibilidades de temas a serem abordados, principalmente de forma
          online, de acordo com o interesse da turma.
        </p>
        <T.Ul>
          <T.Li infos={c}>
            <T.LIcon />
            Os níveis de consciência
          </T.Li>
          <T.Li infos={c}>
            <T.LIcon />
            Introdução ao Ayurveda
          </T.Li>
          <T.Li infos={c}>
            <T.LIcon />
            Introdução a Mantra yoga
          </T.Li>
          <T.Li infos={c}>
            <T.LIcon />
            Yoga sūtra: os ensinamentos dos sábios antigos
          </T.Li>
          <T.Li infos={c}>
            <T.LIcon />
            Daśa Mahāvidyā: a sabedoria das 10 Deusas
          </T.Li>
          <T.Li infos={c}>
            <T.LIcon />
            Yoga e prosperidade
          </T.Li>
          <T.Li infos={c}>
            <T.LIcon />
            Numerologia Tântrica
          </T.Li>
          <T.Li infos={c}>
            <T.LIcon />
            Yoga e relacionamentos
          </T.Li>
        </T.Ul>
        {/* <CardFormacao /> */}
      </CursosContentAbout>
    </CursosMain>
  );
}
