import React from 'react';
import {
  CursosContentAbout, CursosMain, Locals3,
} from './CursosDetails.styles';
import * as T from '../../../Styles/texts';
import * as G from '../../../Styles/Generals';

// eslint-disable-next-line react/prop-types
export default function Conteudo({ back }) {
  // const c = 'cursoInstrutores';
  return (
    <CursosMain back={back}>
      <CursosContentAbout>
        <T.H3 detach>As aulas</T.H3>
        {/* <p>Carga horária: 240 h/aula</p> */}
        {/* <h4>Encontros:</h4> */}
        <Locals3>
          <G.BasicCard>
            <str>Encontros presenciais</str>
            <p>Um final de semana por mês, totalizando 120h.</p>
          </G.BasicCard>
          <G.BasicCard>
            <str>Aulas online</str>
            <p>Aulas ao vivo ou gravadas, totalizando 30h.</p>
            <p>
              Todas as aulas são gravadas e ficam disponíveis. As(os) alunas(os) podem
              participar destas aulas mesmo depois de formados. O acesso a elas é vitalício.
            </p>
          </G.BasicCard>
          <G.BasicCard>
            <str>Atividades Individuais</str>
            <p>
              A serem realizadas em casa mediante instruções dadas nos
              encontros presenciais, totalizando 120h.
            </p>
          </G.BasicCard>
        </Locals3>
        <h4>Material incluso:</h4>
        <ul>
          <li>
            <T.LIcon />
            Conteúdo digital e impresso.
          </li>
          <li>
            <T.LIcon />
            Materiais para aulas práticas em sala de aula.
          </li>
        </ul>
        {' '}
        {/* <CardFormacao /> */}
      </CursosContentAbout>
    </CursosMain>
  );
}
