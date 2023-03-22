import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import * as E from './Estudos.styles';
import * as G from '../../Styles/Generals';
import Hero from '../../components/Hero/Hero';

export default function Estudos() {
  return (
    <>
      <Header />
      <Hero page="mestresDoYoga" />
      <E.Main>
        <E.Content>
          <E.Locals>
            <G.BasicCard>
              <h4>
                Mestres do Yoga
              </h4>
              <p>
                Centro de Ensino em Terapias Holísticas, Integrativas,
                Saúde e Estética – Passo Fundo RS.
              </p>
            </G.BasicCard>
            <G.BasicCard>
              <h4>
                Mestres do Yoga
              </h4>
              <p>
                Centro de Ensino em Terapias Holísticas, Integrativas,
                Saúde e Estética – Passo Fundo RS.
              </p>
            </G.BasicCard>
            <G.BasicCard>
              <h4>
                Mestres do Yoga
              </h4>
              <p>
                Centro de Ensino em Terapias Holísticas, Integrativas,
                Saúde e Estética – Passo Fundo RS.
              </p>
            </G.BasicCard>
            <G.BasicCard>
              <h4>
                Mestres do Yoga
              </h4>
              <p>
                Centro de Ensino em Terapias Holísticas, Integrativas,
                Saúde e Estética – Passo Fundo RS.
              </p>
            </G.BasicCard>
          </E.Locals>
        </E.Content>
      </E.Main>
      <Footer />
    </>
  );
}
