/* eslint-disable react/jsx-indent */
/* eslint-disable max-len */
/* eslint-disable no-tabs */
import React from 'react';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import * as G from '../../../Styles/Generals';
import Hero from '../../../components/Hero/Hero';
import * as T from '../../../Styles/texts';
import * as S from './Psicoyoga.styles';
import * as C from '../Instrutores/GeneralInfos.styles';
import getImage from '../../../helpers/helpers';

export default function Silencio() {
  return (
    <>
      <Header />
      <Hero />
      <S.SilencioMain>

        <S.SilencioContentGrid>
          <C.Img>
            <img src={getImage('general')} alt="hatha" />
          </C.Img>
          <S.Div>
            <h4>INTRODUÇÃO A PSICOYOGATERAPIA</h4>
            {/* <T.Cita>
              <T.Sk>
                O silêncio é essencial. Nós precisamos de silêncio assim como precisamos de
                ar, da mesma maneira que as plantas precisam de luz. Se nossas mentes estão
                repletas de palavras e pensamentos, não há espaço para nós. (Thich Nhat Hahn)
              </T.Sk>
            </T.Cita> */}
            <p>
				Transforme medo, depressão, controle e ansiedade, em
				<b> criatividade</b>
				,
				<b> consistência</b>
				,
				<b> posicionamento </b>
				e
				<b> confiança</b>
				.
            </p>
			<p>Um curso para Professoras(res) de Yoga e Psicólogas(gos)</p>
			<S.P2>
				<p>
					Início em 9 de março.
				</p>
			</S.P2>
			<S.Botao>
				<div>Apenas 6 vagas!</div>
				{/* <a target="_blank" href="https://cethiseensino.com.br/produto/mentoria-experiencia-do-silencio/" rel="noreferrer">
				Garanta a sua aqui ...
				</a> */}
				<a target="_blank" href="https://wa.me/5554984322840" rel="noreferrer">Garanta a sua aqui ...</a>
			</S.Botao>
          </S.Div>
        </S.SilencioContentGrid>

        <S.SilencioContent>
          {/* <T.H3 detach>Experiência do silêncio</T.H3> */}
			<p>
				A
				<b> Psicoyogaterapia </b>
				é o resultado dos estudos e vivências do Prof Tomas Breuckmann com o
				<b> Yoga </b>
				e com a
				<b> Psicoterapia Corporal Reichiana</b>
				.
			</p>
			<p> É um conjunto de técnicas simples mas poderosas que por meio da sua repetição, seguindo protocolos pré-definidos, aliviam sintomas de medo, depressão, controle e ansiedade, bem como de seus desdobramentos psicológicos e físicos limitantes.</p>
			<p>Uma vez que estes aspectos limitantes enfraquecem, toda a potencialidade do indivíduo se revela, surgem os aspectos de criatividade, consistência, posicionamento e confiança que refletem sua essencia.</p>
			<p>Os atendimentos são feitos de forma individual em pacotes pre-definidos de sessões. Neste curso, você irá conhecer as primeiras técnicas da psicoyogaterapia, passará pelo processo com acompanhamento individual, e, após completoar o curso já poderá atender de forma individual seus clientes com um conjuntos de recursos diferenciados.</p>

			<T.H3 detach>O que você vai aprender no curso? </T.H3>
			{/* <S.P>
				<str>{' 100% ON-LINE '}</str>
			</S.P> */}
					<ul>
				<li>
					<T.LIcon />
					As origem do sofrimento psico-emocional
				</li>
				<li>
					<T.LIcon />
					Os biotipos prânicos
				</li>

				<li>
					<T.LIcon />
					Ancoragens somato-psíquicas da doença e suas manifestações
				</li>
				<li>
					<T.LIcon />
					Metodologia e Intervenções iniciais
				</li>
					</ul>

			<T.H3 detach>Como ocorre o curso?</T.H3>
			<p>O curso ocorre de forma presencial com acompanhamento individual de forma online, com total de 72h.</p>
			<S.Grid3>
				<G.BasicCard>
					<str>Presencial</str>
					<p>São cinco encontros presenciais, com carga horária total de 42h, que ocorrem nas datas e horários seguintes.</p>
					<p>
						<b>Datas: </b>
						Março: 9  |  Abril: 13  |  Maio: 11  |  Junho: 8  |  Julho: 13
					</p>
					<p>
						<b>Horário: </b>
						8h até as 12h e das 13:30h até as 18h
					</p>
				</G.BasicCard>
				<G.BasicCard>
					<str>Online</str>
					<p> O aluno será acompanhado de forma online quinzenalmente, em sessões individuais, totalizando 8 sessões e 6h.</p>
				</G.BasicCard>
				<G.BasicCard>
					<str>Atividades individuais</str>
					<p> O aluno terá 1:30h de atividades semanais para realizar em casa divididas em três momentos de 30min.</p>
				</G.BasicCard>
			</S.Grid3>
			<p2>Durante o curso é necessário: </p2>
			<ul>
				<li>
					<T.LIcon />
					Disponibilidade de 45min quinzenalmente para realizar o acompanhamento online.
				</li>
				<li>
					<T.LIcon />
					Disponibilidade mínima de 3 períodos de 30 minutos semanais para realizar as atividades em casa.
				</li>
			</ul>
			<p2>É necessário uma entrevista prévia com o professor antes de confirmar sua inscrição.</p2>

			<T.H3 detach> O que preciso para ser aprovado? </T.H3>
			<ul>
				<li>
					<T.LIcon />
					Participar de todas as aulas presenciais.
				</li>
				<li>
					<T.LIcon />
					Cumprir com as 8h de acompanhamento individual.
				</li>
				<li>
					<T.LIcon />
					Realizar as tarefas individuais.
				</li>
				<li>
					<T.LIcon />
					Ser aprovado nas avaliações que ocorrem a cada módulo..
				</li>
			</ul>
			<p>Alunos aprovados recebem o Certificado de conclusão no curso de Introdução em Psicoyogaterapia e estarão habilitados a aplicarem a metodologia. Alunos não aprovados recebem um certificado de participação</p>

			<T.H3 detach>Detalhes sobre a fundamentação do curso</T.H3>
			<p>Podemos dizer que nossa existência nesta terra tem inicio no momento em que fomos concebidos. Naquele momento eramos apenas uma célula começando uma história de vida em um novo ambiente. Desde aquela época crescemos, passamos por diversas etapas em diversos ambientes, que podem ter sido hostis ou acolhedores; cada um destes ambientes e experiências que passamos criaram certas marcas, que carregamos até hoje. </p>
			<p>Algumas destas marcas foram geradas por ambientes e experiências hostis que se manifestam na vida como limitação psicológica e doenças físicas: agito, depressão, ansiedade, ciúmes, possessividade, raiva, vergonha, exibicionismo, medo, pânico, problemas oculares, otites, psoriase, prisão de ventre, obesidade, anorexia, problemas de coluna, etc. A lista é muito maior e inclui até mesmo estados graves de Alzheimer e Câncer.</p>
			<p>O ponto importante a se entender é que cada uma destas limitações e doenças tem como origem, ou pelo menos como um fator agravante, algum ponto em nosso desenvolvimento psicoemocional; algum evento de nossa história foi registrado como tão hostil que gerou uma marca tão profunda que rompeu com a unidade funcional entre corpo e mente. Ou seja, nosso organismo precisou criar uma defesa contra a agressão sofrida pelo evento hostil, para isso se organizou de uma forma neural e muscular particular, que virou uma marca pessoal, que levou as limitações psicológicas e doenças físicas.</p>
			<p>Na Psicoyogaterapia procuramos recuperar esta unidade funcional entre corpo e mente, portanto, romper com as limitações psicológicas, reduzir e prevenir doenças físicas. Mas como isso pode ser feito?</p>
			<p>Os sábios antigos da tradição do Yoga já nos ensinavam no Taittirīya Upaniṣad que o ser humano é muito mais do que um corpo físico, além deste, temos o corpo prânico, o corpo mental, o intelecto e o corpo de bem aventurança.</p>
			<p>O corpo prânico quando está em seu funcionamento ótimo, permite que o corpo físico e o corpo mental atuem em sincronicidade como uma unidade funcional, um ponto de vista similar ao da Psicologia Corporal como organizada por Federico Navarro na Somatopsicodinâmica.</p>
			<p>Então para recuperar a unidade funcional entre corpo e mente é preciso entender, não somente o funcionamento do corpo prânico (por meio do Yoga), mas também sua relação com o desenvolvimento psicoemocional (por meio da Psicologia Corporal), para assim, fazer intervenções efetivas (a Psicoyogaterapia).</p>
			<S.Botao>
				<div>Apenas 6 vagas!</div>
				{/* <a target="_blank" href="https://cethiseensino.com.br/produto/mentoria-experiencia-do-silencio/" rel="noreferrer">
				Garanta a sua aqui ...
				</a> */}
				<a target="_blank" href="https://wa.me/5554984322840" rel="noreferrer">Garanta a sua aqui ...</a>
			</S.Botao>
        </S.SilencioContent>
      </S.SilencioMain>
      <Footer />
    </>
  );
}
