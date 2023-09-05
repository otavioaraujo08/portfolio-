import { useSelector } from 'react-redux';
import { Module } from '../../components/Module';
import { SubtitlePage } from '../../components/SubtitlePage';
import { TitlePage } from '../../components/TitlePage';
import { Container, ApresentationBox } from './styles';

export const About = () => {
  const booleanLanguageValue = useSelector((state) => state.language);

  return (
    <Container>
      <Module icon="user" title={booleanLanguageValue ? 'About' : 'Sobre'} />

      <ApresentationBox>
        <TitlePage
          title={booleanLanguageValue ? 'My way...' : 'Meu trajeto...'}
        />

        <SubtitlePage>
          {booleanLanguageValue ? (
            <>
              Fullstack Javascript Developer with 2+ years of experience. I
              participated in Web projects using current technologies such as{' '}
            </>
          ) : (
            <>
              Desenvolvedor Javascript Fullstack com 2+ anos de experiência.
              Participei de projetos Web utilizando tecnologias atuais como{' '}
            </>
          )}
          <strong>
            ReactJs, Redux, Vue, Nuxt, NodeJs, NextJs, Express, TypeScript,
            Jest, MongoDB, MySQL, HTML, CSS, TailwindCSS, Github
          </strong>{' '}
          {booleanLanguageValue ? 'among others.' : `entre outras.`}
        </SubtitlePage>

        <SubtitlePage>
          <strong>
            {booleanLanguageValue
              ? 'I am Bachelor of Computer Science, '
              : `Sou Bacharel em Ciência da computação, `}
          </strong>
          {booleanLanguageValue
            ? 'currently working on personal projects in order to improve technical skills. '
            : `atualmente atuando em projetos pessoais com o intuito de aprimorar
              habilidades técnicas. `}
        </SubtitlePage>

        <SubtitlePage>
          {booleanLanguageValue ? (
            <>
              <strong>Passionate</strong> about everything involving{' '}
              <strong>technology </strong> and <strong>art</strong>, I like to
              share and help the community learn.
            </>
          ) : (
            <>
              <strong>Apaixonado</strong> por tudo que envolve{' '}
              <strong>tecnologia</strong> e <strong>arte</strong>, gosto de
              compartilhar e ajudar no aprendizado da comunidade.
            </>
          )}
        </SubtitlePage>
      </ApresentationBox>
    </Container>
  );
};
