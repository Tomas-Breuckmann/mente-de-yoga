/* eslint-disable react/jsx-indent */
/* eslint-disable max-len */
/* eslint-disable no-tabs */
import React from 'react';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import * as G from '../../../Styles/Generals';
import Hero from '../../../components/Hero/Hero';
import * as T from '../../../Styles/texts';
import * as S from './Silencio.styles';
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
            <h4>Em meio a turbulência, encontre a paz.</h4>
            <T.Cita>
              <T.Sk>
                O silêncio é essencial. Nós precisamos de silêncio assim como precisamos de
                ar, da mesma maneira que as plantas precisam de luz. Se nossas mentes estão
                repletas de palavras e pensamentos, não há espaço para nós. (Thich Nhat Hahn)
              </T.Sk>
            </T.Cita>
            <p> Uma vez que silenciar é tão importante, por que é tão difícil? Eu realmente consigo ficar em silêncio? O que significa estar em silêncio e silenciar a mente? Como faço para silenciar a mente, é realmente possível? Por onde começo? No que me ajuda aprender a silenciar?</p>
						<str>
							Se você já se fez algum destas perguntas, esta mentoria é para você!
						</str>
          </S.Div>
        </S.SilencioContentGrid>

        <S.SilencioContent>
          <T.H3 detach>Experiência do silêncio</T.H3>
					<p>
						Que o som do ambiente afeta nosso cérebro e nossa saúde mental é um fato que já foi experimentado por todos.
					</p>
					<p>
						Os sábios da antiguidade estão em acordo com os sábios da modernidade ao falarem que, quando estamos constantemente inseridos em ambientes com ruídos constantes e sons altos, nosso organismo é perturbado, o que pode gerar insônia, dificuldade de concentração, danos ao sistema auditivo, aumento do nível de estresse e agravar outros problemas de saúde. Ao contrário, os ambientes mais silenciosos trazem efeitos benéficos para nosso organismo, diminui o estresse, promove a neurogênese (regeneração neural), amplia a capacidade de aprendizagem e memória, aumenta a criatividade e promove inúmeros outros benefícios.
					</p>
					<p>
						Este silêncio promovido pela redução do barulho é apenas um tipo de silêncio.
					</p>
					<p>
						Mas imagine agora que está na natureza, em um ambiente tranquilo, com sons suaves, sem nada para fazer. Como está sua mente? Ela também está em silêncio em ressonância como ambiente ou continua fazendo barulho? Este é um outro tipo de silêncio, tão, ou mais importante, que o silêncio  do ambiente; este é o silêncio interior.
					</p>
					<p>
						Este silêncio interior é o responsável pela empatia, compaixão e felicidade; incluir o treino deste silêncio no seu dia a dia irá trazer uma maior qualidade de vida em todas as áreas da sua vida, mesmo inserido em um mundo turbulento, seu nível de perturbação irá reduzir drasticamente.
					</p>
					<p>
						E os outros níveis de silêncio, ainda mais profundos, você já ouviu falar?
					</p>
					<p>
						O fato mais interessante é que estes silêncios podem ser cultivado com o conhecimento e as técnicas adequadas, com dedicação e persistência, eu estou disposto a te ensinar e te acompanhar neste aprendizado.
					</p>

					<T.H3 detach>Como será feita a mentoria? </T.H3>
					<S.Grid3>
						<G.BasicCard>
							<str>Aulas semanais ao vivo</str>
							<p>Serão 8 aulas em grupo, ao vivo, toda quinta feira ás 20h com duração aproximada de 50 minutos.</p>
							<ul>
						<li>
							<T.OIcon />
							Agosto: dias 24 e 31
						</li>
						<li>
							<T.OIcon />
							Setembro: dias 7, 14, 21 e 28
						</li>
						<li>
							<T.OIcon />
							Outubro: dias 5 e 12
						</li>
							</ul>
						</G.BasicCard>
						<G.BasicCard>
							<str>Acompanhamento individual semanal</str>
							<p>O acompanhamento de cada aluno será feito mediante sessões individuais semanais, agendadas diretamente com o professor, com duração aproximada de 50 minutos. Cada aluno, entre uma aula ao vivo e outra, tem direito a uma sessão individual para seu acompanhamento.</p>
						</G.BasicCard>
						<G.BasicCard>
							<str>Plataforma de ensino</str>
							<p>É o local onde você poderá acessar por até 6 meses após o curso:</p>
					<ul>
						<li>
							<T.OIcon />
							As gravações das aulas ao vivo.
						</li>
						<li>
							<T.OIcon />
							Material extra como textos e áudios.
						</li>
					</ul>
						</G.BasicCard>
					</S.Grid3>

					<T.H3 detach>Qual será o conteúdo?</T.H3>
					<ul>
						<li>
							<T.LIcon />
							O que é a mente? Os pontos de vista dos sábios antigos e modernos
						</li>
						<li>
							<T.LIcon />
							Os níveis do som e os níveis de silêncio
						</li>
						<li>
							<T.LIcon />
							As origens do sofrimento
						</li>
						<li>
							<T.LIcon />
							Porque é difícil o silenciar? O que me impede de silenciar?
						</li>
						<li>
							<T.LIcon />
							Técnicas e práticas
						</li>
					</ul>

        </S.SilencioContent>
      </S.SilencioMain>
      <Footer />
    </>
  );
}
